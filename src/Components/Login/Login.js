import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirectUrl);
        })
    }
    return (
        <div className="login-container d-flex justify-content-center">
            <div className="pt-5">
                <h1 className="pb-3">Please Login</h1>
                <div>
                    <form>
                        <p><input type="text" placeholder="Enter your name" required/></p>
                        <p><input type="email" placeholder="Enter your email" required/></p>
                        <p><input type="password" placeholder="Enter your passowrd" required/></p>
                        <p><input type="submit" value="Submit" className="btn btn-primary"/></p>
                    </form>
                </div>
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