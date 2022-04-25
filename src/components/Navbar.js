import { NavLink } from "react-router-dom"

function Navbar () {

    return (
        <>
                <NavLink to="/">
                    Home 
                </NavLink>
                <NavLink to="about">
                    About 
                </NavLink>
                <NavLink to="projects">
                    Projects 
                </NavLink>
                <NavLink to="resume">
                    Resume 
                </NavLink>
                <NavLink to="contact">
                    Contact 
                </NavLink>
        </>
    )
}

export default Navbar