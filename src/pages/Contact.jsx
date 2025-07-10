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
                        <Link to={'https://mastodon.gamedev.place/@jennydevs'}><FaMastodon className='colored-logo left-hori-spacer'/>@jennydevs@mastodon.gamedev.place</Link>
                    </li>
                    <li>
                        <Link to={'https://bsky.app/profile/jennydevs.bsky.social'}><FaBluesky className='colored-logo left-hori-spacer'/>@jennydevs.bsky.social</Link>
                    </li>
                </nav>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;