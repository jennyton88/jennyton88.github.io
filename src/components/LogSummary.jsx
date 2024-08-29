import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function parseLogData(text_data) {
    const keys = ["E[", "]E", "D[", "]D", "T[", "]T","S[", "]S"];
    const indexes = [];

    for (let i = 0; i < keys.length; i++) {
        indexes.push(text_data.indexOf(keys[i]));
    }

    let log_text = {
        creation_date: text_data.substr(indexes[0] + 2, indexes[1] - 2),
        edit_date: text_data.substr(indexes[2] + 2, indexes[3] - indexes[2] - 2),
        title: text_data.substr(indexes[4] + 2, indexes[5] - indexes[4] - 2),
        summary: text_data.substr(indexes[6] + 2, indexes[7] - indexes[6]  - 2),
    };

    return log_text;
}


function LogSummary({log_id}) {
    const [log, setLog] = useState({});

    useEffect(() => {
        async function getLogList() {
            await fetch(`/logs/${log_id}.txt`)
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
                        <Link to={`log/${log_id}`}><h3>{log.title}</h3></Link>
                        <h4>Created: {log.creation_date}</h4>
                        <h4>Edited: {log.edit_date}</h4>
                        <p>{log.summary}</p>
                    </div>
            }
        </>
    )
}


export default LogSummary;