import ProjectCard from "./ProjectCard"
import image1 from "./portfolioImages/stocktracker.jpeg"
import image2 from "./portfolioImages/cravelocal.png"
import image3 from "./portfolioImages/raven.png"
import image4 from "./portfolioImages/momandpop.png"

function Projects () {

    let projects = [ 
        {
          id: 1,
          name: "Stock Tracker",
          demo: "https://youtu.be/DCsAOKMujnM",
          heroku: "https://stock-tracker-project.herokuapp.com/login",
          imageSrc: {image1},
          oneLiner: "Stock tracking application that displays real time stock information and news, and allows users to manage their portfolio. Try it out with this username and password: test, password",
          github: "https://github.com/felipamendez/project-template-react-rails-api",
          githubBackend: ""
        }, 
        {
          id: 2,
          name: "Crave Local",
          demo: "https://youtu.be/6YhpWCqxZk0",
          heroku: "https://crave-local-project.herokuapp.com/login",
          imageSrc: {image2},
          oneLiner: "Application that connects users and restaurants to view menus and store online orders. Try it out with this username and password: felipa@felipa.com, password",
          github: "https://github.com/jcollinc/crave-local",
          githubBackend: ""
        }, 
        {
          id: 3,
          demo: "https://youtu.be/_l0Exz5mSNo",
          name: "Raven",
          heroku: "",
          imageSrc: {image3},
          oneLiner: "Social media website that allows users to like and write posts. Users can view the user pages and write comments.",
          github: "https://github.com/felipamendez/phase-3-project-frontend",
          githubBackend: "https://github.com/felipamendez/phase-3-sinatra-react-project"
        }, 
        {
          id: 4,
          demo: "https://youtu.be/kuR22Ww0VCk",
          name: "Mom & Pop",
          heroku: "",
          imageSrc: {image4},
          oneLiner: "Ecommerce application that displays, and filters products. Allows users to leave a review, and add items to cart.",
          github: "https://github.com/matt-draghi/phase-2-project",
          githubBackend: ""
        }, 
      ]

    
      let singleProject = projects.map((project) => {return (
        <div  >
            <ProjectCard project={project}/>
        </div>)
    })
    
    return (
        <div className="card-container">{singleProject}</div>
    )
}

export default Projects