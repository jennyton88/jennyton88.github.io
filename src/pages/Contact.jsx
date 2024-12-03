import { Link } from 'react-router-dom';

import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Sidebar from '../components/Sidebar.jsx';


function Contact() {
    return (
        <div className="container">
            <Header title={"Links"}/>
            <div className="content">
                <Sidebar />
                <div className="padded-box">
                    <p>If you have any questions, please contact me at my email address: [email]</p>
                    <p>Thank you for your time.</p>
                    <h3>External Links</h3>
                    <div style={{listStyle: 'none'}}>
                        <li><Link to={"https://github.com/jennyton88"}>Github</Link></li>
                        <li><Link to={"https://jennydevs.itch.io/"}>Itch</Link></li>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;