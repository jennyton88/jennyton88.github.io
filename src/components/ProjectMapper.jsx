/* eslint-disable react/prop-types */
import { useState } from "react";
import Project from "./Project.jsx";


function groupProjects(projects_data) {
    let projects_per_row = 3;

    let project_counter = 0;

    let total_grouped_projects = [];
    let grouped_projects = [];

    for (let i = 0; i < projects_data.length; i++) {
        grouped_projects.push(projects_data[i]);
        project_counter++;
        if (i == projects_data.length - 1) {
            total_grouped_projects.push(grouped_projects);
            grouped_projects = [];
        }
        else if (project_counter == projects_per_row) {
            total_grouped_projects.push(grouped_projects);
            grouped_projects = [];
            project_counter = 0;
        }
    }

    return total_grouped_projects;
}


function ProjectMapper({ projects_data }) {
    const [projectGroups] = useState(groupProjects(projects_data));

    return (
        <>
            {
                projectGroups.map(
                    (project_group) => 
                    <div className="row" key={project_group[0][0]}>
                        {
                            project_group.map(
                                (proj) => 
                                <Project key={proj[0]} project_id={proj[0]} project_data={proj}/>
                            )
                        }
                    </div>
                )
            }
        </>
    );
}

export default ProjectMapper;