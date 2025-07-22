import { Link } from 'react-router-dom';

import { FaGithub, FaItchIo, FaMastodon, FaBluesky, FaYoutube } from 'react-icons/fa6';

import Header from '../components/Header.jsx';
import Topbar from '../components/Topbar.jsx';
import ProjectList from '../components/ProjectList.jsx';
import Footer from '../components/Footer.jsx';


function Home() {
    return (
        <div className="container">
            <Header header_data={'Jenny Ton'}/>
            <Topbar />
            <div className='content'>
                <h1>Hi, I'm Jenny!</h1>
                <hr/>
                <h2>What am I working on?</h2>
                <p>I'm working on improving <Link to="https://github.com/jennyton88/devlogs_maker">Devlogs Maker</Link>, which you can find on my Github. I'm also working on some games, and additional software in the background. You may find some updates about them occasionally on my social media.</p>
                <h2>My Links</h2>
                <nav style={{listStyle: 'none'}}>
                    <li><Link to={'https://github.com/jennyton88'}><FaGithub className='logo-link'/>Github</Link></li>
                    <li><Link to={'https://jennydevs.itch.io/'}><FaItchIo className='logo-link'/>Itch.io</Link></li>
                    <li><Link to={'https://bsky.app/profile/jennydevs.bsky.social'}><FaBluesky className='logo-link'/>Bluesky</Link></li>
                    <li><Link to={'https://mastodon.gamedev.place/@jennydevs'}><FaMastodon className='logo-link'/>Mastodon</Link></li>
                    <li><Link to={'https://www.youtube.com/@jennydevs'}><FaYoutube className='logo-link'/>YouTube</Link></li>
                </nav>
                <p>I compiled my links onto <Link to={'https://linktr.ee/jennydevs'}>Linktree</Link> so you can bookmark them!</p>
                <h2>What subjects am I exploring?</h2>
                <p style={{paddingLeft:"15px"}}>
                    <li>Making Games</li>
                    <li>Printmaking</li>
                    <li>Papermaking</li>
                    <li>Stamps</li>
                    <li>Digital Art</li>
                    <li>3D Modeling</li>
                    <li>Video Editing</li>
                </p>
                <h1>Recent Projects</h1>
                <hr/>
                <ProjectList/>
            </div>
            <Footer />
        </div>
    );
}

export default Home;