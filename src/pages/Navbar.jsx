import React, { useState } from "react";
import logo from "../assets/icons/logo.svg";
import menuIcon from "../assets/icons/menu.svg";
import closeIcon from "../assets/icons/close.svg";
import { SignOut } from "../api/SignOut";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((previousOpen) => !previousOpen)
    };

    const navItems = () => {
        return (

            <div className="flex flex-col items-center gap-5">
                <button className="cus-btn-set w-full flex md:hidden">
                    <a className="text-lg font-bold text-black">Switch to Selling</a>
                </button>
                <button className="cus-btn-set w-full">
                    <a className="text-lg font-bold text-black">Cart</a>
                </button>
                <button className="cus-btn-set w-full">
                    <a className="text-lg font-bold text-black">Wishlist</a>
                </button>
                <button className="cus-btn-set w-full">
                    <a className="text-lg font-bold text-black">Notifications</a>
                </button>
                <button onClick={SignOut} className="cus-btn-set w-full">
                    <a className="text-lg font-bold text-black">SignOut</a>
                </button>
            </div>
        )
    }

    return (
        <nav className="absolute top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto h-24 bg-white flex items-center justify-between px-7">
                <a href="/">
                    <img className="h-10 sm:h-12" src={logo} alt="logo" />
                </a>

                <div className="flex flex-row items-center justify-center gap-5 sm:gap-8">
                    <div className="cus-btn-set w-auto hidden md:flex">
                        <a className="text-lg font-bold text-black">Switch to Selling</a>
                    </div>

                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-black flex items-center justify-center p-0.5">
                        <a href="/userProfile" className="h-full w-full">
                            <img src="https://api.dicebear.com/7.x/initials/svg?seed=John%20Doe&backgroundColor=F4A52A&textColor=000000" className="h-full w-full rounded-full" alt="profile" />
                        </a>
                    </div>

                    <div className="flex items-center justify-center transition-all duration-300 ease-in-out">
                        <img onClick={toggleMenu} className="h-8 sm:h-9 cursor-pointer" src={isOpen ? closeIcon : menuIcon} alt="toggle" />
                    </div>
                </div>
            </div>

            <div className={`fixed top-24 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl bg-white shadow-lg rounded-lg sm:rounded-none transition-all duration-300 ease-in-out py-6 backdrop:blur-2xl ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} flex justify-center items-center z-40`}>
                {navItems()}
            </div>
        </nav>
    )
}

export default Navbar;