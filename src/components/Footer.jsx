import { Link } from 'react-router-dom';
import { FaHome, FaGithub, FaItchIo, FaMastodon } from 'react-icons/fa';
import { FaBluesky } from 'react-icons/fa6';


function Footer() {
    return (
        <footer>
            <nav className='footer-padding'>
                <FaHome className='colored-logo'/>
                <div className='left-hori-spacer'/>
                <Link to={'/'}>Home</Link><div className='hori-spacer'/>
                <FaGithub className='colored-logo'/>
                <div className='left-hori-spacer'/>
                <Link to={'https://github.com/jennyton88'}>Github</Link>
                <div className='hori-spacer'/>
                <FaItchIo className='colored-logo'/>
                <div className='left-hori-spacer'/>
                <Link to={'https://jennydevs.itch.io/'}>Itch.io</Link>
                <div className='hori-spacer'/>
                <FaMastodon className='colored-logo'/>
                <div className='left-hori-spacer'/>
                <Link to={'https://mastodon.gamedev.place/@jennydevs'}>Mastodon</Link>
                <div className='hori-spacer'/>
                <FaBluesky className='colored-logo'/>
                <div className='left-hori-spacer'/>
                <Link to={'https://bsky.app/profile/jennydevs.bsky.social'}>Bluesky</Link>
            </nav>
        </footer>
    );
}

export default Footer;