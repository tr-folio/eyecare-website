import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useFakeServicesDb from "../../Hooks/useFakeServicesDb";
import ConfirmVisit from "../ConfirmVisit/ConfirmVisit";
import './ServiceDetail.css';

const ServiceDetail = () => {
    const {id} = useParams();
    console.log(id)
    const services = useFakeServicesDb();
    console.log(services);
    return (
        <div className="service-detail">
            <ConfirmVisit id={id} services={services}></ConfirmVisit>
            
        </div>
    );
}

export default ServiceDetail;