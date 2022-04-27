function ProjectCard ({project}) {
    const {name, heroku, imageSrc, oneLiner, github, githubBackend} = project
    
    return (
        <div className="card-container">
            <div className="project-card">
               <strong> <div>{name}</div> </strong>
                <div>{heroku}</div>
                <div>{imageSrc}</div>
                <div>{oneLiner}</div>
                <a href={github}> Github </a> 
                {githubBackend.length > 1 ? <div><a href={githubBackend}>Github Backend</a></div>: null}
            </div>
        </div>
    )
}

export default ProjectCard