import React, { useEffect, useState } from "react";

const useFakeServicesDb = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/fakeServicesDb.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    // useEffect(() => {
    //     fetch('https://api.jsonbin.io/b/616f1bfaaa02be1d445bc859')
    //     .then(res => res.json())
    //     .then(data => setServices(data));
    // }, []);
    // const loadData = () => {
    //     fetch('https://api.jsonbin.io/b/616f1bfaaa02be1d445bc859')
    //     .then(res => res.json())
    //     .then(data => setServices(data));
    // }
    // loadData();
    return services;
}

export default useFakeServicesDb;