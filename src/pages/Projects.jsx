import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Project from '../components/Project.jsx';
import Sidebar from '../components/Sidebar.jsx';


function Projects() {
    return (
        <div className='container'>
            <Header title={"Projects"}/>
            <div className='content'>
                <div className='column'>
                    <div className="row">
                        <Project />
                        <div className="spacer"/>
                        <Project />
                        <div className="spacer"/>
                        <Project />
                    </div>
                    <div className="row">
                        <Project />
                        <div className="spacer"/>
                        <Project />
                        <div className="spacer"/>
                        <Project />
                    </div>
                    <div className="row">
                        <Project />
                        <div className="spacer"/>
                        <Project />
                        <div className="spacer"/>
                        <Project />
                    </div>  
                </div>
                <Sidebar />
            </div>
            <Footer />
        </div>
      );
}

export default Projects;