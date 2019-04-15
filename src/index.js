import React from "react"
import ReactDOM from "react-dom"
import Hello from "./Hello"
import Header from "./Header"
import Footer from "./Footer"
import './css/tailwind.css';
import { BrowserRouter } from 'react-router-dom'
import Projects from "./Projects"
import About from "./About"


const App = () => {
    return (
    <div className="page-wrapper">
        <div className="page-content">
            <Header />
            <div className="content-wrapper"> 
                <Hello />
            </div>
            <Footer />
        </div>
    </div>
    )
};



ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));
