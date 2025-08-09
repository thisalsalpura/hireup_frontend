import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SecondaryButton from "../components/SecondaryButton";
import emptyImg from "../assets/images/empty-img.svg";
import { loadCartData } from "../api/LoadCartData";
import { Slab } from "react-loading-indicators";
import { showPassword, setHideBtnIcon } from "../api/ShowPassword";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { checkout } from "../api/Checkout";
import { registerAsSeller } from "../api/RegisterAsSeller";
import FooterMain from "./Footer";

const Cart = () => {

    const [loading, setLoading] = useState(false);

    const [showFPModal, setShowFPModal] = useState(false);

    const [showPaymentConfModal, setShowPaymentConfModal] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);

            try {
                await loadCartData(setLoading);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    useEffect(() => {
        try {
            const script = document.createElement("script");
            script.src = "https://www.payhere.lk/lib/payhere.js";
            script.type = "text/javascript";
            script.async = true;

            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        } catch (error) {
            console.log(error);
        }
    }, []);

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

                {showPaymentConfModal && (
                    <>
                        <div role="dialog" aria-modal="true" aria-labelledby="dialog-title" className="relative z-50">
                            <div aria-hidden="true" className="fixed inset-0 bg-gray-500/75 transition-opacity"></div>

                            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4">
                                    <div className="relative overflow-hidden rounded-lg bg-white">
                                        <div className="bg-white p-6">
                                            <div className="flex flex-col items-center justify-center gap-8">
                                                <div className="h-full w-full flex flex-col items-center justify-center gap-5">
                                                    <div className="h-16 w-16 bg-[#DBFCE7] flex items-center justify-center rounded-full p-2.5">
                                                        <FontAwesomeIcon icon={faCheck} className="text-[#00A63E] text-4xl font-black" />
                                                    </div>
                                                    <h2 className="text-2xl font-londrinasolid font-medium tracking-wider">Payment Successful!</h2>
                                                </div>
                                                <p className="text-black font-medium">Your payment was successful. Thank you for your purchase!</p>
                                            </div>
                                        </div>
                                        <div className="bg-white flex items-center justify-center pt-2 pb-6 px-6">
                                            <p className="text-lg font-semibold text-blue-600 text-center loading-text">Loading...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div className="flex items-center justify-start">
                    <div className="flex flex-wrap md:flex-row items-center justify-start md:justify-center">
                        <a href="/home" className="text-base text-blue-700 opacity-50 cursor-pointer">Home &nbsp;{">"}&nbsp;</a>
                        <a href="/cart" className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp; Cart</a>
                    </div>
                </div>

                <div className="h-full w-full flex flex-col mt-8">
                    <h2 className="font-londrinasolid text-black text-3xl">Cart</h2>

                    <hr className="border-gray-300 h-0.5 w-full mt-2.5" />

                    <div className="h-full w-full flex flex-col sm:flex-row items-center justify-center mt-6 gap-3 sm:gap-0">
                        <input type="text" className="bg-cus-black-low px-5 h-14 w-full sm:w-2/4 rounded-lg outline-none text-lg text-white" placeholder="Search by Name..." />

                        <div className="flex items-center justify-center h-14 w-full sm:w-auto md:ml-2.5">
                            <SecondaryButton href="/advancedSearch" containerClass="w-full sm:w-fit h-full bg-cus-black-low text-white" name="Search" />
                        </div>
                    </div>
                </div>

                <div className="h-full w-full grid grid-cols-12 gap-5 mt-8">
                    <div id="cart-gigs-main" className="col-span-12 lg:col-span-8 h-full flex flex-col items-center justify-center bg-white border border-gray-300 rounded-md shadow-md p-5 gap-5">

                        <div id="cart-gig" className="h-full md:h-60 w-full hidden flex-col md:flex-row items-center justify-between gap-6 group">
                            <div className="h-60 md:h-full w-full md:w-96 flex items-center justify-center border border-gray-300 rounded-md overflow-hidden group-hover:scale-105 transition-all duration-300 ease-in-out">
                                <img id="cart-gig-image" src={emptyImg} alt="cart-gig-image" className="h-full w-full object-cover" />
                            </div>

                            <div className="h-full w-full flex flex-col items-start justify-between py-2 gap-0.5 md:gap-4">
                                <div className="flex flex-row items-center justify-start gap-2.5">
                                    <div className="h-7 w-7 border-2 border-black rounded-full flex items-center justify-center p-0.5">
                                        <a className="h-full w-full rounded-full bg-cus-light-yellow-high"></a>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <a id="cart-gig-seller" className="text-base text-black font-semibold">############</a>
                                    </div>
                                </div>

                                <p id="cart-gig-title" className="text-black line-clamp-2">############</p>

                                <p id="cart-gig-package-type" className="text-black font-semibold">############</p>

                                <p className="text-black text-3xl font-semibold">$ <span id="cart-gig-price">##.##</span></p>

                                <div className="w-full flex items-center justify-end mt-2">
                                    <button id="remove-cart-gig" type="button" className="inline-flex justify-center rounded-md bg-red-400 px-3 py-1 text-lg font-semibold text-black shadow-xs ring-1 ring-red-400 ring-inset w-auto cursor-pointer">Remove</button>
                                </div>
                            </div>
                        </div>

                        <div id="empty-cart-gigs" className="hidden items-center justify-center">
                            <p className="text-black text-3xl font-black">No Gigs in Cart.</p>
                        </div>

                        <hr id="card-gig-separator" className="border-gray-300 h-0.5 w-full hidden" />

                    </div>

                    <div className="col-span-12 lg:col-span-4 flex flex-col items-center justify-center bg-cus-black-low border border-gray-300 rounded-md shadow-md p-5">
                        <div className="h-full w-full flex flex-col items-center justify-between">
                            <div className="h-full w-full flex-col items-center justify-center">
                                <h2 className="text-white text-4xl text-center font-londrinasolid mb-2.5">Checkout</h2>
                                <hr className="h-0.5 w-full bg-white opacity-25" />
                                <div id="checkout-gigs-list-main" className="h-full w-full flex flex-col items-center justify-start py-2.5">
                                    <div id="checkout-gig" className="w-full items-start justify-between hidden grid-cols-12 gap-2 mt-8 mb-5">
                                        <p id="ckekout-gig-number" className="text-white text-xs md:text-base col-span-1 text-left">##</p>
                                        <p id="checkout-gig-title" className="text-white text-xs md:text-base col-span-7 text-left line-clamp-2 overflow-hidden">######</p>
                                        <p id="ckekout-gig-package-type" className="text-white text-xs md:text-base col-span-1 text-left">######</p>
                                        <p className="text-white text-xs md:text-base col-span-3 text-right">$ <span id="checkout-gig-package-price">##.##</span></p>
                                    </div>

                                    <div id="checkout-total" className="w-full hidden flex-col items-end justify-center gap-4">
                                        <hr className="h-0.5 w-full bg-white opacity-25" />
                                        <p className="text-white text-2xl font-semibold">Total:&nbsp;&nbsp;&nbsp; $ <span id="checkout-amount-value">45.00</span></p>
                                        <div className="w-full flex flex-col items-center justify-center gap-1.5">
                                            <hr className="h-0.5 w-full bg-white opacity-25" />
                                            <hr className="h-0.5 w-full bg-white opacity-25" />
                                        </div>
                                    </div>

                                    <div id="empty-checkout-gigs" className="items-start justify-between hidden grid-cols-12 py-4 mt-10">
                                        <p className="col-span-12 text-white text-xl font-semibold text-center">No Gigs in Cart.</p>
                                    </div>
                                </div>
                            </div>

                            <SecondaryButton onClick={() => checkout(setLoading, setShowPaymentConfModal)} containerClass="mt-10 w-full h-12 bg-white text-black" name="Checkout" />
                        </div>
                    </div>
                </div>

                <FooterMain />

            </div>

        </section>
    )
}

export default Cart;