import React from "react";
import { Link } from "react-router-dom";
import './VisitTime.css';

const VisitTime = () => {
    let serial = Math.random()*20;
    serial = parseInt(serial);
    let visitingTime = Math.random()*(7-3)+3;
    visitingTime = parseInt(visitingTime);
    return (
        <div className="visit-time-container">
            <div className="visit-time">
                <h1 className="text-info py-3">Successfully confirmed visit.</h1>
                <h3>Your serial is {serial}.</h3>
                <h3>Your visiting time is {visitingTime}pm.</h3>
                <p className="pt-1"><button className="btn btn-primary"><Link to="/home">Go to Home</Link></button></p>
            </div>
        </div>
    );
}

export default VisitTime;