import Topbar from '../components/Topbar.jsx';
import ProjectList from '../components/ProjectList.jsx';
import Footer from '../components/Footer.jsx';


function Projects() {
    return (
        <div className='container'>
            <header><h1 className='front-name'>Projects</h1></header>
            <Topbar/>
            <div className='content'>
                <h1>Recent projects</h1>
                <p>Here is the list of projects I have worked on.</p>
                <ProjectList/>
            </div>
            <Footer />
        </div>
      );
}

export default Projects;