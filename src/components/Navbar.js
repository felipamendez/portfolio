import { NavLink } from "react-router-dom"
import {FaLinkedin} from "react-icons/fa"
import image from "./portfolioImages/graduation.jpeg"
import { BsGithub } from "react-icons/bs"

function Navbar () {

    return (
        <div className="navlink-container">
                <img src={image} alt="Felipa Mendez" className="circle-img"/>
                <NavLink to="/" className="navlink">
                   <div> Home </div> 
                </NavLink>
                <NavLink to="about" className="navlink">
                    <div>  About </div> 
                </NavLink>
                <NavLink to="projects" className="navlink">
                    <div> Projects </div> 
                </NavLink>
                <NavLink to="resume" className="navlink">
                    <div> Resume </div> 
                </NavLink>
                <NavLink to="contact" className="navlink">
                    <div> Contact </div> 
                </NavLink>
                <NavLink to="Blog" className="navlink">
                    <div> Blog </div> 
                </NavLink>
               <a href="https://www.linkedin.com/in/felipa-mendez/"> <FaLinkedin /> </a> 
               <a href="https://github.com/felipamendez"><BsGithub /></a>
        </div>
    )
}

export default Navbar