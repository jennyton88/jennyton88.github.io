import { Link } from 'react-router-dom';

function Mainbar() {
    return (
        <nav className="centered-box">
            <li><Link to={'/portfolio'}>Portfolio</Link></li>
            <li><Link to={'/projects'}>Projects</Link></li>
            <li><Link to={'/devlogs'}>Devlogs</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <h4>Links</h4> 
            <Link to={"https://github.com/jennyton88"}>Github</Link>
            <Link to={"https://jennydevs.itch.io/"}>Itch.io </Link>
        </nav>
    )
}

export default Mainbar;