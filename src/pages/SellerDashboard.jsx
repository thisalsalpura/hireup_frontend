import React, { useEffect } from "react";
import TabsComponent from "../components/TabsComponent";
import { sellerDashboardTabs } from "../constants/script";
import logo from "../assets/icons/logo.svg";

const SellerDashboard = () => {

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:8080/hireup_backend/SessionServletSeller", {
                method: "GET",
                credentials: "include"
            });

            if (response.ok) {
                const json = await response.json();
                if (json.redirect === "NO") {
                    window.location.href = "/home";
                }
            }
        })();
    }, []);

    useEffect(() => {
        document.body.classList.add("custom2");
        return () => document.body.classList.remove("custom2");
    }, []);

    return (
        <section className="bg-white custom2">

            <nav className="fixed top-0 left-0 right-0 z-50">
                <div className="max-w-7xl mx-auto h-36 md:h-24 bg-white flex flex-col md:flex-row items-center justify-between py-4 md:py-0 px-7">
                    <a href="/home">
                        <img className="h-10 sm:h-12" src={logo} alt="logo" />
                    </a>

                    <div className="flex items-center justify-center">
                        <a href="/home" className="cus-btn-set w-auto flex">
                            <p className="text-lg font-bold text-black">Switch to Buying</p>
                        </a>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto h-full mt-36 md:mt-24 bg-white p-5">

                <div className="flex items-center justify-start">
                    <div className="flex flex-wrap md:flex-row items-center justify-start md:justify-center">
                        <a href="/home" className="text-base text-blue-700 opacity-50 cursor-pointer">Home &nbsp;{">"}&nbsp;</a>
                        <a href="/sellerDashboard" className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp; SellerDashboard</a>
                    </div>
                </div>

                <div className="mt-5 mb-5 h-auto w-full flex items-center justify-center border-t border-b border-t-gray-200 border-b-gray-200 py-2.5">
                    <h2 className="text-4xl font-londrinasolid tracking-wide">Seller Dashboard</h2>
                </div>

                <div className="mt-10 h-full w-full flex items-center justify-center">
                    <TabsComponent tabs={sellerDashboardTabs} />
                </div>

            </div>

        </section>
    )
}

export default SellerDashboard;