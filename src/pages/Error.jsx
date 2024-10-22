import { useRouteError, useNavigate } from 'react-router-dom';

function Error() {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className='container'>
            <div className='centered-box'>
                <h1>Error</h1>
                <h1>{error.status}</h1>
                <h3>{error.statusText || error.message}</h3>
                <p>{console.log(error)}</p>
                <button  type="button" onClick={() => {navigate(-1);}}>
                    <strong>Return to previous page</strong>
                </button>
            </div>
        </div>
    )
}

export default Error;