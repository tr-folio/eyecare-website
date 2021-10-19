import React from "react";

const Service = (props) => {
    const service = props.service;
    return (
        <div>
            <h3>{service.serviceName}</h3>
        </div>
    );
}

export default Service;