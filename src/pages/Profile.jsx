import React from "react";
import Navbar from "./Navbar";

const Profile = () => {
    return (
        <section className="bg-white custom2">

            <Navbar />

            <div className="max-w-7xl mx-auto h-full mt-24 bg-white p-5">

                <div className="flex items-center justify-start">
                    <div className="flex flex-wrap md:flex-row items-center justify-start md:justify-center">
                        <span className="text-base text-blue-700 opacity-50 cursor-pointer">Home &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-50 cursor-pointer">&nbsp;SingleGigView &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp;Programming & Tech &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp;Web Development</span>
                    </div>
                </div>

                <div className="h-full w-full bg-cus-black-low grid grid-cols-12 rounded-md shadow-md mt-12">

                    <div className="col-span-6 flex items-center justify-center h-full pt-5 pl-5 pr-5 pb-3">
                        <div className="h-36 w-36 flex items-center justify-center border border-white rounded-md cursor-pointer">
                            <div className="h-32 w-32 bg-white rounded-md"></div>
                        </div>
                    </div>

                    <div className="col-span-6 flex flex-col items-center justify-center gap-6 pt-5 pl-5 pr-5 pb-3">
                        <div className="flex flex-col w-full gap-1.5">
                            <label htmlFor="fname" className="text-white text-sm">First Name</label>
                            <input id="fname" name="fname" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="John" required />
                        </div>
                        <div className="flex flex-col w-full gap-1.5">
                            <label htmlFor="lname" className="text-white text-sm">Last Name</label>
                            <input id="lname" name="lname" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="Doily" required />
                        </div>
                    </div>

                    <div className="col-span-6 flex items-center justify-center pt-3 pl-5 pr-5 pb-3">
                        <div className="flex flex-col w-full gap-1.5">
                            <label htmlFor="email" className="text-white text-sm">Email</label>
                            <input id="email" name="email" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="email" placeholder="name@gmail.com" required />
                        </div>
                    </div>

                    <div className="col-span-6 flex items-center justify-center pt-3 pl-5 pr-5 pb-3">
                        <div className="flex flex-col w-full gap-1.5">
                            <label htmlFor="password" className="text-white text-sm">Password</label>
                            <input id="password" name="password" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="password" placeholder="••••••••" required />
                        </div>
                    </div>

                    <div className="col-span-6 flex items-center justify-center pt-3 pl-5 pr-5 pb-3">
                        <div className="flex flex-col w-full gap-1.5">
                            <label htmlFor="mobile" className="text-white text-sm">Mobile Number</label>
                            <input id="mobile" name="mobile" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="tel" placeholder="0712345678" required />
                        </div>
                    </div>

                    <div className="col-span-6 flex items-center justify-center pt-3 pl-5 pr-5 pb-3">
                        <div className="flex flex-col w-full gap-1.5">
                            <label htmlFor="dob" className="text-white text-sm">Password</label>
                            <input id="dob" name="dob" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="date" required />
                        </div>
                    </div>

                    <div className="col-span-6 flex items-center justify-center pt-3 pl-5 pr-5 pb-3">
                        <div className="flex flex-col w-full gap-1.5">
                            <label htmlFor="line1" className="text-white text-sm">Address Line 01</label>
                            <input id="line1" name="line1" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="No: 40/2A" required />
                        </div>
                    </div>

                    <div className="col-span-6 flex items-center justify-center pt-3 pl-5 pr-5 pb-3">
                        <div className="flex flex-col w-full gap-1.5">
                            <label htmlFor="line2" className="text-white text-sm">Address Line 02</label>
                            <input id="line2" name="line2" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="Street Name" required />
                        </div>
                    </div>

                    <div className="col-span-6 flex items-center justify-center pt-3 pl-5 pr-5 pb-3">
                        <div className="flex flex-col w-full gap-1.5">
                            <label htmlFor="city" className="text-white text-sm">City</label>
                            <select id="city" name="city" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" required>
                                <option value="" className="text-black text-base">Select City</option>
                                <option value="" className="text-black text-base">Colombo</option>
                                <option value="" className="text-black text-base">Kandy</option>
                                <option value="" className="text-black text-base">Galle</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-span-6 flex items-center justify-center pt-3 pl-5 pr-5 pb-3">
                        <div className="flex flex-col w-full gap-1.5">
                            <label htmlFor="country" className="text-white text-sm">Country</label>
                            <select id="country" name="country" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" required>
                                <option value="" className="text-black text-base">Select Country</option>
                                <option value="" className="text-black text-base">Sri Lanka</option>
                                <option value="" className="text-black text-base">Austarlia</option>
                                <option value="" className="text-black text-base">England</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-span-12 flex items-center justify-center p-5 mt-4">
                        <button className="w-1/3 text-xl text-black font-bold py-1.5 px-2.5 bg-white rounded-md cursor-pointer">Save</button>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Profile;