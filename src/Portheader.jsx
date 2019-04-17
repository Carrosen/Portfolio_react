import React from "react"
import { NavLink } from 'react-router-dom';

const Portheader = () => {
    return (
    <nav>
    <ul className="portheader">
        <li className="mr-6"><NavLink className="li-navlink hover" activeStyle={{fontWeight: "bold"}} to='/about'>ABOUT ME</NavLink></li>
        <li className="mr-6"><NavLink className="li-navlink hover" activeStyle={{fontWeight: "bold"}} to='/projects'>MY PROJECTS</NavLink></li>
        <li className="mr-6"><NavLink className="li-navlink hover" activeStyle={{fontWeight: "bold"}} to='/contact'>CONTACT ME</NavLink></li>
    </ul>
    </nav>
    )
}

export default Portheader


