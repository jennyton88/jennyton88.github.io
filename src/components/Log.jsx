import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Markdown from 'react-markdown';

function parseLogText(text_data) {
  const keys = ["E[", "]E", "D[", "]D", "T[", "]T","S[", "]S"];
  const indexes = [];

  for (let i = 0; i < keys.length; i++) {
    indexes.push(text_data.indexOf(keys[i]));
  }

  let log_text = {
    edit_date: text_data.substr(indexes[0] + 2, indexes[1] - 2),
    creation_date: text_data.substr(indexes[2] + 2, indexes[3] - indexes[2] - 2),
    title: text_data.substr(indexes[4] + 2, indexes[5] - indexes[4] - 2),
    summary: text_data.substr(indexes[6] + 2, indexes[7] - indexes[6]  - 2),
    body: text_data.substr(indexes[7] + 2),
  };

  return log_text;
}


function Log(){
    const { log_id } = useParams();
    const [log, setLog] = useState({});

    useEffect(() => {
        async function getLogList() {
            await fetch(`/text_files/${log_id}.txt`)
            .then((response)=> {
                return response.text();
            })
            .then((text_data) => {
                const info = parseLogText(text_data);
                setLog(info);
            })
            .catch((error) => {
                console.log(error);
            });
        }

        getLogList();
    }, []);

    return(
        <>
            {
                !log ? 
                    <p>Loading...</p> :
                    
                        <div className="container">
                            <div className="content">
                                <Sidebar />
                                <div className="log">
                                    <h1>{log.title}</h1>
                                    <em>Edited:</em> {log.edit_date} / <em>Created:</em> {log.creation_date}
                                    <Markdown>{log.body}</Markdown>
                                    <Link to={"/devlogs"}>Return back to devlogs</Link>
                                </div>
                            </div>
                            <Footer />
                        </div>
            }
        </>
    );
}


export default Log;
