function ProjectCard ({project}) {
    const {id, name, heroku, imageSrc, oneLiner, github, githubBackend, demo} = project
    
    console.log(imageSrc[`image${id}`])

    return (
        <div >
            <div className="project-card">
               <strong> <div className="title">{name}</div> </strong>
                <a href={demo} className="link">Demo Video</a>
                {heroku.length > 1 ? <div><a className="link" href={heroku}>Deployed Aplication</a></div> : null}
                <img className="image" src={imageSrc[`image${id}`]} alt={name}></img>
                <div className="card-text-div">{oneLiner}</div>
                <a className="link" href={github}> Github </a> 
                {githubBackend.length > 1 ? <div><a className="link" href={githubBackend}>Github Backend</a></div>: null}
            </div>
        </div>
    )
}

export default ProjectCard