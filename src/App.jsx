import React from "react";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SingleGigView from "./pages/SingleGigView";
import Profile from "./pages/Profile";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
    return (
        <main className="bg-white h-full">
            <Router>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/singleGigView" element={<SingleGigView />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        </main>
    )
}

export default App;