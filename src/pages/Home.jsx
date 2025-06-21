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
                <p>Hi, I like to create software.</p>
                <p>I'm always on the lookout for subjects that interest me. I like solving various problems and learning about interesting things!</p>
                <h2>What am I currently working on?</h2>
                <p>I'm working on improving <a href="https://github.com/jennyton88/devlogs_maker">Devlogs Maker</a>, which you can find on my Github.</p>
                <p>I also recently joined some game jams called <a href='https://itch.io/jam/32bitjam-summer-dreams'>32BitJam "Summer Dreams"</a> and <a href='https://itch.io/jam/3d-modelling-blender-jam'>3D Modelling Jam with Blender</a>, so check them out when the jams end.</p>
                <h1>Recent Projects</h1>
                <ProjectList/>
            </div>
            <Footer />
        </div>
    );
}

export default Home;