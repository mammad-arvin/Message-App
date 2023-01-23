import React from "react";

//pakages
import firebase from "firebase/app";

//functions
import { auth } from "../authorization/firebase";

//style
import "./login.scss";

//image
import google from "../assets/Google.png";

const Login = () => {
    return (
        <div className="fDiv">
            <div className="container">
                <p>Wellcome to PatGram</p>
                <p className="vpn">
                    use <span>VPN</span> for signin <span>:)</span>
                </p>
                <div
                    className="googleBtn"
                    onClick={() =>
                        auth.signInWithRedirect(
                            new firebase.auth.GoogleAuthProvider()
                        )
                    }
                >
                    <img src={google} alt="img" />
                    <p>sign in with google </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
