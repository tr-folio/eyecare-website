import React, { useState } from "react";
import './Signup.css';
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signInUsingGoogle, signUpUsingEmailAndPassword } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirectUrl);
        })
    }

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    }

    const handleSignUp = (event) => {
        signUpUsingEmailAndPassword(email, password);
        event.preventDefault();
    }

    return (
        <div className="signup-container d-flex justify-content-center">
            <div className="pt-5">
                <h1 className="pb-3">Please Signup</h1>
                <div>
                    <form onSubmit={handleSignUp}>
                        <p><input onBlur={handleEmailInput} type="email" placeholder="Enter your email" required/></p>
                        <p><input onBlur={handlePasswordInput} type="password" placeholder="Enter your passowrd" required/></p>
                        <p><input type="submit" value="Submit" className="btn btn-primary"/></p>
                    </form>
                </div>
                <hr/>
                <h3>Google Signup</h3>
                <div>
                    <button className="btn btn-primary"  onClick={handleGoogleLogin}>Signup with Google</button>
                </div>
                <hr/>
                <div>
                    <span>Have an account?</span>&nbsp;
                    <Link to="/login">Login now</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;