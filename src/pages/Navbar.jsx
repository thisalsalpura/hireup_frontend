import React, { useState } from "react";
import logo from "../assets/icons/logo.svg";
import menuIcon from "../assets/icons/menu.svg";
import closeIcon from "../assets/icons/close.svg";
import Button from "../components/Button";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen((previousOpen) => !previousOpen)
    }

    const navItems = () => {
        return (
            <>
                {false && (
                    <div className="flex flex-col items-center gap-5">
                        <Button name="Register" frontClasses="text-black h-10 w-40 border-2 border-black" backClasses="h-10 w-40 bg-cus-light-yellow-high" />
                        <Button href="/login" name="SignIn" frontClasses="text-white h-10 w-40 border-2 border-black" backClasses="h-10 w-40 bg-cus-dark-purple" />
                    </div>
                )}

                {true && (
                    <div className="flex flex-col items-center gap-5">
                        <div className="cus-btn-set w-full flex md:hidden">
                            <a className="text-lg font-bold text-black">Switch to Selling</a>
                        </div>
                        <div className="cus-btn-set w-full">
                            <a className="text-lg font-bold text-black">Cart</a>
                        </div>
                        <div className="cus-btn-set w-full">
                            <a className="text-lg font-bold text-black">Wishlist</a>
                        </div>
                        <div className="cus-btn-set w-full">
                            <a className="text-lg font-bold text-black">Notifications</a>
                        </div>
                    </div>
                )}
            </>
        )
    }

    return (
        <>
            {false && (
                <nav className="fixed p-2 top-0 left-0 right-0 z-50">
                    <div className="max-w-7xl mx-auto h-20 bg-cus-white-transparent border border-white backdrop:blur-2xl rounded-2xl flex items-center justify-between px-5">
                        <a href="/">
                            <img className="h-12" src={logo} alt="logo" />
                        </a>

                        <div className="hidden md:flex flex-row items-center gap-8">
                            <Button name="Register" frontClasses="text-black h-10 w-40 border-2 border-black" backClasses="h-10 w-40 bg-cus-light-yellow-high" />
                            <Button href="/login" name="SignIn" frontClasses="text-white h-10 w-40 border-2 border-black" backClasses="h-10 w-40 bg-cus-dark-purple" />
                        </div>

                        <div className="flex md:hidden transition-all duration-300 ease-in-out">
                            <img onClick={toggleMenu} className="h-9 cursor-pointer" src={isOpen ? closeIcon : menuIcon} alt="toggle" />
                        </div>
                    </div>

                    <div className={`absolute mt-4 w-11/12 mx-auto bg-cus-white-transparent shadow-2xl rounded-lg transition-all duration-300 ease-in-out py-6 backdrop:blur-2xl ${isOpen ? "right-0 left-0" : "right-[-100%]"} flex md:hidden justify-center items-center`}>
                        {navItems()}
                    </div>
                </nav>
            )}

            {true && (
                <nav className="fixed top-0 left-0 right-0 z-50">
                    <div className="max-w-7xl mx-auto h-24 bg-white flex items-center justify-between px-7">
                        <a href="/">
                            <img className="h-10 sm:h-12" src={logo} alt="logo" />
                        </a>

                        <div className="flex flex-row items-center justify-center gap-5 sm:gap-8">
                            <div className="cus-btn-set w-auto hidden md:flex">
                                <a className="text-lg font-bold text-black">Switch to Selling</a>
                            </div>

                            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-black flex items-center justify-center p-0.5">
                                <a className="h-full w-full rounded-full bg-cus-light-yellow-high"></a>
                            </div>

                            <div className="flex items-center justify-center transition-all duration-300 ease-in-out">
                                <img onClick={toggleMenu} className="h-8 sm:h-9 cursor-pointer" src={isOpen ? closeIcon : menuIcon} alt="toggle" />
                            </div>
                        </div>
                    </div>

                    <div className={`absolute mt-2 w-11/12 mx-auto bg-white shadow-lg rounded-lg sm:rounded-none transition-all duration-300 ease-in-out py-6 backdrop:blur-2xl ${isOpen ? "right-0 left-0" : "right-[-100%]"} flex justify-center items-center`}>
                        {navItems()}
                    </div>
                </nav>
            )}
        </>
    )
}

export default Navbar;