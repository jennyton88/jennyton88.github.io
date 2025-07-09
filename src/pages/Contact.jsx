import { Link } from 'react-router-dom';
import { FaMastodon } from 'react-icons/fa';
import { FaBluesky } from 'react-icons/fa6';
import Footer from '../components/Footer.jsx';
import Topbar from '../components/Topbar.jsx';


function Contact() {
    return (
        <div className="container">
            <header><h1 className='front-name'>Contact Me</h1></header>
            <Topbar />
            <div className="content">
                <h1>Thanks for visiting!</h1>
                <hr/>
                <br/>
                <nav style={{listStyle: 'none'}}>
                    <li>
                        <FaMastodon className='colored-logo'/>
                        <div className='left-hori-spacer' />
                        <Link to={'https://mastodon.gamedev.place/@jennydevs'}>@jennydevs</Link>
                    </li>
                    <li>
                        <FaBluesky className='colored-logo'/>
                        <div className='left-hori-spacer' />
                        <Link to={'https://bsky.app/profile/jennydevs.bsky.social'}>@jennydevs.bsky.social</Link>
                    </li>
                </nav>
                <br/>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;