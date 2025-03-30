import { useState, useEffect } from 'react';
import ProjectMapper from './ProjectMapper.jsx';


function separateProjects(project_list) {
    let projects = [];
    let single_project = [];
    const data_lines = 6;
    
    let counter = 0;

    for (let i = 0; i < project_list.length; i++) {
        single_project.push(project_list[i]);
        counter++;

        if (counter == data_lines) {
            projects.push(single_project);
            single_project = [];
            counter = 0;
        }
    }
    
    return projects;
}

function ProjectList() {
    const [projectInfo, setProjectInfo] = useState([]);
    
    useEffect(() => {
        async function getProjectsInfo() {
            await fetch("/text_files/projects_info.txt")
            .then((response)=> {
                return response.text();
            })
            .then((project_list) => {
                setProjectInfo(separateProjects(project_list.split("\n")));
            })
            .catch((error) => {
                console.error(error);
            });
        }

        getProjectsInfo();
    }, []);

    return (
        <div className='column'>
            {
                projectInfo.length == 0 ? 
                <p className='centered-box'>Loading...</p> : 
                <ProjectMapper projects_data={ projectInfo }/>
            }
        </div>
      );
}

export default ProjectList;