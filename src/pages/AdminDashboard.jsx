import React from "react";
import logo from "../assets/icons/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faChartSimple, faUser, faStore, faBellConcierge } from "@fortawesome/free-solid-svg-icons";
import Chart from 'react-apexcharts';

const AdminDashboard = () => {

    const options = {
        chart: {
            id: 'basic-bar'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        title: {
            text: 'Monthly Sales',
            align: 'center',
            style: { fontSize: '20px', color: '#333', fontFamily: 'Ropa Sans', fontWeight: 'bold' }
        }
    };

    const series = [
        {
            name: 'Sales',
            data: [30, 40, 35, 50, 49, 60]
        }
    ];

    return (
        <section className="bg-white custom2">

            <nav className="fixed p-2 top-0 left-0 right-0 z-50">
                <div className="max-w-7xl mx-auto h-20 bg-cus-white-transparent border border-white backdrop:blur-2xl rounded-2xl flex items-center justify-between px-5">
                    <a href="/">
                        <img className="h-12" src={logo} alt="logo" />
                    </a>

                    <div className="flex items-center justify-center">
                        <p className="text-4xl font-londrinasolid font-bold tracking-wider">Admin Dashboard</p>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto h-full mt-24 bg-white p-5">
                <div className="grid grid-cols-12">
                    <div className="col-span-3 flex items-center justify-center p-2">
                        <div className="h-full w-full flex flex-col items-center justify-start bg-white rounded-md shadow-xl px-2.5 py-4 gap-3">
                            <div className="cus-btn-set_2 h-fit w-full flex flex-row items-center justify-between border border-gray-300 rounded-2xl px-4 py-2 gap-2.5 group">
                                <p className="text-lg text-black group-hover:text-white font-londrinasolid tracking-wide transition-all duration-300 ease-linear">Dashboard</p>
                                <FontAwesomeIcon className="text-lg text-black group-hover:text-white transition-all duration-300 ease-linear" icon={faGauge} />
                            </div>

                            <div className="cus-btn-set_2 h-fit w-full flex flex-row items-center justify-between border border-gray-300 rounded-2xl px-4 py-2 gap-2.5 group">
                                <p className="text-lg text-black group-hover:text-white font-londrinasolid tracking-wide transition-all duration-300 ease-linear">Analytics</p>
                                <FontAwesomeIcon className="text-lg text-black group-hover:text-white transition-all duration-300 ease-linear" icon={faChartSimple} />
                            </div>

                            <div className="cus-btn-set_2 h-fit w-full flex flex-row items-center justify-between border border-gray-300 rounded-2xl px-4 py-2 gap-2.5 group">
                                <p className="text-lg text-black group-hover:text-white font-londrinasolid tracking-wide transition-all duration-300 ease-linear">Customer Management</p>
                                <FontAwesomeIcon className="text-lg text-black group-hover:text-white transition-all duration-300 ease-linear" icon={faUser} />
                            </div>

                            <div className="cus-btn-set_2 h-fit w-full flex flex-row items-center justify-between border border-gray-300 rounded-2xl px-4 py-2 gap-2.5 group">
                                <p className="text-lg text-black group-hover:text-white font-londrinasolid tracking-wide transition-all duration-300 ease-linear">Seller Management</p>
                                <FontAwesomeIcon className="text-lg text-black group-hover:text-white transition-all duration-300 ease-linear" icon={faStore} />
                            </div>

                            <div className="cus-btn-set_2 h-fit w-full flex flex-row items-center justify-between border border-gray-300 rounded-2xl px-4 py-2 gap-2.5 group">
                                <p className="text-lg text-black group-hover:text-white font-londrinasolid tracking-wide transition-all duration-300 ease-linear">Service Management</p>
                                <FontAwesomeIcon className="text-lg text-black group-hover:text-white transition-all duration-300 ease-linear" icon={faBellConcierge} />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-9 flex items-center justify-center p-4">
                        <div className="h-full w-full flex items-center justify-center">
                            <Chart options={options} series={series} type="bar" height="100%" width="100%" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AdminDashboard;