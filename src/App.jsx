import React from "react";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SingleGigView from "./pages/SingleGigView";
import Profile from "./pages/Profile";
import AdvancedSearch from "./pages/AdvancedSearch";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./pages/Cart";

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
                    <Route path="/advancedSearch" element={<AdvancedSearch />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </main>
    )
}

export default App;