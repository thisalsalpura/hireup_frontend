import React from "react";
import { socialLinks } from "../constants/script";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterMain = () => {
    return (
        <div className="mt-24 p-0.5">
            <div className="mb-12 h-0.5 w-full bg-gray-200"></div>

            <div className="h-full w-full flex flex-col justify-center items-start bg-cus-black-low rounded-md gap-8 px-10 sm:px-20 py-8">
                <div className="mt-2.5 h-0.5 w-full bg-gray-300 opacity-20"></div>

                <div className="h-auto w-full grid grid-cols-12 justify-center items-start sm:gap-2">

                    <div className="col-span-12 sm:col-span-3 flex flex-col justify-center items-start gap-4">
                        <h2 className="text-white text-lg text-left font-semibold">Company</h2>

                        <ul className="text-white text-sm text-left space-y-1.5">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>

                    <div className="mt-8 sm:mt-0 col-span-12 sm:col-span-3 flex flex-col justify-center items-start gap-4">
                        <h2 className="text-white text-lg text-left font-semibold">Company</h2>

                        <ul className="text-white text-sm text-left space-y-1.5">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="mt-8 sm:mt-0 col-span-12 sm:col-span-3 flex flex-col justify-center items-start gap-4">
                        <h2 className="text-white text-lg text-left font-semibold">Company</h2>

                        <ul className="text-white text-sm text-left space-y-1.5">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="mt-8 sm:mt-0 col-span-12 sm:col-span-3 flex flex-col justify-center items-start gap-4">
                        <h2 className="text-white text-lg text-left font-semibold">Company</h2>

                        <ul className="text-white text-sm text-left space-y-1.5">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                </div>

                <div className="mt-10 h-full w-full grid grid-cols-12 justify-center items-center sm:gap-2">
                    <div className="col-span-12 sm:col-span-6 flex flex-col sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-8">
                        <p className="text-white text-left font-semibold">Follow us</p>

                        <div className="flex flex-row justify-start items-center gap-5">
                            {socialLinks.map(({ id, title, href, icon }) => (
                                <FontAwesomeIcon key={id} icon={icon} className="text-white text-2xl cursor-pointer transition-all duration-300 ease-in-out hover:-rotate-12 hover:scale-105" />
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-0 col-span-12 sm:col-span-6 flex flex-col sm:flex-row justify-center sm:justify-end items-start sm:items-center gap-8">
                        <p className="text-white text-right font-semibold">Mobile App</p>

                        <div className="flex flex-row justify-end items-center gap-8">
                            <FontAwesomeIcon icon={faGooglePlay} className="text-white text-2xl cursor-pointer" />
                            <FontAwesomeIcon icon={faApple} className="text-white text-2xl cursor-pointer" />
                        </div>
                    </div>
                </div>

                <div className="h-0.5 w-full bg-gray-300 opacity-20"></div>

                <div className="h-auto w-full flex justify-center items-center">
                    <p className="text-white text-xl text-center font-semibold tracking-wider">Copyright © 2025 HireUp All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default FooterMain;