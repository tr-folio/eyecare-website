import React from "react";
import { Carousel } from "react-bootstrap";
import './Home.css';
import img1 from "../../Images/img1.jpg";
import img2 from "../../Images/img2.jpg";
import img3 from "../../Images/img3.jpg";
import useFakeServiceDb from "../../Hooks/useFakeServicesDb";
import Service from "../Service/Service";
import Footer from "../Footer/Footer";

const Home = () => {
    const services = useFakeServiceDb([]);
    return (
        <>
            {/* Top Banner Section */}
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100 h-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="d-sm-none">First slide label</h3>
                    <p  className="d-sm-none">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3  className="d-sm-none">Second slide label</h3>
                    <p  className="d-sm-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 className="d-sm-none">Third slide label</h3>
                    <p  className="d-sm-none">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Services Section */}
            <div className="bg-light pt-5" id="services">
                <h1 className="text-center">Services</h1>
                <hr className="w-50 mx-auto"/>
                <div className="services-container">
                    <div className="all-services">
                        {
                            services.map(service => <Service 
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <Footer></Footer>
        </>
    );
}

export default Home;