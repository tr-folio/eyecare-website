import React, { useEffect, useState } from "react";

const useFakeServiceDb = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakeServicesDb.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    return services;
}

export default useFakeServiceDb;