import React from "react"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="header">
            <h1 className="header-title">
                <Link className="h1-link hover" to='/'>CARLA ROSÉN</Link> 
            </h1>
        </nav>
    )
}

export default Header