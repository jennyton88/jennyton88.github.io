import { Link } from 'react-router-dom';
import { FaHome, FaGithub, FaItchIo, FaMastodon } from 'react-icons/fa';
import { FaBluesky } from 'react-icons/fa6';


function Footer() {
    return (
        <footer>
            <nav>
                <li className='hori-spacer'>
                    <Link to={'/'}><FaHome className='colored-logo left-hori-spacer'/>Home</Link>
                </li>
                <li className='hori-spacer'>
                    <Link to={'https://github.com/jennyton88'}><FaGithub className='colored-logo left-hori-spacer'/>Github</Link>
                </li>
                <li className='hori-spacer'>
                    <Link to={'https://jennydevs.itch.io/'}><FaItchIo className='colored-logo left-hori-spacer'/>Itch.io</Link>
                </li>
                <li className='hori-spacer'>
                    <Link to={'https://mastodon.gamedev.place/@jennydevs'}><FaMastodon className='colored-logo left-hori-spacer'/>Mastodon</Link>
                </li>
                <li className='hori-spacer'>
                    <Link to={'https://bsky.app/profile/jennydevs.bsky.social'}><FaBluesky className='colored-logo left-hori-spacer'/>Bluesky</Link>
                </li>
            </nav>
            <div><small>© Jenny Ton</small></div>
        </footer>
    );
}

export default Footer;