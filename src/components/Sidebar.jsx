import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/portfolio'}>Portfolio</Link></li>
                            <li><Link to={'/projects'}>Projects</Link></li>
                            <li><Link to={'/devlogs'}>Devlogs</Link></li>
                            <li><Link to={'/artworks'}>Artworks</Link></li>
                            <li><Link to={'/contact'}>Contact</Link></li>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Sidebar;