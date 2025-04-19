import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <section className="bg-white">

            <Navbar />

            <div className="max-w-7xl mx-auto h-full pt-24 bg-white p-5">
                <div className="relative h-72 w-full flex items-center justify-center rounded-md">
                    <div className="absolute ml-64 mb-24 h-72 w-72 bg-cus-dark-purple rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-scale-14s animate-translate-1"></div>
                    <div className="absolute ml-48 mt-24 h-72 w-72 bg-cus-light-pink-high rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-scale-10s animate-translate-3"></div>
                    <div className="absolute h-72 w-72 bg-cus-light-orange rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-scale-7s animate-translate-5"></div>
                    <div className="absolute mr-48 mb-24 h-72 w-72 bg-cus-light-yellow-high rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-scale-14s animate-translate-2"></div>
                    <div className="absolute mr-64 mt-24 h-72 w-72 bg-cus-dark-pink rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-scale-10s animate-translate-4"></div>
                </div>

                <div className="flex flex-row items-center justify-center -translate-y-1/2 gap-0">
                    <input type="text" className="bg-cus-black-low px-5 h-16 w-2/4 rounded-tl-lg rounded-bl-lg outline-none text-2xl text-white" />

                    <div className="-ml-0.5 bg-cus-black-low px-4 h-16 flex items-center justify-center rounded-tr-lg rounded-br-lg">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl text-white cursor-pointer" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home;