function ProjectCard ({project}) {
    const {id, name, heroku, imageSrc, oneLiner, github, githubBackend} = project
    
    console.log(imageSrc[`image${id}`])

    return (
        <div >
            <div className="project-card">
               <strong> <div>{name}</div> </strong>
                {heroku.length > 1 ? <div><a className="navlink" href={heroku}>Heroku</a></div> : null}
                <img className="image" src={imageSrc[`image${id}`]} alt={name}></img>
                <div>{oneLiner}</div>
                <a className="navlink" href={github}> Github </a> 
                {githubBackend.length > 1 ? <div><a className="navlink" href={githubBackend}>Github Backend</a></div>: null}
            </div>
        </div>
    )
}

export default ProjectCard