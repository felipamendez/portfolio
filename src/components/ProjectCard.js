function ProjectCard ({project}) {
    const {id, name, heroku, imageSrc, oneLiner, github, githubBackend} = project
    
    console.log(imageSrc[`image${id}`])

    return (
        <div >
            <div className="project-card">
               <strong> <div>{name}</div> </strong>
                <div><a href={heroku}>Heroku</a></div>
                <img className="image" src={imageSrc[`image${id}`]} alt={name}></img>
                <div>{oneLiner}</div>
                <a href={github}> Github </a> 
                {githubBackend.length > 1 ? <div><a href={githubBackend}>Github Backend</a></div>: null}
            </div>
        </div>
    )
}

export default ProjectCard