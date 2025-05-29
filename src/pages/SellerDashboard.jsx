import React from "react";
import logo from "../assets/icons/logo.svg";
import TabsComponent from "../components/TabsComponent";
import SellerProfile from "./SellerProfile";

const SellerDashboard = () => {
    return (
        <section className="bg-white custom2">

            <nav className="absolute top-0 left-0 right-0 z-50">
                <div className="max-w-7xl mx-auto h-24 bg-white flex items-center justify-between px-7">
                    <a href="/">
                        <img className="h-10 sm:h-12" src={logo} alt="logo" />
                    </a>

                    <div className="flex flex-row items-center justify-center gap-5 sm:gap-8">
                        <div className="cus-btn-set w-auto hidden md:flex">
                            <a className="text-lg font-bold text-black">Switch to Buying</a>
                        </div>

                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-black flex items-center justify-center p-0.5">
                            <a className="h-full w-full rounded-full bg-cus-light-yellow-high"></a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto h-full mt-24 bg-white p-5">

                <div className="flex items-center justify-start">
                    <div className="flex flex-wrap md:flex-row items-center justify-start md:justify-center">
                        <span className="text-base text-blue-700 opacity-50 cursor-pointer">Home &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp; SellerDashboard</span>
                    </div>
                </div>

                <div className="mt-5 mb-5 h-auto w-full flex items-center justify-center border-t border-b border-t-gray-200 border-b-gray-200 py-2.5">
                    <h2 className="text-4xl font-londrinasolid tracking-wide">Seller Dashboard</h2>
                </div>

                <div className="mt-10 h-full w-full flex items-center justify-center">
                    <TabsComponent tabName="Seller Profile" tabContent={<SellerProfile />} />
                </div>

            </div>

        </section>
    )
}

export default SellerDashboard;