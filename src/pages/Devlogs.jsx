import { useState, useEffect } from 'react';

import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Logs from '../components/Logs.jsx';
import Sidebar from '../components/Sidebar.jsx';

function Devlogs() {
    const [logList, setLogList] = useState([]);
    
    useEffect(() => {
        async function getLogDirectory() {
            await fetch("/logs/directory.txt")
            .then((response)=> {
                return response.text();
            })
            .then((id_list) => {
                setLogList(id_list.split("\n"));
            })
            .catch((error) => {
                console.log(error);
            });
        }

        getLogDirectory();
    }, []);
    
    return (
        <div className="devbody">
            <div className="devheader" >
                    <Header />
                    <p>Devlogs</p>
            </div>
            <div className="devlogs">
                <div className="post">
                    {logList.length == 0 ? <p>Loading...</p> : <Logs logs_data={logList}/>}
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