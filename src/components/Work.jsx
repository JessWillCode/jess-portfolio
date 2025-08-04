import Project from "./Project";
import projects from "../projects";

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <p className='text-4xl text-[#7562a1] font-[Amsterdam4] font-bold inline border-b-4 border-[#2a145b] pb-8'>Work</p>
              {
                  projects.map(project => (
                      <Project key={project.title} project={project} />
                  ))
              }
        </div>
    </div>
  )
}

export default Work;