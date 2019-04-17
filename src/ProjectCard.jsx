import React from "react"

const ProjectCard = (props) => {
    let project = props.project
    return (

        <div key={project.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-marine-green">
            <img src={project.image} className="block h-auto w-full" style={{ height: '150px', objectFit: 'cover' }} />
        
        
            <div className="px-6 py-4" style={{ minHeight: '150px'}} >
                <div className="font-bold text-xl text-white mb-2 text-center">{project.name}</div>
                <p className="text-grey-darker text-base">
                    {project.discription}
                </p>
            </div>

            <div className="flex items-center justify-between leading-none p- md:p-4">
                <button className="bg-white hover:bg-grey-lightest text-grey-darkest font-semibold py-2 px-4 border border-grey-light rounded shadow">
                    Details
                </button>
            </div>

        </div>
    )
}

export default ProjectCard