import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div>
            <table>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/portfolio'}>Portfolio</Link></li>
                <li><Link to={'/projects'}>Projects</Link></li>
                <li><Link to={'/devlogs'}>Devlogs</Link></li>
                <li><Link to={'/artworks'}>Artworks</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
            </table>
        </div>
    )
}

export default Sidebar;