import React from "react";
import Index from "./pages/Index";
import UserLogin from "./pages/UserLogin";
import Home from "./pages/Home";
import SingleGigView from "./pages/SingleGigView";
import UserProfile from "./pages/UserProfile";
import AdvancedSearch from "./pages/AdvancedSearch";
import Cart from "./pages/Cart";
import GigRegister from "./pages/GigRegister";
import OrdersQueue from "./pages/OrdersQueue";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import SellerDashboard from "./pages/SellerDashboard";
import UserVerification from "./pages/UserVerification";
import AdminSellerManagement from "./pages/AdminSellerManagement";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
    return (
        <main className="bg-white h-full">
            <Router>
                <ScrollToTop />

                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/userLogin" element={<UserLogin />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/singleGigView" element={<SingleGigView />} />
                    <Route path="/userProfile" element={<UserProfile />} />
                    <Route path="/advancedSearch" element={<AdvancedSearch />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/gigRegister" element={<GigRegister />} />
                    <Route path="/ordersQueue" element={<OrdersQueue />} />
                    <Route path="/adminDashboard" element={<AdminDashboard />} />
                    <Route path="/adminLogin" element={<AdminLogin />} />
                    <Route path="/sellerDashboard" element={<SellerDashboard />} />
                    <Route path="/userVerification" element={<UserVerification />} />
                    <Route path="/adminSellerManagement" element={<AdminSellerManagement />} />
                </Routes>

                <ToastContainer position="top-right" autoClose={2000} newestOnTop={true} closeOnClick pauseOnHover closeButton={false} />
            </Router>
        </main>
    )
}

export default App;