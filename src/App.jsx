import React from "react";
import Home from "./pages/home";
import Login from "./pages/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
    return (
        <main className="bg-white h-full">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </main>
    )
}

export default App;