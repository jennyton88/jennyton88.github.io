import Header from '../components/Header.jsx';
import Topbar from '../components/Topbar.jsx';
import ProjectList from '../components/ProjectList.jsx';
import Footer from '../components/Footer.jsx';


function Projects() {
    return (
        <div className='container'>
            <Header header_data={'Projects'}/>
            <Topbar/>
            <div className='content'>
                <ProjectList/>
            </div>
            <Footer />
        </div>
      );
}

export default Projects;