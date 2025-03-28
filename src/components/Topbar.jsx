import { Link } from 'react-router-dom';


function Topbar() {
    return (
        <nav className='topbar'>
            <div style={{verticalAlign:'center'}}>
            <Link to={'/'}>Home</Link> 
            <div className='hori-spacer'/>
            <Link to={'/projects'}>Projects</Link>
            <div className='hori-spacer'/>
            <Link to={'/devlogs'}>Devlogs</Link>
            <div className='hori-spacer'/>
            <Link to={'/contact'}>Contact</Link>
            </div>
        </nav>
    );
}

export default Topbar;