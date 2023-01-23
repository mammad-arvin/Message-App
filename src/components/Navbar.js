import React, { useState } from "react";

//styels
import "./Navbar.scss";

//image
import logoutImage from "../assets/logout.svg";

const Navbar = ({logoutHandler}) => {
    const [logoutSvg, setLogoutSvg] = useState(false);

    return (
        <div className="navContainer">
            <div className="appName">PatGram</div>
            <div
                className="logout"
                onMouseEnter={() => setLogoutSvg(true)}
                onMouseLeave={() => setLogoutSvg(false)}
                onClick={logoutHandler}
            >
                {!logoutSvg ? (
                    <i className="fa-solid fa-right-from-bracket"></i>
                ) : (
                    <img src={logoutImage} title="logout"/>
                )}
            </div>
        </div>
    );
};

export default Navbar;
