const About = () => {
  return ( 
    <section className="about h-dvh overflow-y-scroll">
      <div className="container h-dvh">
        <h2 className="">Designing seamless, responsive, and dynamic interfaces that turn complex ideas into simple experiences.</h2>
        <p className="">I’m a frontend developer passionate about crafting intuitive and engaging web experiences. Scroll down to learn more about my journey and what drives me.</p>
      </div>
      <img src="/about-bg.jpg" alt="#" />
      <div className="container h-dvh mx-auto pt-[120px] pb-[95px] flex flex-col gap-[62px]">
        <div className="h-full flex justify-between items-start">
          
          
          <article className="">
            <span className="font-semibold text-sm uppercase tracking-wider">Crafting digital journeys</span>
            <h3 className="text-[26px] max-w-[201px] mt-[30px]">Building modern, responsive interfaces with passion and precision</h3>
          </article>
          <div className="w-[420px] h-[460px] bg-cyan-900/30 rounded-xl">
            надо по центру сделать 
          </div>
          <div className="max-w-[320px]  border-l-2 px-5 py-6 flex flex-col gap-4">
            <span>I have over three years of experience creating websites ranging from clean HTML/CSS layouts to PHP/Laravel projects. </span>
            <span>Today, my main focus is building modern interfaces with React. I work with Redux, Axios, Tailwind, GSAP, and API integrations, and I also have experience with databases like MongoDB and PostgreSQL, which helps me deliver full, polished solutions.</span>
          </div>
          
        </div>

        <div className="max-w-max mx-auto text-center">
          <h3 className="font-bold text-[64px] uppercase leading-17">Shaping the web, one project</h3>
          <span className="inline-block mt-[30px] font-medium text-xl uppercase tracking-wider">Code. Design. Impact.</span>
        </div>
      </div>
    </section>
   );
}
 
export default About;