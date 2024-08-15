import "./devlogs.css"

import Footer from "./components/Footer";
import Header from "./components/Header";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";

function Devlogs() {
    return (
        <div className="devbody">
            <div className="devheader" >
                    <Header />
                    <p>Devlogs</p>
            </div>
            <div className="devlogs">
                <div className="post">
                    <Post />
                </div>
                <div className="sidebar">
                    <Sidebar />
                </div>
            </div>
            <div className="devfooter" >
                    <Footer />
            </div>
        </div>
      );
}

export default Devlogs;