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
                <div className="column">
                    <div className="padded-box">
                        <Link to={"https://github.com/jennyton88"} className="horizontal-spacer">Github</Link><Link to={"https://jennydevs.itch.io/"}>Itch.io </Link>
                        <div className="spacer"/>
                        <p>If you have any questions, please contact me at my email address: [email]</p>
                        <p>Thank you for your time.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;