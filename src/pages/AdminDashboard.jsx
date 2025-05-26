import React, { useEffect } from "react";
import logo from "../assets/icons/logo-white.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faChartSimple, faUser, faStore, faBellConcierge } from "@fortawesome/free-solid-svg-icons";
import BarChart from "../components/BarChart";

const AdminDashboard = () => {

    useEffect(() => {
        document.body.classList.add("custom2");
        return () => document.body.classList.remove("custom2");
    }, []);

    return (
        <section className="bg-white custom2">

            <nav className="fixed p-2 top-0 left-0 right-0 z-50">
                <div className="max-w-7xl mx-auto h-32 md:h-20 bg-cus-black-low border border-white rounded-2xl flex flex-col md:flex-row items-center justify-center md:justify-between px-5 gap-6 md:gap-0">
                    <a href="/">
                        <img className="h-8 md:h-12" src={logo} alt="logo" />
                    </a>

                    <div className="flex items-center justify-center">
                        <p className="text-2xl md:text-4xl text-white font-londrinasolid font-bold tracking-wider">Admin Dashboard</p>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto h-full mt-36 md:mt-24 bg-white p-2.5 md:p-5">
                <div className="grid grid-cols-12 gap-4 lg:gap-0">
                    <div className="col-span-12 lg:col-span-3 flex items-center justify-center p-2">
                        <div className="h-full w-full flex flex-col items-center justify-start bg-white rounded-md shadow-xl px-2.5 py-4 gap-3">
                            <div className="cus-btn-set_2 h-fit w-full flex flex-row items-center justify-between border border-gray-300 rounded-2xl px-4 py-2 gap-2.5 group">
                                <p className="text-sm md:text-base text-black group-hover:text-white font-londrinasolid tracking-wide transition-all duration-300 ease-linear">Dashboard</p>
                                <FontAwesomeIcon className="text-sm md:text-base text-black group-hover:text-white transition-all duration-300 ease-linear" icon={faGauge} />
                            </div>

                            <div className="cus-btn-set_2 h-fit w-full flex flex-row items-center justify-between border border-gray-300 rounded-2xl px-4 py-2 gap-2.5 group">
                                <p className="text-sm md:text-base text-black group-hover:text-white font-londrinasolid tracking-wide transition-all duration-300 ease-linear">Analytics</p>
                                <FontAwesomeIcon className="text-sm md:text-base text-black group-hover:text-white transition-all duration-300 ease-linear" icon={faChartSimple} />
                            </div>

                            <div className="cus-btn-set_2 h-fit w-full flex flex-row items-center justify-between border border-gray-300 rounded-2xl px-4 py-2 gap-2.5 group">
                                <p className="text-sm md:text-base text-black group-hover:text-white font-londrinasolid tracking-wide transition-all duration-300 ease-linear">Customer Management</p>
                                <FontAwesomeIcon className="text-sm md:text-base text-black group-hover:text-white transition-all duration-300 ease-linear" icon={faUser} />
                            </div>

                            <div className="cus-btn-set_2 h-fit w-full flex flex-row items-center justify-between border border-gray-300 rounded-2xl px-4 py-2 gap-2.5 group">
                                <p className="text-sm md:text-base text-black group-hover:text-white font-londrinasolid tracking-wide transition-all duration-300 ease-linear">Seller Management</p>
                                <FontAwesomeIcon className="text-sm md:text-base text-black group-hover:text-white transition-all duration-300 ease-linear" icon={faStore} />
                            </div>

                            <div className="cus-btn-set_2 h-fit w-full flex flex-row items-center justify-between border border-gray-300 rounded-2xl px-4 py-2 gap-2.5 group">
                                <p className="text-sm md:text-base text-black group-hover:text-white font-londrinasolid tracking-wide transition-all duration-300 ease-linear">Service Management</p>
                                <FontAwesomeIcon className="text-sm md:text-base text-black group-hover:text-white transition-all duration-300 ease-linear" icon={faBellConcierge} />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-9 flex items-center justify-center py-2 pl-0 lg:pl-5 pr-0 lg:pr-2">
                        <div className="h-72 lg:h-full w-full flex items-center justify-center">
                            <BarChart />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AdminDashboard;