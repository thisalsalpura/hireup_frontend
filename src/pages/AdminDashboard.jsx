import React, { useEffect, useState } from "react";
import logo from "../assets/icons/logo-white.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faCookieBite, faUser, faStore, faBellConcierge } from "@fortawesome/free-solid-svg-icons";
import BarChart from "../components/BarChart";
import { loadAnalyticsData } from "../api/LoadAnalyticsData";
import { Slab } from "react-loading-indicators";
import SecondaryButton from "../components/SecondaryButton";

const AdminDashboard = () => {

    const [loading, setLoading] = useState(false);

    const [chartData, setChartData] = useState([]);

    const [reportURL, setReportURL] = useState('');

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

    useEffect(() => {
        (async () => {
            setLoading(true);

            try {
                await loadAnalyticsData(setLoading, setChartData, setReportURL);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const handleDownload = () => {
        if (reportURL) {
            window.open(reportURL, '_blank');
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

            <div className={`max-w-7xl mx-auto h-full flex flex-col mt-36 md:mt-24 ${loading ? "opacity-20 pointer-events-none" : ""} bg-white p-5`}>
                <div className="grid grid-cols-12 gap-4 lg:gap-0">
                    <div className="col-span-12 lg:col-span-3 flex items-center justify-center p-2">
                        <div className="h-full w-full flex flex-col items-center justify-start bg-white rounded-md shadow-xl px-2.5 py-4 gap-3">
                            <a href="adminDashboard" className="cus-btn-set_2 h-fit w-full flex flex-row items-center justify-between border border-gray-300 rounded-2xl px-4 py-2 gap-2.5 group">
                                <p className="text-sm md:text-base text-black group-hover:text-white font-londrinasolid tracking-wide transition-all duration-300 ease-linear">Dashboard</p>
                                <FontAwesomeIcon className="text-sm md:text-base text-black group-hover:text-white transition-all duration-300 ease-linear" icon={faGauge} />
                            </a>

                            <a href="/adminAllUsersPanel" className="cus-btn-set_2 h-fit w-full flex flex-row items-center justify-between border border-gray-300 rounded-2xl px-4 py-2 gap-2.5 group">
                                <p className="text-sm md:text-base text-black group-hover:text-white font-londrinasolid tracking-wide transition-all duration-300 ease-linear">User Management</p>
                                <FontAwesomeIcon className="text-sm md:text-base text-black group-hover:text-white transition-all duration-300 ease-linear" icon={faUser} />
                            </a>

                            <a href="/adminAllGigsPanel" className="cus-btn-set_2 h-fit w-full flex flex-row items-center justify-between border border-gray-300 rounded-2xl px-4 py-2 gap-2.5 group">
                                <p className="text-sm md:text-base text-black group-hover:text-white font-londrinasolid tracking-wide transition-all duration-300 ease-linear">Gig Management</p>
                                <FontAwesomeIcon className="text-sm md:text-base text-black group-hover:text-white transition-all duration-300 ease-linear" icon={faCookieBite} />
                            </a>

                            <a href="/adminSellerManagement" className="cus-btn-set_2 h-fit w-full flex flex-row items-center justify-between border border-gray-300 rounded-2xl px-4 py-2 gap-2.5 group">
                                <p className="text-sm md:text-base text-black group-hover:text-white font-londrinasolid tracking-wide transition-all duration-300 ease-linear">Seller Requests</p>
                                <FontAwesomeIcon className="text-sm md:text-base text-black group-hover:text-white transition-all duration-300 ease-linear" icon={faStore} />
                            </a>

                            <a href="/adminGigManagement" className="cus-btn-set_2 h-fit w-full flex flex-row items-center justify-between border border-gray-300 rounded-2xl px-4 py-2 gap-2.5 group">
                                <p className="text-sm md:text-base text-black group-hover:text-white font-londrinasolid tracking-wide transition-all duration-300 ease-linear">Gig Requests</p>
                                <FontAwesomeIcon className="text-sm md:text-base text-black group-hover:text-white transition-all duration-300 ease-linear" icon={faBellConcierge} />
                            </a>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-9 flex flex-col items-center justify-center py-2 pl-0 lg:pl-5 pr-0 lg:pr-2">
                        <div className="h-72 lg:h-full w-full flex items-center justify-center">
                            <BarChart name="Category" data={chartData} />
                        </div>
                    </div>
                </div>

                <div className="h-auto w-full p-2 mt-4">
                    <div className="h-auto w-full grid grid-cols-12 bg-cus-black-low rounded-md p-4">
                        <div className="h-auto col-span-8 flex items-center justify-start px-2.5">
                            <p className="text-white text-2xl font-black">Analytics Report</p>
                        </div>

                        <div className="h-auto col-span-4 flex items-center justify-center">
                            <SecondaryButton onClick={handleDownload} containerClass="w-full h-12 bg-white text-black" name="Download Report" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AdminDashboard;