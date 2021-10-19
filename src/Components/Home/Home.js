import React from "react";
import { Carousel } from "react-bootstrap";
import './Home.css';
import img1 from "../../Images/img1.jpg";
import img2 from "../../Images/img2.jpg";
import img3 from "../../Images/img3.jpg";
import useFakeServiceDb from "../../Hooks/useFakeServicesDb";
import Service from "../Service/Service";

const Home = () => {
    const services = useFakeServiceDb([]);
    return (
        <>
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100 h-100"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className="bg-light">
            <h1>Services</h1>
            {
                services.map(service => <Service 
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
        </>
    );
}

export default Home;