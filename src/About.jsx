import React from "react"
import { UndrawOrganizingProjects } from 'react-undraw-illustrations';

const About = () => {
    return (
        <div className="content-wrapper">
            <div className="flex flex-wrap mb-4">
                <div className="w-full lg:w-1/4 md:w-1/2">
                    <UndrawOrganizingProjects primaryColor='#B2B2A2' height='200px'/>
                </div>
                <div className="w-full lg:w-3/4 md:w-1/2">
                    <h1 className="content-text">About Me</h1>
                    <p className="content-text">"Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?"</p>
                </div>

            </div>
        </div>
    )
};

export default About