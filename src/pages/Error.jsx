import { useRouteError, useNavigate } from "react-router-dom";

function Error() {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div>
            <p>Error</p>
            <p>{error.statusText || error.message}</p>
            <button  type="button" onClick={() => {navigate(-1);}}>
                Return to previous page
            </button>
        </div>
    )
}

export default Error;