import LogSummary from './LogSummary.jsx';


function Logs({logs_data}) {

    return (
        <>
            {logs_data.map((log) => <LogSummary key={log} log_id={log}/>)}
        </>
    )
}

export default Logs;