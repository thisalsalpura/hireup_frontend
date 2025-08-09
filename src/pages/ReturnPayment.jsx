import React, { useEffect, useState } from "react";
import { Slab } from "react-loading-indicators";
import { showPassword, setHideBtnIcon } from "../api/ShowPassword";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { registerAsSeller } from "../api/RegisterAsSeller";
import Navbar from "./Navbar";
import { loadInvoiceData } from "../api/LoadInvoiceData";
import SecondaryButton from "../components/SecondaryButton";
import FooterMain from "./Footer";
import { toast } from "react-toastify";

const ReturnPayment = () => {

    const [loading, setLoading] = useState(false);

    const [showFPModal, setShowFPModal] = useState(false);

    const [invoiceURL, setInvoiceURL] = useState('');

    useEffect(() => {
        (async () => {
            setLoading(true);

            try {
                await loadInvoiceData(setLoading, setInvoiceURL);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const handleDownload = () => {
        if (invoiceURL) {
            window.open(invoiceURL, '_blank');
        } else {
            toast.error("Invoice URL not Available!");
        }
    };

    useEffect(() => {
        document.body.classList.add("custom2");
        return () => document.body.classList.remove("custom2");
    }, []);

    return (
        <section className="bg-white custom2 relative">
            <div className={`fixed inset-0 h-screen w-full bg-transparent ${loading ? "flex" : "hidden"} items-center justify-center z-[9999]`}>
                <Slab color="#000000" size="large" text="" textColor="" />
            </div>

            <nav className={`fixed ${loading ? "opacity-20 pointer-events-none" : ""} top-0 left-0 right-0 z-50`}>
                <Navbar onShowModal={() => setShowFPModal(true)} onShowLoading={setLoading} />
            </nav>

            <div className={`max-w-7xl mx-auto ${loading ? "opacity-20 pointer-events-none" : ""} h-full mt-24 bg-white p-5`}>

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
                                                    <h3 id="dialog-title" className="text-xl font-semibold text-black">Seller Registration</h3>
                                                    <div className="mt-2">
                                                        <p className="text-sm text-gray-500">Are you sure you want to register as a seller? Then fill the details and register as a seller.</p>
                                                    </div>

                                                    <div className="flex flex-col w-full gap-1.5 mt-5">
                                                        <label htmlFor="email" className="text-black text-sm">Email</label>
                                                        <input id="email" name="email" className="bg-cus-black-low h-10 w-full py-0.5 px-2.5 rounded-md text-white text-base" type="email" placeholder="name@gmail.com" required />
                                                    </div>

                                                    <div className="flex flex-col w-full gap-1.5 mt-5">
                                                        <label htmlFor="password" className="text-black text-sm">Confirm Password</label>
                                                        <div className="relative">
                                                            <input onMouseLeave={() => setHideBtnIcon("password", "passwordShow", "passwordHide")} id="password" name="password" className="bg-cus-black-low h-10 w-full py-0.5 px-2.5 rounded-md text-white text-base" type="password" placeholder="••••••••" required />

                                                            <button onClick={() => showPassword("password", "passwordShow", "passwordHide")} type="button" className="absolute inset-y-0 right-4 flex items-center text-white text-sm focus:outline-none cursor-pointer">
                                                                <span className="hidden" id="passwordShow"><FontAwesomeIcon icon={faEye} /></span>
                                                                <span className="flex" id="passwordHide"><FontAwesomeIcon icon={faEyeSlash} /></span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white flex flex-row-reverse pt-2 pb-6 px-6 gap-2.5">
                                            <button onClick={() => setShowFPModal(false)} type="button" className="inline-flex justify-center rounded-md bg-red-400 px-3 py-1 text-lg font-semibold text-black shadow-xs ring-1 ring-red-400 ring-inset w-auto cursor-pointer">Cancel</button>
                                            <button onClick={() => registerAsSeller(setLoading, setShowFPModal)} type="button" className="inline-flex justify-center rounded-md bg-blur px-3 py-1 text-lg font-semibold text-black shadow-xs ring-1 ring-black ring-inset w-auto cursor-pointer">Register as Seller</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div className="flex items-center justify-start">
                    <div className="flex flex-wrap md:flex-row items-center justify-start md:justify-center">
                        <a href="/home" className="text-base text-blue-700 opacity-50 cursor-pointer">Back to Home</a>
                    </div>
                </div>

                <div className="h-full w-full flex items-center justify-center mt-8">
                    <div className="h-auto w-full grid grid-cols-12 bg-cus-black-low border border-gray-300 rounded-md shadow-md p-6 gap-4">
                        <div className="h-auto col-span-7 flex flex-col gap-4">
                            <div className="h-auto w-full">
                                <p className="text-white text-2xl tracking-wide font-black">Order ID: &nbsp;&nbsp;<span id="order-id" className="opacity-70">#########</span></p>
                            </div>

                            <div className="h-auto w-full">
                                <p className="text-white text-2xl tracking-wide font-black">Placed Date: &nbsp;&nbsp;<span id="order-datetime" className="opacity-70">#########</span></p>
                            </div>
                        </div>

                        <div className="h-auto col-span-5">
                            <SecondaryButton onClick={handleDownload} containerClass="w-full bg-white text-black" name="Download Invoice" />
                        </div>

                        <div className="h-auto col-span-12 flex flex-col items-center justify-center mt-4">
                            <hr className="border-white h-0.5 w-full opacity-20" />

                            <p className="text-white font-semibold text-lg tracking-wide py-2.5">Thank You for Purchasing!</p>

                            <hr className="border-white h-0.5 w-full opacity-20" />
                        </div>
                    </div>
                </div>

                <FooterMain />

            </div>
        </section>
    )
}

export default ReturnPayment;