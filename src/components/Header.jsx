import gsap from "gsap";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50 && !scrolled) {
        setScrolled(true);
        gsap.to("header", { 
          padding: '18px 0',
          backgroundColor: "#fff", 
          boxShadow: 'none', 
          duration: 0.5 
        });
      } else if (window.scrollY <= 50 && scrolled) {
        setScrolled(false);
        gsap.to("header", { 
          padding: '24px 0',
          backgroundColor: "transparent", 
          boxShadow: "none", 
          duration: 0.5 
        });
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  return ( 
    <header>
      <div className="container mx-auto header">
        
        <a href="#" className="logo">
          <img src="./logo.svg" alt="" />
        </a>
        <nav>
          <ul>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About me</a></li>
            <li><a href="#">Certificates</a></li>
          </ul>
        </nav>
        <div className="btns flex items-center gap-6">
          <button className="button btn-solid">
            <img src="./icons/lang.svg" alt="" />
          </button>
          <a href="#" className="button btn-regular">Contacts</a>
        </div>
      </div>
    </header>
   );
}
 
export default Header;