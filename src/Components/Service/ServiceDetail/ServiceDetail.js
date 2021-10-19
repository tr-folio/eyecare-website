import { useEffect } from "react";
import { useParams } from "react-router";
import './ServiceDetail.css';

const ServiceDetail = () => {
    const {id} = useParams();
    useEffect(() => {
        const url = `./fakeServicesDb.json/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
    }, [])
    return (
        <div className="service-detail">
            <h1>{id}</h1>
            {
                // services.map(service => <h1>{service.serviceName}</h1>)
            }
        </div>
    );
}

export default ServiceDetail;