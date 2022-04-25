import { NavLink } from "react-router-dom"

function Navbar () {

    return (
        <>
            <NavLink to="/">
            <div> Home </div>
            </NavLink>
            <NavLink to="/about">
            <div> About </div>
            </NavLink>
            <NavLink to="/projects">
            <div> Projects </div>
            </NavLink>
            <NavLink to="/resume">
            <div> Resume </div>
            </NavLink>
            <NavLink to="/contact">
            <div> Contact </div>
            </NavLink>
        </>
    )
}

export default Navbar