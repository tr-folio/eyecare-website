import React from "react";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div>
            <h1 className="text-danger mt-5 ms-5">404 Error!</h1>
            <h3 className="ms-5">Page not found.</h3>
        </div>
    );
}

export default NotFound;