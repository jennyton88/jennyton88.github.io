import { useState, useEffect } from 'react';

import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Logs from '../components/Logs.jsx';
import Sidebar from '../components/Sidebar.jsx';

function Devlogs() {
    const [logList, setLogList] = useState([]);
    
    useEffect(() => {
        async function getLogDirectory() {
            await fetch("/text_files/directory.txt")
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
        <div className="container">
            <Header title={"Devlogs"} />
            <div className="content">
                <Sidebar />
                <div className="logs">
                    {logList.length == 0 ? <p>Loading...</p> : <Logs logs_data={logList}/>}
                </div>
            </div>
            <Footer />
        </div>
      );
}

export default Devlogs;