import { useRouteError, useNavigate } from 'react-router-dom';


function Error() {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className='container' style={{textAlign:'center', paddingBottom:'50px'}}>
            <header>
                <h1 className='front-name'>{error.status || 'Error'}</h1>
            </header>
            <p>{error.statusText || error.message}</p>
            { console.error(error) }
            <button  type="button" onClick={() => { navigate(-1); }}>Return to previous page</button>
        </div>
    );
}

export default Error;