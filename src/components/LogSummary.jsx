import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import { Link } from 'react-router-dom';


function parseLogData(text_data) {
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
    };

    return log_text;
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
                console.log(error);
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
                        <em>Edited:</em> {log.edit_date} / <em>Created:</em> {log.creation_date}
                        <Markdown>{log.summary}</Markdown>
                    </div>
            }
        </>
    )
}


export default LogSummary;