import React from "react";
import './About.css';
import eyeBallImg from '../../Images/eye-ball.png';
import Footer from "../Footer/Footer";

const About = () => {
    return (
        <div className="about-container bg-light">
            {/* about us banner */}
            <div className="about-banner d-flex justify-content-center align-items-center px-3">
                <div className="banner-text">
                    <h1 className="px-3 pb-3">About <span className="text-info">Us</span></h1>
                    <h6 className="px-3">Welcome to our site. We are concern about your eye health. We provide eye treatment with careness and professional doctors with their technician teams are very qualified for ensuring modern eye treatment methods. If you have any vision problem, come to us immediately.</h6>
                </div>
            </div>

            {/* eyeball image container */}
            <div className="eyeball-img mx-auto p-5 mt-5 mb-3">
                <img src={eyeBallImg}/>
                <hr/>
            </div>

            {/* our treatment procedure */}
            <div className="treatment-procedure pb-5">
                <h1 className="ms-3 mb-3 px-5 py-3 bg-dark w-50 text-info">Our Treatment Procedure</h1>
                <div className="procedures w-75 mx-auto p-3">
                    <ul>
                        <li>We have professional and experienced eye specialists.</li>
                        <li>We provide modern treatment procedures.</li>
                        <li>Our technician teams are very qualified for taking eye exams.</li>
                        <li>Our nursing stuffs are very professional and helpful.</li>
                        <li>Junior eye specialists also take part in your treatment in guidance with experienced eye specialists.</li>
                        <li>All surgical treatments are completed by experienced dorctors.</li>
                        <li>In surgical treatments, junior doctors take part only as assisting team for experienced doctors.</li>
                        <li>Our surgical room is full with modern instruments and facilities.</li>
                        <li>We provide various kinds of eye surgery including Lens Implants, Cataract Surgery, Laser Treatment and so on in modern way.</li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default About;