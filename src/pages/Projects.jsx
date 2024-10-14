import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Project from '../components/Project.jsx';
import Sidebar from '../components/Sidebar.jsx';


function Projects() {
    return (
        <div className='devbody'>
            <div className="devheader" >
                    <Header />
            </div>
            <div className='content'>
                <div className='column'>
                    <h2>Projects</h2>
                    <div className="row">
                        <Project />
                        <Project />
                        <Project />
                    </div>
                    <div className="row">
                        <Project />
                        <Project />
                        <Project />
                    </div>
                    <div className="row">
                        <Project />
                        <Project />
                        <Project />
                    </div>                    
                </div>
                <div className="sidebar">
                        <Sidebar />
                </div>
            </div>
            <div className="devfooter" >
                    <Footer />
            </div>
        </div>
      );
}

export default Projects;