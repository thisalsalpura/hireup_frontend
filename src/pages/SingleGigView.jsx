import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

const SingleGigView = () => {
    return (
        <section className="bg-white custom2">

            <Navbar />

            <div className="max-w-7xl mx-auto h-full mt-24 bg-white p-5">

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                    <div className="flex flex-wrap md:flex-row items-start justify-center">
                        <span className="text-base text-blue-700 opacity-50 cursor-pointer">Home &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-50 cursor-pointer">&nbsp;SingleGigView &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp;Programming & Tech &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp;Web Development</span>
                    </div>

                    <div className="flex items-center justify-center">
                        <FontAwesomeIcon icon={faShareNodes} className="text-base font-semibold text-black hover:-rotate-12 transition-all duration-300 ease-in-out" />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default SingleGigView;