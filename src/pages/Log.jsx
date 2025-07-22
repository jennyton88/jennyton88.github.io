import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Markdown from 'react-markdown';

import Header from '../components/Header.jsx';
import Topbar from '../components/Topbar.jsx';
import Footer from '../components/Footer.jsx';


function parseLogText(text_data) {
    const line_length = 4;
    const indexes = [];

    var curr_index = 0;
    for (let i = 0; i < line_length; i++) {
        curr_index = text_data.indexOf("\n", curr_index + 1);
        indexes.push(curr_index);
    }

    return {
        edit_date: text_data.substring(0, indexes[0]),
        creation_date: text_data.substring(indexes[0] + 1, indexes[1]),
        title: text_data.substring(indexes[1] + 1, indexes[2]),
        body: text_data.substring(indexes[3] + 1 ),
    };
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
                console.error(error);
            });
        }

        getLogList();
    }, [log_id]);

    return(
        <>
            {
                !log ? 
                    <p>Loading...</p> :
                    <div className="container">
                        <Header header_data={'Devlog'}/>
                        <Topbar/>
                        <div className="content">
                            <img src="/images/border.png" width="100%" height="100%" className='img-border'/>
                            <div className="log">
                                <article>
                                    <h1>{log.title}</h1>
                                    <hr/>
                                    <em>Edited:</em> {log.edit_date} / <em>Created:</em> {log.creation_date}
                                    <Markdown>{log.body}</Markdown>
                                </article>
                                <div style={{textAlign:'center', paddingBottom:'20px'}}>
                                    <Link to={"/devlogs"}>To devlogs</Link>
                                </div>
                            </div>
                            <img src="/images/border.png" width="100%" height="100%" className='img-border'/>
                        </div>
                        <Footer />
                    </div>
            }
        </>
    );
}


export default Log;
