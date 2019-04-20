import React, { Component } from "react"
import axios from "axios"
import CvCard from "./CvCard"

class CV extends Component {
    constructor() {
        super();
        this.state = {
            cv: []
        };
    }

    componentDidMount() {
        axios.get('./src/data/CV.json')
        .then(response => {
            this.setState({
                cv: response.data
            })
        })
    }

    render() {
        const cv = this.state.cv
        let cvList

        if (cv.length > 0) {
            cvList = cv.map(cv => {
                return (
                    <div key={cv.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-2/3">
                        <CvCard cv={cv} />
                    </div>
                )
            })
        }

        return (
            <div className="content-wrapper">


                <div className="flex flex-wrap justify-center mx-auto">
                    {cvList}
                </div>
            </div>
        )
    }
};


export default CV
