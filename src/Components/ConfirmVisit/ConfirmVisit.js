import React from "react";
import { Link } from "react-router-dom";
import './ConfirmVisit.css';

const ConfirmVisit = (props) => {
    const id = props.id;
    const services = props.services;
    console.log('from confirm visit page', services);
    let selectedService = [];
    return (
        <div className="confirm-visit">
            {/* <div className="selected-service-info border bg-light">
                <h3 className="bg-dark text-light text-center py-3 mb-0">Confirm Visit</h3>
                <p className="service-detail-image">
                    <img src={selectedService[0]?.img}/>
                </p>
                <h3 className="px-2">{selectedService[0]?.servicename}</h3>
                <p className="px-2 text-secondary">{selectedService[0]?.description}</p>
                <p className="px-2"><button className="confirm-visit-btn bg-dark px-5 py-2"><Link to="/confirmVisit">Confirm Visit</Link></button></p>
            </div> */}
        </div>
    );
}

export default ConfirmVisit;