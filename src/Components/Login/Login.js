import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import './Login.css';

const Login = () => {
    let isLoggedIn = false;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { signInUsingGoogle, signInUsingEmailAndPassword, user } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirectUrl);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    }

    const processLogin = (event) => {
        event.preventDefault();
        if (password.length < 6) {
            setError('password cannot be less than 6 characters');
        } 
        else {
            setError('');
        }
        isLoggedIn = signInUsingEmailAndPassword(email, password);
        if (isLoggedIn) {
            history.push(redirectUrl);
        }
    }

    return (
        <div className="login-container d-flex justify-content-center">
            <div className="pt-5">
                <h1 className="pb-3">Please Login</h1>
                <div>
                    <form onSubmit={processLogin}>
                        <p><input onBlur={handleEmailInput} type="email" placeholder="Enter your email" required/></p>
                        <p><input onBlur={handlePasswordInput} type="password" placeholder="Enter your passowrd" required/></p>
                        <p><input type="submit" value="Submit" className="btn btn-primary"/></p>
                    </form>
                </div>
                <div className="text-danger">{error}</div>
                <hr/>
                <h3>Google Login</h3>
                <div>
                    <button className="btn btn-primary" onClick={handleGoogleLogin}>Login with Google</button>
                </div>
                <hr/>
                <div className="login-toggler">
                    <span>New user?</span>&nbsp;
                    <Link to="/signup">Sign up now</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;