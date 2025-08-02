import React, { useState } from "react";
import logo from "../assets/icons/logo.svg";
import menuIcon from "../assets/icons/menu.svg";
import closeIcon from "../assets/icons/close.svg";
import { signOut } from "../api/SignOut";
import { useNavigate } from "react-router-dom";
import { switchToSeller } from "../api/SwitchToSeller";

const Navbar = ({ onShowModal, loadingClass, onShowLoading }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((previousOpen) => !previousOpen)
    };

    const navigate = useNavigate();

    const navItems = () => {
        return (

            <div className="flex flex-col items-center gap-5">
                <button onClick={() => switchToSeller(onShowModal, onShowLoading)} className="cus-btn-set w-full flex items-center justify-center md:hidden">
                    <a className="text-lg font-bold text-black">Switch to Selling</a>
                </button>
                <button onClick={() => navigate("/userLogin")} className="cus-btn-set w-full flex items-center justify-center md:hidden">
                    <a className="text-lg font-bold text-black">Login</a>
                </button>
                <button onClick={() => navigate("/cart")} className="cus-btn-set w-full flex items-center justify-center">
                    <a className="text-lg font-bold text-black">Cart</a>
                </button>
                <button className="cus-btn-set w-full flex items-center justify-center">
                    <a className="text-lg font-bold text-black">Wishlist</a>
                </button>
                <button className="cus-btn-set w-full flex items-center justify-center">
                    <a className="text-lg font-bold text-black">Notifications</a>
                </button>
                <button onClick={() => signOut()} className="cus-btn-set w-full flex items-center justify-center">
                    <a className="text-lg font-bold text-black">SignOut</a>
                </button>
            </div>
        )
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 ${loadingClass} z-50`}>
            <div className="max-w-7xl mx-auto h-24 bg-white flex items-center justify-between px-7">
                <a href="/home">
                    <img className="h-10 sm:h-12" src={logo} alt="logo" />
                </a>

                <div className="flex flex-row items-center justify-center gap-5 sm:gap-8">
                    <button onClick={() => switchToSeller(onShowModal, onShowLoading)} className="cus-btn-set w-auto hidden md:flex items-center justify-center">
                        <a className="text-lg font-extrabold text-black">Switch to Selling</a>
                    </button>

                    <button onClick={() => navigate("/userLogin")} className="cus-btn-set w-auto hidden md:flex items-center justify-center">
                        <a className="text-lg font-extrabold text-black">Login</a>
                    </button>

                    <button className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-black flex items-center justify-center p-0.5">
                        <a href="/userProfile" className="h-full w-full">
                            <img src="https://api.dicebear.com/7.x/initials/svg?seed=John%20Doe&backgroundColor=F4A52A&textColor=000000" className="h-full w-full rounded-full" alt="profile" />
                        </a>
                    </button>

                    <button className="flex items-center justify-center transition-all duration-300 ease-in-out">
                        <img onClick={toggleMenu} className="h-8 sm:h-9 cursor-pointer" src={isOpen ? closeIcon : menuIcon} alt="toggle" />
                    </button>
                </div>
            </div>

            <div className={`fixed top-28 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl bg-white shadow-lg rounded-lg sm:rounded-none transition-all duration-300 ease-in-out p-4 backdrop:blur-2xl ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} z-40`}>
                <div className="max-h-60 overflow-y-auto flex justify-center items-center w-full">
                    {navItems()}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;