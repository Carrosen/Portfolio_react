import React from "react"
import ReactDOM from "react-dom"
import Hello from "./Hello"
import Header from "./Header"
import Footer from "./Footer"
import './css/tailwind.css';
import { BrowserRouter } from 'react-router-dom'
import Projects from "./Projects"
import About from "./About"
import { Switch, Route } from 'react-router-dom'
import Contact from "./Contact"
import Portheader from "./Portheader"

const App = () => {
    return (
    <div className="page-wrapper">
        <div className="page-content">
            <Portheader />
            <Header />
            <div id="main-section" className="content-wrapper bg-light-beige"> 
                <Switch>
                    <Route exact path='/' component={Hello}></Route>
                    <Route exact path='/about' component={About}></Route>
                    <Route exact path='/projects' component={Projects}></Route>
                    <Route exact path='/contact' component={Contact}></Route>
                </Switch>
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
