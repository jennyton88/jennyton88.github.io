import { Link } from 'react-router-dom';
import { FaHome, FaGithub, FaItchIo, FaMastodon } from 'react-icons/fa';
import { FaBluesky } from 'react-icons/fa6';


function Footer() {
    return (
        <footer>
            <nav>
                <li className='hori-spacer'>
                    <FaHome className='colored-logo left-hori-spacer'/>
                    <div className='left-hori-spacer'/>
                    <Link to={'/'}>Home</Link>
                </li>
                <li className='hori-spacer'>
                    <FaGithub className='colored-logo left-hori-spacer'/>
                    <Link to={'https://github.com/jennyton88'}>Github</Link>
                </li>
                <li className='hori-spacer'>
                    <FaItchIo className='colored-logo left-hori-spacer'/>
                    <Link to={'https://jennydevs.itch.io/'}>Itch.io</Link>
                </li>
                <li className='hori-spacer'>
                    <FaMastodon className='colored-logo left-hori-spacer'/>
                    <Link to={'https://mastodon.gamedev.place/@jennydevs'}>Mastodon</Link>
                </li>
                <li className='hori-spacer'>
                    <FaBluesky className='colored-logo left-hori-spacer'/>
                    <Link to={'https://bsky.app/profile/jennydevs.bsky.social'}>Bluesky</Link>
                </li>
            </nav>
            <div style={{paddingTop:'6px'}}><small>© Jenny Ton</small></div>
        </footer>
    );
}

export default Footer;