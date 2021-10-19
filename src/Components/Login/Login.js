import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div className="login-container d-flex justify-content-center">
            <div className="pt-5">
                <h1 className="pb-3">Please Login</h1>
                <div>
                    <form>
                        <p><input type="email" placeholder="Enter your email"/></p>
                        <p><input type="password" placeholder="Enter your passowrd"/></p>
                        <p><input type="submit" value="Submit" className="btn btn-primary"/></p>
                    </form>
                </div>
                <hr/>
                <h3>Google Login</h3>
                <div>
                    <button className="btn btn-primary" onClick={signInUsingGoogle}>Login with Google</button>
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