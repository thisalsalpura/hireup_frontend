import React, { useEffect, useState } from "react";
import logo from "../../assets/icons/logo-white.svg";
import { Slab } from "react-loading-indicators";
import { loadAllUsersList } from "../../api/LoadAllUsersList";

const AdminAllUsersPanel = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);

            try {
                await loadAllUsersList(setLoading);
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

            <div className={`max-w-7xl mx-auto h-full mt-36 md:mt-24 ${loading ? "opacity-20 pointer-events-none" : ""} bg-white p-5`}>
                <div className="flex items-center justify-start">
                    <div className="flex flex-wrap md:flex-row items-center justify-start md:justify-center">
                        <a href="/adminDashboard" className="text-base text-blue-700 opacity-50 cursor-pointer">Dashboard &nbsp;{">"}&nbsp;</a>
                        <a href="/adminSellerManagement" className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp; CustomerManagement</a>
                    </div>
                </div>

                <div className="mt-5 h-full w-full flex flex-col gap-6 items-center justify-center border border-gray-300 rounded-md p-5">
                    <div className="h-full w-full relative overflow-x-auto cusxscroll">
                        <table className="h-full w-full border-separate border-spacing-y-1">
                            <caption className="p-5 bg-cus-black-low rounded-md">
                                <h2 className="text-3xl text-white text-left font-londrinasolid tracking-wide">All Users</h2>
                            </caption>

                            <thead className="bg-gray-500">
                                <tr>
                                    <th className="px-6 py-3 text-black text-lg font-semibold text-left rounded-tl-md rounded-bl-md">
                                        User
                                    </th>
                                    <th className="px-6 py-3 text-black text-lg font-semibold text-left">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-black text-lg font-semibold text-left">
                                        Email
                                    </th>
                                    <th className="px-6 py-3 text-black text-lg font-semibold text-left rounded-tr-md rounded-br-md"></th>
                                </tr>
                            </thead>

                            <tbody id="users-main">
                                <tr id="user" className="bg-cus-black-low hidden border-b border-gray-500">
                                    <td className="px-6 py-4 rounded-tl-md rounded-bl-md">
                                        <div className="flex items-start justify-start gap-4">
                                            <div className="h-20 w-20 bg-white rounded-full shrink-0">

                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-start text-white text-xs lg:text-base h-full w-full">
                                            <p id="user-name"></p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-start text-white text-xs lg:text-base h-full w-full">
                                            <p id="user-email"></p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 rounded-tr-md rounded-br-md">
                                        <div className="flex items-center justify-start text-white text-xs lg:text-base h-full w-full">
                                            <button id="change-status-btn" type="button" className="w-full inline-flex justify-center rounded-md px-3 py-1 text-lg font-semibold text-black shadow-xs hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">#######</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr id="empty-users" className="bg-cus-black-low hidden border-b border-gray-500">
                                    <td className="px-6 py-4 text-center text-white text-lg rounded-md" colSpan="4">
                                        <p>No Usrs Found!</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminAllUsersPanel;