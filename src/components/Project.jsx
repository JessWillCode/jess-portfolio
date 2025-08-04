import projects from "../projects";

export const Project = (props) => {
    const { project } = props;
    return (
        <div className="bg-white dark:bg-[#1a132f] shadow-lg rounded-2xl p-6 border border-[#2a145b] hover:scale-[1.02] transition-transform duration-200">
            <h2 className="text-xl font-bold dark:text-[#cbb6ff] mb-4">{project.title}</h2>
            <p className="text-zinc-800 dark:text-zinc-200 text-sm mb-4">{project.description}</p>

            <div className="mb-4">
                <h3 className="font-semibold text-[#2a145b] dark:text-[#cbb6ff] mb-1 text-sm">Tech Stack:</h3>
                <div className="flex flex-wrap gap-2">
                    {project.tech_stack.map((tech, i) => (
                        <span
                            key={i}
                            className="text-xs bg-[#f1ecff] dark:bg-[#2e1e5c] text-[#2a145b] dark:text-[#cbb6ff] px-2 py-1 rounded-full">
              {tech}
            </span>
                    ))}
                </div>
            </div>

            <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 text-sm space-y-1 mb-4">
                {project.highlights.map((item, i) => (<li key={i}>{item}</li>))}
            </ul>

            {project.links && (
                <div className="mt-2 flex gap-4">
                    {project.links.deployed_site && (
                        <a
                            href={project.links.deployed_site}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#7562a1] underline hover:opacity-80">Live Site
                        </a>
                    )}
                    {project.links.github_repo && (
                        <a
                            href={project.links.github_repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#7562a1] underline hover:opacity-80">GitHub Repo
                        </a>
                    )}
                    {project.links.case_study && (
                        <a
                            href={project.links.case_study}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#7562a1] underline hover:opacity-80">Case Study
                        </a>
                    )}
                </div>
            )}
        </div>
    )
}

export default Project;