const WelcomeSection = () => {
  return ( 
    <div className="welcome-section">
      <div className="welcome-body">
        
        <div className="flex items-center justify-center gap-[12px]">
          <span>Valentin Kim</span>
          <span className="label">Frontend Developer</span>
          <span>Vanilla / React</span>
        </div>

        <h1 className="">Designing for Every Screen, Developing for Every Idea</h1>
        <p>Bridging design and code through modern React interfaces</p>
        <a href="#" className="welcome-btn">Projects</a>
      </div>
    </div>
  );
}
 
export default WelcomeSection;