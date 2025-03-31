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
                <p>Hi, I&apos;m Jenny Ton, a software developer!</p>
                <p>I like to solve various problems and learn about interesting things. I&apos;m always on the lookout for subjects that interest me. Currently I&apos;m researching papermaking, specifically the different types of molds that shape the resulting paper.</p>
                <p>As for my current project, I&apos;m working on an app to make devlogs easier to write and post. It&apos;ll be a tool that&apos;ll allow me to type and import text files for uploading to the website. If you&apos;re interested in my other works, my published projects are on display below.</p>
                <h2>Recent Projects</h2>
                <ProjectList/>
            </div>
            <Footer />
        </div>
    );
}

export default Home;