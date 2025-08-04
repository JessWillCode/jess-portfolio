import Project from "./Project";
import projects from "../projects";
import React from "react";

const Work = () => {
  return (
      <section className="py-12 pb-20 mx-auto">
        <div className="w-full text-center pb-14">
            <h2 className="w-full text-4xl text-[#7562a1] font-bold font-[Amsterdam4] inline border-b-4 border-[#2a145b]">
          Work
        </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl">
          {projects.map((project, index) => (
              <Project key={index} project={project} />
          ))}
        </div>
      </section>
  )
}

export default Work;