import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SecondaryButton from "../components/SecondaryButton";
import { loadUserDropdowns } from "../api/LoadUserDropdowns";
import { loadOtherDropdownsData } from "../api/LoadUserDropdowns";
import { loadUserData } from "../api/LoadUserData";
import { userProfileUpdate } from "../api/UserProfileUpdate";
import { Slab } from "react-loading-indicators";

const Profile = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:8080/hireup_backend/SessionServlet", {
                method: "GET",
                credentials: "include"
            });

            if (response.ok) {
                const json = await response.json();
                if (json.redirect === "NO") {
                    window.location.href = "/userLogin";
                }
            }
        })();
    }, []);

    useEffect(() => {
        loadUserDropdowns();
        loadUserData();
    }, []);

    useEffect(() => {
        document.body.classList.add("custom2");
        return () => document.body.classList.remove("custom2");
    }, []);

    return (
        <section className="bg-white custom2 relative">
            <div className={`absolute inset-0 h-screen w-full bg-transparent ${loading ? "flex" : "hidden"} items-center justify-center`}>
                <Slab color="#000000" size="large" text="" textColor="" />
            </div>


            <nav className={`fixed ${loading ? "opacity-20 pointer-events-none" : ""} top-0 left-0 right-0 z-50`}>
                <Navbar />
            </nav>

            <div className={`max-w-7xl mx-auto ${loading ? "opacity-20 pointer-events-none" : ""} h-full mt-24 bg-white p-5`}>

                <div className="flex items-center justify-start">
                    <div className="flex flex-wrap md:flex-row items-center justify-start md:justify-center">
                        <span className="text-base text-blue-700 opacity-50 cursor-pointer">Home &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp; UserProfile</span>
                    </div>
                </div>

                <div className="h-full w-full bg-cus-black-low grid grid-cols-12 rounded-md shadow-md mt-12 p-3 sm:p-5">

                    <div className="col-span-12 bg-cus-white-transparent flex flex-col items-center justify-center gap-6 p-3 sm:p-5 mt-4 mb-4 rounded-md">
                        <div className="h-36 w-36 flex items-center justify-center border border-white rounded-full cursor-pointer">
                            <div className="h-32 w-32 bg-white rounded-full"></div>
                        </div>

                        <SecondaryButton containerClass="w-full md:w-2/3 lg:w-1/3 bg-black text-white" name="Upload Profile Picture" />
                    </div>

                    <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-5 px-3 sm:px-5 pb-3">
                        <div className="flex flex-col w-full gap-1.5">
                            <label htmlFor="fname" className="text-white text-sm">First Name</label>
                            <input id="fname" name="fname" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="John" required />
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-5 px-3 sm:px-5 pb-3">
                        <div className="flex flex-col w-full gap-1.5">
                            <label htmlFor="lname" className="text-white text-sm">Last Name</label>
                            <input id="lname" name="lname" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="Doily" required />
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-3 px-3 sm:px-5 pb-3">
                        <div className="flex flex-col w-full gap-1.5">
                            <label htmlFor="email" className="text-white text-sm">Email</label>
                            <input id="email" name="email" className="bg-cus-white-transparent h-10 py-0.5 px-2.5 rounded-md text-black text-base" type="email" placeholder="name@gmail.com" readOnly required disabled />
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-3 px-3 sm:px-5 pb-3">
                        <div className="flex flex-col w-full gap-1.5">
                            <label htmlFor="password" className="text-white text-sm">Password</label>
                            <input id="password" name="password" className="bg-cus-white-transparent h-10 py-0.5 px-2.5 rounded-md text-black text-base" type="password" placeholder="••••••••" readOnly required disabled />
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-3 px-3 sm:px-5 pb-3">
                        <div className="flex flex-col w-full gap-1.5">
                            <label htmlFor="regDate" className="text-white text-sm">Registered Date</label>
                            <input id="regDate" name="regDate" className="bg-cus-white-transparent h-10 py-0.5 px-2.5 rounded-md text-black text-base" type="tel" placeholder="2025-07-07" required disabled />
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-3 px-3 sm:px-5 pb-3">
                        <div className="flex flex-col w-full gap-1.5">
                            <label htmlFor="dob" className="text-white text-sm">Date of Birth</label>
                            <input id="dob" name="dob" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="date" required />
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-3 px-3 sm:px-5 pb-3">
                        <div className="flex flex-col w-full gap-1.5">
                            <label htmlFor="line1" className="text-white text-sm">Address Line 01</label>
                            <input id="line1" name="line1" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="No: 40/2A" required />
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-3 px-3 sm:px-5 pb-3">
                        <div className="flex flex-col w-full gap-1.5">
                            <label htmlFor="line2" className="text-white text-sm">Address Line 02</label>
                            <input id="line2" name="line2" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="Street Name" required />
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-3 px-3 sm:px-5 pb-3">
                        <div className="flex flex-col w-full gap-1.5">
                            <label htmlFor="pcode" className="text-white text-sm">Postal Code</label>
                            <input id="pcode" name="pcode" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="Postal Code" required />
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-3 px-3 sm:px-5 pb-3">
                        <div className="flex flex-col w-full gap-1.5">
                            <label htmlFor="country" className="text-white text-sm">Country</label>
                            <select onChange={loadOtherDropdownsData} id="country" name="country" defaultValue="0" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base appearance-none">
                                <option className="text-black text-base" value="0">Select Country</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-3 px-3 sm:px-5 pb-3">
                        <div className="flex flex-col w-full gap-1.5">
                            <label htmlFor="city" className="text-white text-sm">City</label>
                            <select id="city" name="city" defaultValue="0" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base appearance-none opacity-50" disabled>
                                <option className="text-black text-base" value="0">Select City</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-3 px-3 sm:px-5 pb-3">
                        <div className="flex flex-col w-full gap-1.5">
                            <label className="text-white text-sm">Locale</label>
                            <select id="locale" name="locale" defaultValue="0" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base appearance-none opacity-50" disabled>
                                <option className="text-black text-base" value="0">Select Locale</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-span-12 flex items-center justify-center py-5 px-3 mt-4">
                        <SecondaryButton onClick={() => userProfileUpdate(setLoading)} containerClass="w-full md:w-1/3 bg-black text-white" name="Save" />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Profile;