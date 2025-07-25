import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import signinImg from "../assets/images/signin.svg";
import { motion, AnimatePresence } from "framer-motion";
import { Slab } from "react-loading-indicators";
import { showPassword } from "../api/ShowPassword";
import { setHideBtnIcon } from "../api/ShowPassword";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { adminLogin } from "../api/AdminLogin";
import { adminVerification } from "../api/AdminVerification";

const AdminLogin = () => {

    const [loading, setLoading] = useState(false);

    const [showFPModal, setShowFPModal] = useState(false);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:8080/hireup_backend/SessionServletAdmin", {
                method: "GET",
                credentials: "include"
            });

            if (response.ok) {
                const json = await response.json();
                if (json.redirect === "YES") {
                    window.location.href = "/adminDashboard";
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
            <div className={`fixed inset-0 h-screen w-full bg-transparent ${loading ? "flex" : "hidden"} items-center justify-center z-[9999]`}>
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
                                                    <h3 id="dialog-title" className="text-xl font-semibold text-black">Admin Verification</h3>
                                                    <div className="mt-2">
                                                        <p className="text-sm text-gray-500">Are you want to Login as a Admin? Verification Code is send to your Email Address. Check it.</p>
                                                    </div>

                                                    <div className="flex flex-col w-full gap-1.5 mt-5">
                                                        <label htmlFor="verification" className="text-black text-sm">Verification Code</label>
                                                        <input id="verification" name="verification" className="bg-cus-black-low h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" required />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white flex flex-row-reverse pt-2 pb-6 px-6 gap-2.5">
                                            <button onClick={() => setShowFPModal(false)} type="button" className="inline-flex justify-center rounded-md bg-red-400 px-3 py-1 text-lg font-semibold text-black shadow-xs ring-1 ring-red-400 ring-inset w-auto cursor-pointer">Cancel</button>
                                            <button onClick={() => adminVerification(setLoading, setShowFPModal)} type="button" className="inline-flex justify-center rounded-md bg-blur px-3 py-1 text-lg font-semibold text-black shadow-xs ring-1 ring-black ring-inset w-auto cursor-pointer">Verify</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div className="relative h-full w-full grid grid-cols-12">
                    <AnimatePresence mode="wait">
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
                                    <h2 className="absolute bg-transparent text-transparent cus-text-style cus-text-style-black text-6xl font-londrinasolid z-20">Welcome! <br />HireUp</h2>

                                    <div className="h-full w-full flex items-center justify-center z-10">
                                        <img src={signinImg} alt="signin_img" className="object-cover h-[500px]" />
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-full w-full flex col-span-12 lg:col-span-5 items-center justify-center p-4 sm:p-6">
                                <div className="h-fit w-full flex flex-col bg-cus-black-low rounded-xl shadow-xl border border-black p-5 sm:p-8">
                                    <h2 className="text-white text-2xl text-left font-semibold">Admin Login</h2>

                                    <div className="flex flex-col w-full gap-1.5 mt-5">
                                        <label htmlFor="email" className="text-white text-sm">Email</label>
                                        <input id="email" name="email" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="email" placeholder="name@gmail.com" required />
                                    </div>

                                    <div className="flex flex-col w-full gap-1.5 mt-5">
                                        <label htmlFor="password" className="text-white text-sm">Password</label>
                                        <div className="relative">
                                            <input onMouseLeave={() => setHideBtnIcon("password", "passwordShow", "passwordHide")} id="password" name="password" className="bg-blur h-10 w-full py-0.5 px-2.5 rounded-md text-white text-base" type="password" placeholder="••••••••" required />

                                            <button onClick={() => showPassword("password", "passwordShow", "passwordHide")} type="button" className="absolute inset-y-0 right-4 flex items-center text-white text-sm focus:outline-none cursor-pointer">
                                                <span className="hidden" id="passwordShow"><FontAwesomeIcon icon={faEye} /></span>
                                                <span className="flex" id="passwordHide"><FontAwesomeIcon icon={faEyeSlash} /></span>
                                            </button>
                                        </div>
                                    </div>

                                    <Button onClick={() => adminLogin(setLoading, setShowFPModal)} name="Admin Login" containerClass="mt-8" frontClasses="text-white h-10 w-full border-2 border-white" backClasses="h-10 w-full bg-blue-700" />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    )
}

export default AdminLogin;