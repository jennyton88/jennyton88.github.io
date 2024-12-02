import { Link } from 'react-router-dom';

function Mainbar() {
    return (
        <nav className="centered-box">
            <li><Link to={'/projects'}>Projects</Link></li>
            <li><Link to={'/devlogs'}>Devlogs</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <h4 
                style={{
                    paddingTop: '15px',
                    borderTop: '1px solid #81c200',
                    paddingBottom: '15px',
                    borderBottom: '1px solid #81c200'
                }}>Links
            </h4> 
            <Link to={"https://github.com/jennyton88"}>Github</Link>
            <Link to={"https://jennydevs.itch.io/"}>Itch</Link>
        </nav>
    )
}

export default Mainbar;