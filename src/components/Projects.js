import ProjectCard from "./ProjectCard"

function Projects () {

    let projects = [ 
        {
          name: "Stock Tracker",
          heroku: "",
          imageSrc: "",
          oneLiner: "Stock tracking application that displays real time stock information and news, and allows users to manage their portfolio.",
          github: "https://github.com/felipamendez/project-template-react-rails-api",
          githubBackend: ""
        }, 
        {
          name: "Crave Local",
          heroku: "",
          imageSrc: "",
          oneLiner: "Application that connects users and restaurants to view menus and store online orders.",
          github: "https://github.com/jcollinc/crave-local",
          githubBackend: ""
        }, 
        {
          name: "Raven",
          heroku: "",
          imageSrc: "",
          oneLiner: "Social media website that allows users to like and write posts, users can view the user pages.",
          github: "https://github.com/felipamendez/phase-3-project-frontend",
          githubBackend: "https://github.com/felipamendez/phase-3-sinatra-react-project"
        }, 
        {
          name: "Mom & Pop",
          heroku: "",
          imageSrc: "",
          oneLiner: "Ecommerce application that displays, and filters products, allows users to leave a review, and add items to cart.",
          github: "https://github.com/matt-draghi/phase-2-project",
          githubBackend: ""
        }, 
      ]

      console.log(projects)
    
      let singleProject = projects.map((project) => {return (
        <div >
            <ProjectCard project={project}/>
        </div>)
    })
    
    return (
        <div >{singleProject}</div>
    )
}

export default Projects