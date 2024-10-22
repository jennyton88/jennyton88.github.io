import { Link } from 'react-router-dom';

function Mainbar() {
    return (
        <nav className="centered-box">
            <li><Link to={'/portfolio'}>Portfolio</Link></li>
            <li><Link to={'/projects'}>Projects</Link></li>
            <li><Link to={'/devlogs'}>Devlogs</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
        </nav>
    )
}

export default Mainbar;