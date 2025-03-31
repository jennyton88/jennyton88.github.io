import { Link } from 'react-router-dom';


function Topbar() {
    return (
        <nav className='topbar'>
            <li className='hori-spacer'><Link to={'/'}>Home</Link></li>
            <li className='hori-spacer'><Link to={'/projects'}>Projects</Link></li>
            <li className='hori-spacer'><Link to={'/devlogs'}>Devlogs</Link></li>
            <li className='hori-spacer'><Link to={'/contact'}>Contact</Link></li>
        </nav>
    );
}

export default Topbar;