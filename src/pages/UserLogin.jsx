import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import signinImg from "../assets/images/signin.svg";
import registerImg from "../assets/images/register.svg";
import { motion, AnimatePresence } from "framer-motion";
import Checkbox from "../components/Checkbox";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleSlide = () => {
        setIsOpen((previousOpen) => !previousOpen)
    }

    useEffect(() => {
        document.body.classList.add("custom2");
        return () => document.body.classList.remove("custom2");
    }, []);

    return (
        <section className="bg-white h-full">
            <div className="max-w-7xl mx-auto h-full bg-white">
                <div className="relative h-full w-full grid grid-cols-12">
                    <AnimatePresence mode="wait">
                        {!isOpen && (
                            <motion.div
                                key="signin"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.5 }}
                                className="relative h-full w-full col-span-12 lg:col-span-12 grid grid-cols-12"
                            >

                                <div className="relative overflow-hidden h-full w-full hidden lg:flex lg:col-span-7 items-center justify-center p-3">
                                    <div className="h-full w-full flex items-center justify-center">
                                        <h2 className="absolute bg-transparent text-transparent tracking-widest cus-text-style cus-text-style-black text-6xl font-londrinasolid z-20">Welcome! <br />HireUp</h2>

                                        <div className="h-full w-full flex items-center justify-center z-10">
                                            <img src={signinImg} alt="signin_img" className="object-cover h-[500px]" />
                                        </div>
                                    </div>
                                </div>

                                <div className="relative h-full w-full flex col-span-12 lg:col-span-5 items-center justify-center p-4 sm:p-6">
                                    <div className="h-full w-full flex flex-col bg-cus-black-low rounded-xl shadow-xl border border-black p-5 sm:p-8">
                                        <h2 className="text-white text-2xl text-left font-semibold">SignIn</h2>

                                        <div className="flex flex-col w-full gap-1.5 mt-5">
                                            <label htmlFor="email" className="text-white text-sm">Email</label>
                                            <input id="email" name="email" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="email" placeholder="name@gmail.com" required />
                                        </div>

                                        <div className="flex flex-col w-full gap-1.5 mt-5">
                                            <label htmlFor="password" className="text-white text-sm">Password</label>
                                            <input id="password" name="password" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="password" placeholder="••••••••" required />
                                        </div>

                                        <div className="flex flex-row items-center justify-between mt-5">
                                            <Checkbox name="Remember Me" />

                                            <label className="text-blue-700 hover:border-b-2 hover:border-blue-700 text-sm sm:text-base"><a href="/">Forgot Password?</a></label>
                                        </div>

                                        <Button href="/home" name="SignIn" containerClass="mt-8" frontClasses="text-white h-10 w-full border-2 border-white" backClasses="h-10 w-full bg-blue-700" />

                                        <p className="text-white text-sm sm:text-base tracking-wide mt-4">Not registered? <a className="text-blue-700 hover:border-b-2 hover:border-blue-700" onClick={toggleSlide}>Register</a></p>

                                        <Button name="Google SignIn" icon={faGoogle} containerClass="mt-4" frontClasses="text-blue-700 h-10 w-full border-2 border-blue-700" backClasses="h-10 w-full bg-white" />
                                    </div>
                                </div>

                            </motion.div>
                        )}

                        {isOpen && (
                            <motion.div
                                key="register"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="relative h-full w-full col-span-12 lg:col-span-12 grid grid-cols-12"
                            >

                                <div className="relative h-full w-full flex col-span-12 lg:col-span-5 items-center justify-center p-4 sm:p-6">
                                    <div className="h-full w-full flex flex-col bg-cus-black-low rounded-xl shadow-xl border border-black p-5 sm:p-8">
                                        <h2 className="text-white text-2xl text-left font-semibold">Register</h2>

                                        <div className="flex flex-col w-full gap-1.5 mt-5">
                                            <label htmlFor="fname" className="text-white text-sm">First Name</label>
                                            <input id="fname" name="fname" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="John" required />
                                        </div>

                                        <div className="flex flex-col w-full gap-1.5 mt-5">
                                            <label htmlFor="lname" className="text-white text-sm">Last Name</label>
                                            <input id="lname" name="lname" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="Doily" required />
                                        </div>

                                        <div className="flex flex-col w-full gap-1.5 mt-5">
                                            <label htmlFor="email" className="text-white text-sm">Email</label>
                                            <input id="email" name="email" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="email" placeholder="name@gmail.com" required />
                                        </div>

                                        <Button name="Register" containerClass="mt-8" frontClasses="text-white h-10 w-full border-2 border-white" backClasses="h-10 w-full bg-blue-700" />

                                        <p className="text-white text-sm sm:text-base tracking-wide mt-4">Already registered? <a className="text-blue-700 hover:border-b-2 hover:border-blue-700" onClick={toggleSlide}>SignIn</a></p>
                                    </div>
                                </div>

                                <div className="relative overflow-hidden h-full w-full hidden lg:flex lg:col-span-7 items-center justify-center p-3">
                                    <div className="h-full w-full flex items-center justify-center">
                                        <h2 className="absolute bg-transparent text-transparent tracking-widest cus-text-style cus-text-style-black text-6xl font-londrinasolid z-20">Welcome! <br />HireUp</h2>

                                        <div className="h-full w-full flex items-center justify-center z-10">
                                            <img src={registerImg} alt="signin_img" className="object-cover h-[500px]" />
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default Login;