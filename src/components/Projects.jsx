const Projects = () => {
  return (  
    <div className="h-screen overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full">
        <div className="h-full grid grid-cols-[2fr_10fr_10fr_2fr] xl:grid-cols-[2fr_10fr_10fr_10fr_10fr_2fr]">
          <div className="absolute w-screen top-1/2 -translate-y-1/2">
            <img 
              src="/projects.svg" 
              alt="label projects" 
              className="w-full" 
            />
          </div>
          <div className="border-r border-[#D9D9D9] h-full"></div>
          <div className="border-r border-[#D9D9D9] h-full"></div>
          <div className="border-r border-[#D9D9D9] h-full"></div>
          <div className="border-r border-[#D9D9D9] h-full"></div>
          <div className="border-r border-[#D9D9D9] h-full"></div>
        </div>
      </div>
    </div>
  );
}
 
export default Projects;