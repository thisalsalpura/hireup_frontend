import React, { useEffect, useState } from "react";
import logo from "../assets/icons/logo-white.svg";
import { verifySeller } from "../api/VerifySeller";
import { Slab } from "react-loading-indicators";
import { loadPendingSellers } from "../api/AdminSellerManagement";

const AdminSellerManagement = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);

            try {
                await loadPendingSellers(setLoading);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:8080/hireup_backend/SessionServletAdmin", {
                method: "GET",
                credentials: "include"
            });

            if (response.ok) {
                const json = await response.json();
                if (json.redirect === "NO") {
                    window.location.href = "/adminLogin";
                }
            }
        })();
    }, []);

    return (
        <section className="bg-white custom2 relative">
            <div className={`absolute inset-0 h-screen w-full bg-transparent ${loading ? "flex" : "hidden"} items-center justify-center`}>
                <Slab color="#000000" size="large" text="" textColor="" />
            </div>

            <nav className={`fixed p-2 top-0 left-0 right-0 ${loading ? "opacity-20 pointer-events-none" : ""} z-50`}>
                <div className="max-w-7xl mx-auto h-32 md:h-20 bg-cus-black-low border border-white rounded-2xl flex flex-col md:flex-row items-center justify-center md:justify-between px-5 gap-6 md:gap-0">
                    <a href="/adminDashboard">
                        <img className="h-8 md:h-12" src={logo} alt="logo" />
                    </a>

                    <div className="flex items-center justify-center">
                        <p className="text-2xl md:text-4xl text-white font-londrinasolid font-bold tracking-wider">Admin Dashboard</p>
                    </div>
                </div>
            </nav>

            <div className={`max-w-7xl mx-auto h-full mt-36 md:mt-24 ${loading ? "opacity-20 pointer-events-none" : ""} bg-white p-5`}>
                <div className="flex items-center justify-start">
                    <div className="flex flex-wrap md:flex-row items-center justify-start md:justify-center">
                        <a href="/adminDashboard" className="text-base text-blue-700 opacity-50 cursor-pointer">Dashboard &nbsp;{">"}&nbsp;</a>
                        <a href="/adminSellerManagement" className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp; CustomerManagement</a>
                    </div>
                </div>

                <div className="mt-5 h-full w-full flex flex-col gap-6 items-center md:items-start justify-center border border-gray-300 shadow-xl rounded-md p-4 sm:p-8">
                    <h2 className="text-2xl text-black text-center md:text-left font-londrinasolid tracking-wide">Seller registration requests</h2>

                    <div id="pending-sellers-main" className="mt-2 h-full w-full grid grid-cols-12 gap-4">
                        <div id="pending-seller" className="cus-btn-set_2 h-full col-span-12 flex flex-col md:flex-row items-center justify-between border border-gray-300 rounded-2xl px-5 py-3.5 gap-4 group">
                            <p id="pending-seller-name" className="font-londrinasolid text-black group-hover:text-white tracking-wider">###############</p>
                            <p id="pending-seller-email" className="font-londrinasolid text-black group-hover:text-white tracking-wider">###############</p>
                            <button id="verify-seller-btn" onClick={() => verifySeller(setLoading)} type="button" className="w-full md:w-fit inline-flex justify-center rounded-md bg-cus-light-yellow-high px-3 py-1 text-lg font-semibold text-black shadow-xs ring-1 ring-cus-light-yellow-high ring-inset cursor-pointer">Verify</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminSellerManagement;