import { useState, useEffect } from 'react';
import Topbar from '../components/Topbar.jsx';
import ProjectMapper from '../components/ProjectMapper.jsx';
import Footer from '../components/Footer.jsx';


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

function Projects() {
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
        <div className='container'>
            <header><h1 className='front-name'>Projects</h1></header>
            <Topbar/>
            <div className='content'>
                <div className='column'>
                    {
                        projectInfo.length == 0 ? 
                        <p className='centered-box'>Loading...</p> : 
                        <ProjectMapper projects_data={projectInfo}/>
                    }
                </div>
            </div>
            <Footer />
        </div>
      );
}

export default Projects;