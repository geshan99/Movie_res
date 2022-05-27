import React from "react";
import '../style/Login.scss';
import logo from '../images/logo1.png'

export default function Login() {

    return(
        <div className="login">
            <div className="upper">
                <div className="wrapper">
                    <img
                        className="logo"
                        src={logo}
                        alt=""
                    />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="LoginBtn">Sign In</button>
                    <span>
                        New User?
                        <b>Sign up now!</b>
                    </span>
                </form>
            </div>
        </div>
    );
}
