import { NavLink } from "react-router-dom"
import {FaLinkedin} from "react-icons/fa"

function Navbar () {

    return (
        <div className="navlink-container">
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
        </div>
    )
}

export default Navbar