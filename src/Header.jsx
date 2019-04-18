import React from "react"
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className="flex flex-wrap justify-center">
            <nav className="header">
                <h1 className="header-title">
                    <Link className="h1-link hover" to='/'>CARLA ROSÉN</Link> 
                </h1>
            </nav>
        </div>
    )
}

export default Header