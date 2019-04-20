import React from "react"

const CvCard = (props) => {
    let cv = props.cv
    return (

        <div key={cv.id} className="rounded overflow-hidden shadow-lg bg-marine-green">
            <img src={cv.image} className="block h-auto w-full" style={{ height: 'flex', objectFit: 'cover' }} />
        
    

        </div>
    )
}

export default CvCard