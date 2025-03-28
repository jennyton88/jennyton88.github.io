import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';


function parseLogData(text_data) {
    const line_length = 4;
    const indexes = [];

    var curr_index = 0;
    for (let i = 0; i < line_length; i++) {
        curr_index = text_data.indexOf(";", curr_index + 1);
        indexes.push(curr_index);
    }

    return {
        edit_date: text_data.substring(0, indexes[0]),
        creation_date: text_data.substring(indexes[0] + 1, indexes[1]),
        title: text_data.substring(indexes[1] + 1, indexes[2]),
        summary: text_data.substring(indexes[2] + 1, indexes[3]),
        body: text_data.substring(indexes[3] + 1 ),
    };
}


function LogSummary({log_id}) {
    const [log, setLog] = useState({});

    useEffect(() => {
        async function getLogList() {
            await fetch(`/text_files/${log_id}.txt`)
            .then((response)=> {
                return response.text();
            })
            .then((text_data) => {
                const info = parseLogData(text_data);
                setLog(info);
            })
            .catch((error) => {
                console.error(error);
            });
        }

        getLogList();
    }, []);

    return (
        <>
            {
                !log ? 
                    <p>Loading...</p> :
                    <div className="log-summary">
                        <Link to={`log/${log_id}`}><h4>{log.title}</h4></Link>
                        <p><em>Edited:</em> {log.edit_date} / <em>Created:</em> {log.creation_date}</p>
                        <Markdown>{log.summary}</Markdown>
                    </div>
            }
        </>
    );
}


export default LogSummary;