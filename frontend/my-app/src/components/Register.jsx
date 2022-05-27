import React, {useRef, useState} from "react";
import '../style/Register.scss';
import logo from '../images/logo1.png'

export default function Register() {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const emailRef = useRef();
    const passwordRef = useRef();
    const handleGetStarted = ()=> {
        setEmail(emailRef.current.value);
        console.log(email);
    };
    const handleSubmit = ()=> {
        setPassword(passwordRef.current.value);
    };
    return(
        <div className="register">
            <div className="upper">
                <div className="wrapper">
                    <img
                        className="logo"
                        src={logo}
                        alt=""
                    />
                    <button className="loginBtn">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Book Your Sheet, From Your Home...</h1>
                <p>
                    Ready to Book ? Enter yout Email to create account!
                </p>
                {!email ? (
                    <div className="inputs">
                        <input type="email" placeholder="Email Address" ref={emailRef} />
                        <button className="registerBtn" onClick={handleGetStarted}>Get Started</button>
                    </div>
                ) : (
                    <form className="inputs">
                    <input type="password" placeholder="Password" ref={passwordRef} />
                    <button className="registerBtn" onClick={handleSubmit}>Start</button>
                    </form>
                    ) }
            </div>
        </div>
    )
}
