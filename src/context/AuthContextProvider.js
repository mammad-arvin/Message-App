import React, { useState, useEffect, createContext } from "react";

//pakdges
import { useNavigate } from "react-router-dom";

// functions
import { auth } from "../authorization/firebase";

//context
export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);
    const navigat = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
            if (user) navigat("/chats");
        });
    }, [user, navigat]);

    return (
        <authContext.Provider value={user}>
            {!loading && children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;
