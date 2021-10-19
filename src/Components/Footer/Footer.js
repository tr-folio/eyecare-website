import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <div className="d-flex justify-content-around text-light flex-wrap bg-dark py-5">
            <div>
                <h3>Quick Links</h3>
                <p><Link>Home</Link></p>
                <p><Link>Services</Link></p>
            </div>
            <div>
                <h3>Contact Info</h3>
                <p>Email: abc@example.com</p>
                <p>Phone: 000-000000</p>
                <p>
                    <i class="fab fa-facebook icons"></i>
                    <i class="fab fa-twitter icons"></i>
                    <i class="fab fa-instagram icons"></i>
                </p>
            </div>
        </div>
    );
}

export default Footer;