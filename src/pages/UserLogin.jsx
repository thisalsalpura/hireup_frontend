import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import signinImg from "../assets/images/signin.svg";
import registerImg from "../assets/images/register.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { signUp } from "../api/SignUp";
import { signIn } from "../api/SignIn";
import { Slab } from "react-loading-indicators";
import { forgotPassword } from "../api/ForgotPassword";
import { changeForgotPassword } from "../api/ForgotPassword";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { showPassword } from "../api/ShowPassword";
import { setHideBtnIcon } from "../api/ShowPassword";

const Login = () => {

    const navigate = useNavigate();

    const loginWithGoogle = useGoogleLogin({
        flow: "implicit",
        onSuccess: (tokenResponse) => {
            const token = tokenResponse.access_token;
            const user = jwtDecode(token);
            console.log("Google User:", user);
            navigate("/home");
        },
        onError: () => console.log("Login Failed")
    });

    const [isOpen, setIsOpen] = useState(false);

    const [loading, setLoading] = useState(false);

    const [showFPModal, setShowFPModal] = useState(false);

    const toggleSlide = () => {
        setIsOpen((previousOpen) => !previousOpen)
    };

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:8080/hireup_backend/SessionServletUser", {
                method: "GET",
                credentials: "include"
            });

            if (response.ok) {
                const json = await response.json();
                if (json.redirect === "YES") {
                    window.location.href = "/home";
                }
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:8080/hireup_backend/RememberMe", {
                method: "POST",
                credentials: "include"
            });

            if (response.ok) {
                const json = await response.json();
                if (json.status) {
                    document.getElementById("email1").value = json.email;
                }
            }
        })();
    }, []);

    useEffect(() => {
        document.body.classList.add("custom2");
        return () => document.body.classList.remove("custom2");
    }, []);

    return (
        <section className="bg-white h-full relative">
            <div className={`absolute inset-0 h-screen w-full bg-transparent ${loading ? "flex" : "hidden"} items-center justify-center`}>
                <Slab color="#000000" size="large" text="" textColor="" />
            </div>

            <div className={`max-w-7xl mx-auto ${loading ? "opacity-20 pointer-events-none" : ""} h-full bg-white`}>

                {showFPModal && (
                    <>
                        <div role="dialog" aria-modal="true" aria-labelledby="dialog-title" className="relative z-50">
                            <div aria-hidden="true" className="fixed inset-0 bg-gray-500/75 transition-opacity"></div>

                            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4">
                                    <div className="relative overflow-hidden rounded-lg bg-white">
                                        <div className="bg-white p-6">
                                            <div className="flex items-start justify-center">
                                                <div className="text-left">
                                                    <h3 id="dialog-title" className="text-xl font-semibold text-black">Forgot Password</h3>
                                                    <div className="mt-2">
                                                        <p className="text-sm text-gray-500">Are you sure you want to update your password? This action cannot be undone.</p>
                                                    </div>

                                                    <div className="flex flex-col w-full gap-1.5 mt-5">
                                                        <label htmlFor="fpVerification" className="font-semibold text-black text-sm">Verification Code</label>
                                                        <input id="fpVerification" name="fpVerification" className="bg-cus-black-low h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" required />
                                                    </div>

                                                    <div className="flex flex-col w-full gap-1.5 mt-5">
                                                        <label htmlFor="newPassword" className="text-black text-sm">New Password</label>
                                                        <div className="relative">
                                                            <input onMouseLeave={() => setHideBtnIcon("newPassword", "newPasswordShow", "newPasswordHide")} id="newPassword" name="newPassword" className="bg-cus-black-low h-10 w-full py-0.5 px-2.5 rounded-md text-white text-base" type="password" placeholder="••••••••" required />

                                                            <button onClick={() => showPassword("newPassword", "newPasswordShow", "newPasswordHide")} type="button" className="absolute inset-y-0 right-4 flex items-center text-white text-sm focus:outline-none cursor-pointer">
                                                                <span className="hidden" id="newPasswordShow"><FontAwesomeIcon icon={faEye} /></span>
                                                                <span className="flex" id="newPasswordHide"><FontAwesomeIcon icon={faEyeSlash} /></span>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col w-full gap-1.5 mt-5">
                                                        <label htmlFor="confirmPassword" className="text-black text-sm">Confirm Password</label>
                                                        <div className="relative">
                                                            <input onMouseLeave={() => setHideBtnIcon("confirmPassword", "confirmPasswordShow", "confirmPasswordHide")} id="confirmPassword" name="confirmPassword" className="bg-cus-black-low h-10 w-full py-0.5 px-2.5 rounded-md text-white text-base" type="password" placeholder="••••••••" required />

                                                            <button onClick={() => showPassword("confirmPassword", "confirmPasswordShow", "confirmPasswordHide")} type="button" className="absolute inset-y-0 right-4 flex items-center text-white text-sm focus:outline-none cursor-pointer">
                                                                <span className="hidden" id="confirmPasswordShow"><FontAwesomeIcon icon={faEye} /></span>
                                                                <span className="flex" id="confirmPasswordHide"><FontAwesomeIcon icon={faEyeSlash} /></span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white flex flex-row-reverse pt-2 pb-6 px-6 gap-2.5">
                                            <button onClick={() => setShowFPModal(false)} type="button" className="inline-flex justify-center rounded-md bg-red-400 px-3 py-1 text-lg font-semibold text-black shadow-xs ring-1 ring-red-400 ring-inset w-auto cursor-pointer">Cancel</button>
                                            <button onClick={() => changeForgotPassword(setLoading, setShowFPModal)} type="button" className="inline-flex justify-center rounded-md bg-blur px-3 py-1 text-lg font-semibold text-black shadow-xs ring-1 ring-black ring-inset w-auto cursor-pointer">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div className="relative h-full w-full grid grid-cols-12 items-center justify-center">
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
                                            <label htmlFor="email1" className="text-white text-sm">Email</label>
                                            <input id="email1" name="email1" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="email" placeholder="name@gmail.com" required />
                                        </div>

                                        <div className="flex flex-col w-full gap-1.5 mt-5">
                                            <label htmlFor="password1" className="text-white text-sm">Password</label>
                                            <div className="relative">
                                                <input onMouseLeave={() => setHideBtnIcon("password1", "password1Show", "password1Hide")} id="password1" name="password1" className="bg-blur h-10 w-full py-0.5 px-2.5 rounded-md text-white text-base" type="password" placeholder="••••••••" required />

                                                <button onClick={() => showPassword("password1", "password1Show", "password1Hide")} type="button" className="absolute inset-y-0 right-4 flex items-center text-white text-sm focus:outline-none cursor-pointer">
                                                    <span className="hidden" id="password1Show"><FontAwesomeIcon icon={faEye} /></span>
                                                    <span className="flex" id="password1Hide"><FontAwesomeIcon icon={faEyeSlash} /></span>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex flex-row items-center justify-between mt-5">
                                            <div className="flex items-center justify-center gap-3">
                                                <input type="checkbox" className="h-4 w-4" id="rememberMe" />
                                                <span className="text-blue-700 text-sm sm:text-base">Remember Me</span>
                                            </div>

                                            <div className="flex items-center justify-center">
                                                <span className="text-blue-700 text-sm sm:text-base"><a onClick={() => forgotPassword(setLoading, setShowFPModal)}>Forgot Password?</a></span>
                                            </div>
                                        </div>

                                        <Button onClick={() => signIn(setLoading)} name="SignIn" containerClass="mt-8" frontClasses="text-white h-10 w-full border-2 border-white" backClasses="h-10 w-full bg-blue-700" />

                                        <p className="text-white text-sm sm:text-base tracking-wide mt-4">Not registered? <a className="text-blue-700 border-b-2 border-transparent hover:border-blue-700" onClick={toggleSlide}>Register</a></p>

                                        <Button onClick={() => { loginWithGoogle(); }} name="Google SignIn" icon={faGoogle} containerClass="mt-4" frontClasses="text-blue-700 h-10 w-full border-2 border-blue-700" backClasses="h-10 w-full bg-white" />
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

                                        <div className="h-full w-full grid grid-cols-12 md:gap-4">
                                            <div className="col-span-12 md:col-span-6">
                                                <div className="flex flex-col w-full gap-1.5 mt-5">
                                                    <label htmlFor="fname" className="text-white text-sm">First Name</label>
                                                    <input id="fname" name="fname" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="John" required />
                                                </div>
                                            </div>

                                            <div className="col-span-12 md:col-span-6">
                                                <div className="flex flex-col w-full gap-1.5 mt-5">
                                                    <label htmlFor="lname" className="text-white text-sm">Last Name</label>
                                                    <input id="lname" name="lname" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="Doily" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col w-full gap-1.5 mt-5">
                                            <label htmlFor="email2" className="text-white text-sm">Email</label>
                                            <input id="email2" name="email2" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="email" placeholder="name@gmail.com" required />
                                        </div>

                                        <div className="flex flex-col w-full gap-1.5 mt-5">
                                            <label htmlFor="password2" className="text-white text-sm">Password</label>
                                            <div className="relative">
                                                <input onMouseLeave={() => setHideBtnIcon("password2", "password2Show", "password2Hide")} id="password2" name="password2" className="bg-blur h-10 w-full py-0.5 px-2.5 rounded-md text-white text-base" type="password" placeholder="••••••••" required />

                                                <button onClick={() => showPassword("password2", "password2Show", "password2Hide")} type="button" className="absolute inset-y-0 right-4 flex items-center text-white text-sm focus:outline-none cursor-pointer">
                                                    <span className="hidden" id="password2Show"><FontAwesomeIcon icon={faEye} /></span>
                                                    <span className="flex" id="password2Hide"><FontAwesomeIcon icon={faEyeSlash} /></span>
                                                </button>
                                            </div>
                                        </div>

                                        <Button onClick={() => signUp(setLoading)} name="Register" containerClass="mt-8" frontClasses="text-white h-10 w-full border-2 border-white" backClasses="h-10 w-full bg-blue-700" />

                                        <p className="text-white text-sm sm:text-base tracking-wide mt-4">Already registered? <a className="text-blue-700 border-b-2 border-transparent hover:border-blue-700" onClick={toggleSlide}>SignIn</a></p>
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