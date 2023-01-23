import React, { useState, useEffect, useContext } from "react";

//components
import Navbar from "./Navbar";

//pakages
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";

//function
import { auth } from "../authorization/firebase";

//context
import { authContext } from "../context/AuthContextProvider";
import axios from "axios";

const Chat = () => {
    const user = useContext(authContext);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const logoutHandler = async () => {
        await auth.signOut();
        navigate("/");
    };

    useEffect(() => {
        if (!user) {
            navigate("/");
            return;
        }

        axios
            .get("https://api.chatengine.io/users/me", {
                headers: {
                    "project-id": "eff303f4-977e-4259-b51c-ad5818a115e3",
                    "user-name": user.email,
                    "user-secret": user.uid,
                },
            })
            .then(() => {
                setLoading(false);
            })
            .catch(() => {
                let formdata = new FormData();
                formdata.append("email", user.email);
                formdata.append("username", user.email);
                formdata.append("secret", user.uid);
                getfile(user.photoURL).then((avatar) => {
                    formdata.append("avatar", avatar, avatar.name);
                    axios
                        .post("https://api.chatengine.io/users/", formdata, {
                            headers: {
                                "private-key":
                                    "731de1e4-392f-4100-87d1-e0ac7c6683f6",
                            },
                        })
                        .then(() => setLoading(false))
                        .catch((error) => console.log(error));
                });
            });
    });

    const getfile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
    };

    if (!user || loading) return <div className="loading"> <Navbar logoutHandler={logoutHandler} />loading...</div>;

    return (
        <div className="chatContainer">
            <Navbar logoutHandler={logoutHandler} />
            <ChatEngine
                height="calc(100vh - 50px)"
                projectID="eff303f4-977e-4259-b51c-ad5818a115e3"
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    );
};

export default Chat;
