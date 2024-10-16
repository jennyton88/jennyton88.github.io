import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Sidebar from '../components/Sidebar.jsx';

function Contact() {
    return (
        <div className="container">
            <Header title={"Contact Me"}/>
            <div className="content">
                <div className="column">
                    <div className="padded-box">
                        <p>If you have any questions, please contact me at this email address: [email].</p>
                        <p>Thank you for your time.</p>
                    </div>
                </div>
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
}

export default Contact;