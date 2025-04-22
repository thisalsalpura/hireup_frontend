import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes, faStar, faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";

const SingleGigView = () => {
    return (
        <section className="bg-white custom2">

            <Navbar />

            <div className="max-w-7xl mx-auto h-full mt-24 bg-white p-5">

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
                    <div className="flex flex-wrap md:flex-row items-center justify-start md:justify-center">
                        <span className="text-base text-blue-700 opacity-50 cursor-pointer">Home &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-50 cursor-pointer">&nbsp;SingleGigView &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp;Programming & Tech &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp;Web Development</span>
                    </div>

                    <div className="flex items-center justify-start md:justify-center">
                        <FontAwesomeIcon icon={faShareNodes} className="text-base font-semibold text-blue-700 hover:-rotate-12 transition-all duration-300 ease-in-out" />
                    </div>
                </div>

                <div className="grid grid-cols-12 mt-8">
                    <div className="col-span-7 h-auto flex flex-col justify-center pr-5">
                        <p className="text-3xl text-black text-left">develop custom web applications business e commerce and landing pages</p>

                        <div className="flex flex-row items-center justify-start gap-3.5 mt-8">
                            <div className="h-12 w-12 flex items-center justify-center rounded-xl border-2 border-black p-0.5">
                                <a className="h-full w-full rounded-xl bg-cus-light-yellow-high"></a>
                            </div>

                            <div className="flex flex-col justify-start">
                                <p className="text-md text-black font-semibold text-left">Ben Stokes</p>
                                <p className="text-md text-black font-semibold text-left"><FontAwesomeIcon icon={faStar} className="text-md mr-2" />4.9</p>
                            </div>
                        </div>

                        <div className="relative flex items-center mt-8">
                            <div className="absolute items-center justify-start ml-3">
                                <div className="h-full w-full bg-white flex items-center justify-center rounded-full p-2">
                                    <FontAwesomeIcon icon={faLeftLong} className="text-black text-lg" />
                                </div>
                            </div>

                            <div className="w-full h-96 bg-amber-400 rounded-md">

                            </div>

                            <div className="absolute items-center justify-end mr-3">
                                <div className="h-full w-full bg-white flex items-center justify-center rounded-full p-2">
                                    <FontAwesomeIcon icon={faRightLong} className="text-black text-lg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-5 h-auto flex items-center justify-center pl-5">

                    </div>
                </div>

            </div>

        </section>
    )
}

export default SingleGigView;