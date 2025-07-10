import { Link } from 'react-router-dom';

import Topbar from '../components/Topbar.jsx';
import ProjectList from '../components/ProjectList.jsx';
import Footer from '../components/Footer.jsx';


function Home() {
    return (
        <div className="container">
            <header><h1 className='front-name'>Jenny Ton</h1></header>
            <Topbar />
            <div className='content'>
                <h1>About Me</h1>
                <hr/>
                <p>Hi, I'm Jenny, I'm looking to make interesting things.</p>
                <h2>What am I currently working on?</h2>
                <p>I'm working on improving <Link to="https://github.com/jennyton88/devlogs_maker">Devlogs Maker</Link>, which you can find on my Github. I'm also working on some games, and additional software in the background. You may find some updates about them occasionally on my social media.</p>
                <h2>Interests</h2>
                <p style={{paddingLeft:"15px"}}>
                    <li>Printmaking</li>
                    <li>Papermaking</li>
                    <li>Digital Drawing</li>
                    <li>Making Games</li>
                    <li>3D Modeling</li>
                    <li>Video Editing</li>
                </p>
                <br/>
                <h1>Recent Projects</h1>
                <hr/>
                <ProjectList/>
            </div>
            <Footer />
        </div>
    );
}

export default Home;