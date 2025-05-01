import React from "react";
import Navbar from "./Navbar";
import SecondaryButton from "../components/SecondaryButton";
import cartImg from "../assets/images/cart.svg";
import Button from "../components/Button";

const Cart = () => {
    return (
        <section className="bg-white custom2">

            <Navbar />

            <div className="max-w-7xl mx-auto h-full mt-24 bg-white p-5">
                <div className="flex items-center justify-start">
                    <div className="flex flex-wrap md:flex-row items-center justify-start md:justify-center">
                        <span className="text-base text-blue-700 opacity-50 cursor-pointer">Home &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp; Cart</span>
                    </div>
                </div>

                <div className="h-full w-full flex flex-col mt-8">
                    <h2 className="font-londrinasolid text-black text-3xl">Cart</h2>

                    <hr className="h-0.5 w-full bg-black opacity-5 mt-2.5" />

                    <div className="h-full w-full flex flex-row items-center justify-center mt-6">
                        <input type="text" className="bg-cus-black-low px-5 h-14 w-2/4 rounded-lg outline-none text-lg text-white" placeholder="Search by Name..." />

                        <div className="flex items-center justify-center h-14 w-auto md:ml-2.5">
                            <SecondaryButton href="/advancedSearch" containerClass="w-fit h-full bg-cus-black-low text-white" name="Search" />
                        </div>
                    </div>
                </div>

                <div className="h-full w-full grid grid-cols-12 mt-8">
                    <div className="col-span-8 flex flex-col items-center justify-center p-2.5 gap-6">
                        <div className="h-full w-full flex flex-row items-center justify-center bg-cus-black-low rounded-md shadow-md p-5 gap-2.5">
                            <div className="h-full w-2/4 flex items-center justify-center border-2 border-white rounded-md p-1.5 overflow-hidden">
                                <div className="h-full w-full flex items-center justify-center bg-white rounded-md p-2 hover:scale-110 transition-all duration-300 ease-in-out">
                                    <img src={cartImg} alt="cart" className="h-full w-full object-cover rounded-md" />
                                </div>
                            </div>

                            <div className="h-full w-full flex flex-col items-start justify-center p-2.5 gap-2.5">
                                <h2 className="font-londrinasolid text-white text-xl">Cart Item Name</h2>
                                <p className="text-base text-white opacity-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat id ligula facilisis lacinia.</p>
                                <Button name="Remove from Cart" containerClass="mt-10" frontClasses="text-white h-10 w-full border-2 border-white" backClasses="h-10 w-full bg-cus-light-yellow-high" />
                            </div>
                        </div>

                        <div className="h-full w-full flex flex-row items-center justify-center bg-cus-black-low rounded-md shadow-md p-5 gap-2.5">
                            <div className="h-full w-2/4 flex items-center justify-center border-2 border-white rounded-md p-1.5 overflow-hidden">
                                <div className="h-full w-full flex items-center justify-center bg-white rounded-md p-2 hover:scale-110 transition-all duration-300 ease-in-out">
                                    <img src={cartImg} alt="cart" className="h-full w-full object-cover rounded-md" />
                                </div>
                            </div>

                            <div className="h-full w-full flex flex-col items-start justify-center p-2.5 gap-2.5">
                                <h2 className="font-londrinasolid text-white text-xl">Cart Item Name</h2>
                                <p className="text-base text-white opacity-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat id ligula facilisis lacinia.</p>
                                <Button name="Remove from Cart" containerClass="mt-10" frontClasses="text-white h-10 w-full border-2 border-white" backClasses="h-10 w-full bg-cus-light-yellow-high" />
                            </div>
                        </div>

                        <div className="h-full w-full flex flex-row items-center justify-center bg-cus-black-low rounded-md shadow-md p-5 gap-2.5">
                            <div className="h-full w-2/4 flex items-center justify-center border-2 border-white rounded-md p-1.5 overflow-hidden">
                                <div className="h-full w-full flex items-center justify-center bg-white rounded-md p-2 hover:scale-110 transition-all duration-300 ease-in-out">
                                    <img src={cartImg} alt="cart" className="h-full w-full object-cover rounded-md" />
                                </div>
                            </div>

                            <div className="h-full w-full flex flex-col items-start justify-center p-2.5 gap-2.5">
                                <h2 className="font-londrinasolid text-white text-xl">Cart Item Name</h2>
                                <p className="text-base text-white opacity-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat id ligula facilisis lacinia.</p>
                                <Button name="Remove from Cart" containerClass="mt-10" frontClasses="text-white h-10 w-full border-2 border-white" backClasses="h-10 w-full bg-cus-light-yellow-high" />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 flex flex-col items-center justify-center p-2.5">
                        <div className="h-full w-full flex flex-col items-center justify-between bg-cus-black-low rounded-md shadow-md p-5">

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Cart;