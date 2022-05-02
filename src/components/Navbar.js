import { NavLink } from "react-router-dom"
import {FaLinkedin} from "react-icons/fa"
import image from "./portfolioImages/graduation.jpeg"
import { BsGithub } from "react-icons/bs"

function Navbar () {

    return (
        <div className="navlink-container">
                <img src={image} alt="Felipa Mendez" className="circle-img"/>
               {/* <NavLink to="/"  className={({ isActive }) => (isActive ? "link-active" : "navlink")}>
                   <div> Home </div> 
                </NavLink> */}
                <NavLink to="portfolio/about" className={({ isActive }) => (isActive ? "link-active" : "navlink")}>
                    <div>  About </div> 
                </NavLink>
                <NavLink to="portfolio/projects" className={({ isActive }) => (isActive ? "link-active" : "navlink")}>
                    <div> Projects </div> 
                </NavLink>
                <NavLink to="portfolio/resume" className={({ isActive }) => (isActive ? "link-active" : "navlink")}>
                    <div> Resume </div> 
                </NavLink>
                <NavLink to="portfolio/contact" className={({ isActive }) => (isActive ? "link-active" : "navlink")}>
                    <div> Contact </div> 
                </NavLink>
                {/* <NavLink to="Blog" className={({ isActive }) => (isActive ? "link-active" : "navlink")}>
                    <div> Blog </div> 
                </NavLink> */}
                <a className="navlink" href="https://medium.com/@felipalouise">Blog</a>
               <div className="icon"><a href="https://www.linkedin.com/in/felipa-mendez/" className="icon"> <FaLinkedin /> </a> </div>
               <div className="icon"><a href="https://github.com/stars/felipamendez/lists/projects" className="icon"> <BsGithub /> </a></div>
        </div>
    )
}

export default Navbar