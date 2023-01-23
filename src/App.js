import React from "react";
//style
import "./App.css";
import { Routes, Route } from "react-router-dom";

//components
import Login from "./components/Login";
import Chat from "./components/Chat";

//constext
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
    return (
        <div className="App">
            <AuthContextProvider>
                <Routes>
                    <Route path="/chats" element={<Chat />} />
                    <Route path="/" element={<Login />} />
                </Routes>
            </AuthContextProvider>
        </div>
    );
}

export default App;
