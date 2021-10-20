import { useParams } from "react-router";
import useFakeServicesDb from "../../Hooks/useFakeServicesDb";
import ConfirmVisit from "../ConfirmVisit/ConfirmVisit";

const ServiceDetail = () => {
    const {id} = useParams();
    console.log(id)
    const services = useFakeServicesDb();
    console.log(services);
    return (
        <div>
            <ConfirmVisit id={id} services={services}></ConfirmVisit>
        </div>
    );
}

export default ServiceDetail;