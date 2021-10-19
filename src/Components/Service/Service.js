import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
    const service = props.service;
    return (
        <div className="single-service">
            <p className="img-container">
                <img src={service.img}/>
            </p>
            <h3 className="px-3">{service.serviceName}</h3>
            <p className="px-3">{service.description}</p>
            <p className="px-3"><button className="btn btn-dark"><Link>Visit Now</Link></button></p>
        </div>
    );
}

export default Service;