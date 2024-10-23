import { useState } from "react";


function Project({project_data}) {
    const [project] = useState({
        img_name: project_data[2],
        title: project_data[1],
        description: project_data[3],
    });
    
    return (
        <div className="centered-project-box">
            {<img src={`/images/${project.img_name}`}/>}
            <h4>{project.title}</h4>
            <p>{project.description}</p>
        </div>
    );
}

export default Project;