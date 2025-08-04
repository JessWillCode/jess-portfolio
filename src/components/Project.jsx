
export const Project = (props) => {
    const { project } = props;
    return (
            <section className='flex flex-col justify-center items-center w-full h-full'>
                <h2>{project.title}</h2>
                <h3>{project.description}</h3>
                <h3>Built with love and</h3>
                <div key={project.title}>
                    <ul>
                        {project.tech_stack.map(tech => (<li>{tech}</li>))}
                    </ul>
                </div>
                <h3>Highlights</h3>
                <div key={project.title}>
                    <ul>
                        {project.highlights.map(bullet => (<li>{bullet}</li>))}
                    </ul>
                </div>
            </section>
    )
}

export default Project;