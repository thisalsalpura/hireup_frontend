import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faStar, faHeart, faCircleLeft, faCircleRight, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import SecondaryButton from "../components/SecondaryButton";
import { paths } from "../constants/script";

const Home = () => {

    useEffect(() => {
        document.body.classList.add("custom2");
        return () => document.body.classList.remove("custom2");
    }, []);

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -300,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 300,
                behavior: "smooth",
            });
        }
    };

    const [isOpenSubMenu, setIsOpenSubMenu] = useState({});

    const toggleSubMenu = () => {
        setIsOpenSubMenu((previousOpen) => !previousOpen);
    };

    return (
        <section className="bg-white custom2">

            <Navbar />

            <div className="max-w-7xl mx-auto h-full mt-24 bg-white p-5">
                <div className="relative h-72 w-full flex items-center justify-center rounded-md overflow-hidden filter blur-xl">
                    <div className="absolute ml-64 mb-24 h-72 w-72 bg-cus-dark-purple rounded-full mix-blend-multiply opacity-80 animate-scale-14s animate-translate-1"></div>
                    <div className="absolute ml-48 mt-24 h-72 w-72 bg-cus-light-pink-high rounded-full mix-blend-multiply opacity-80 animate-scale-10s animate-translate-3"></div>
                    <div className="absolute h-72 w-72 bg-cus-light-orange rounded-full mix-blend-multiply opacity-80 animate-scale-7s animate-translate-5"></div>
                    <div className="absolute mr-48 mb-24 h-72 w-72 bg-cus-light-yellow-high rounded-full mix-blend-multiply opacity-80 animate-scale-14s animate-translate-2"></div>
                    <div className="absolute mr-64 mt-24 h-72 w-72 bg-cus-dark-pink rounded-full mix-blend-multiply opacity-80 animate-scale-10s animate-translate-4"></div>
                </div>

                <div className="flex flex-row items-center justify-center h-full w-full -translate-y-1/2 gap-0">
                    <input type="text" className="bg-cus-black-low px-5 h-16 w-full md:w-2/4 rounded-tl-lg rounded-bl-lg outline-none text-sm md:text-lg lg:text-2xl text-white" placeholder="What service are you looking for today?" />

                    <div className="-ml-0.5 bg-cus-black-low px-4 h-16 flex items-center justify-center rounded-tr-lg rounded-br-lg">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-base md:text-lg lg:text-2xl text-white cursor-pointer" />
                    </div>

                    <div className="flex items-center justify-center h-16 w-auto md:ml-2.5">
                        <SecondaryButton href="/advancedSearch" containerClass="w-fit h-full bg-cus-black-low text-white" name="Advanced" />
                    </div>
                </div>

                <div className="mt-10">
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-1">
                        <h2 className="text-black text-3xl text-center font-londrinasolid">Recommended for You!</h2>

                        <div className="hidden md:flex flex-row items-center justify-center gap-2">
                            <div onClick={scrollLeft} className="bg-cus-black-low w-auto h-auto px-4 py-2.5 flex items-center justify-center rounded-md cursor-pointer">
                                <FontAwesomeIcon icon={faCircleLeft} className="text-white text-2xl font-bold" />
                            </div>
                            <div onClick={scrollRight} className="bg-cus-black-low w-auto h-auto px-4 py-2.5 flex items-center justify-center rounded-md cursor-pointer">
                                <FontAwesomeIcon icon={faCircleRight} className="text-white text-2xl font-bold" />
                            </div>
                        </div>
                    </div>

                    <div ref={scrollRef} className="flex gap-5 sm:gap-8 mt-6 bg-transparent overflow-x-auto hide-scrollbar px-0.5 py-4">

                        <div className="bg-cus-white-transparent flex flex-col rounded-md shadow-sm border border-gray-200 h-96 w-64 sm:w-80 flex-shrink-0">
                            <div className="h-44 w-full rounded-tl-md rounded-tr-md p-4">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md">
                                    <FontAwesomeIcon icon={faHeart} className="absolute top-4 right-4 text-2xl text-cus-light-pink-high" />
                                </div>
                            </div>

                            <div className="h-auto w-full flex flex-col p-4">
                                <div className="flex flex-row items-center justify-start gap-2.5">
                                    <div className="h-7 w-7 border-2 border-black rounded-full flex items-center justify-center p-0.5">
                                        <a className="h-full w-full rounded-full bg-cus-light-yellow-high"></a>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <a className="text-base text-black font-semibold">Ben Stokes</a>
                                    </div>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-base text-black">develop custom web applications business e commerce and landing pages</p>
                                </div>

                                <div className="flex items-center justify-start mt-2">
                                    <p className="text-lg text-black font-semibold"><FontAwesomeIcon icon={faStar} className="text-base mr-2" />4.9</p>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-xl text-black font-semibold tracking-wider">From $80</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cus-white-transparent flex flex-col rounded-md shadow-sm border border-gray-200 h-96 w-64 sm:w-80 flex-shrink-0">
                            <div className="h-44 w-full rounded-tl-md rounded-tr-md p-4">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md">
                                    <FontAwesomeIcon icon={faHeart} className="absolute top-4 right-4 text-2xl text-cus-light-pink-high" />
                                </div>
                            </div>

                            <div className="h-auto w-full flex flex-col p-4">
                                <div className="flex flex-row items-center justify-start gap-2.5">
                                    <div className="h-7 w-7 border-2 border-black rounded-full flex items-center justify-center p-0.5">
                                        <a className="h-full w-full rounded-full bg-cus-light-yellow-high"></a>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <a className="text-base text-black font-semibold">Ben Stokes</a>
                                    </div>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-base text-black">develop custom web applications business e commerce and landing pages</p>
                                </div>

                                <div className="flex items-center justify-start mt-2">
                                    <p className="text-lg text-black font-semibold"><FontAwesomeIcon icon={faStar} className="text-base mr-2" />4.9</p>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-xl text-black font-semibold tracking-wider">From $80</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cus-white-transparent flex flex-col rounded-md shadow-sm border border-gray-200 h-96 w-64 sm:w-80 flex-shrink-0">
                            <div className="h-44 w-full rounded-tl-md rounded-tr-md p-4">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md">
                                    <FontAwesomeIcon icon={faHeart} className="absolute top-4 right-4 text-2xl text-cus-light-pink-high" />
                                </div>
                            </div>

                            <div className="h-auto w-full flex flex-col p-4">
                                <div className="flex flex-row items-center justify-start gap-2.5">
                                    <div className="h-7 w-7 border-2 border-black rounded-full flex items-center justify-center p-0.5">
                                        <a className="h-full w-full rounded-full bg-cus-light-yellow-high"></a>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <a className="text-base text-black font-semibold">Ben Stokes</a>
                                    </div>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-base text-black">develop custom web applications business e commerce and landing pages</p>
                                </div>

                                <div className="flex items-center justify-start mt-2">
                                    <p className="text-lg text-black font-semibold"><FontAwesomeIcon icon={faStar} className="text-base mr-2" />4.9</p>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-xl text-black font-semibold tracking-wider">From $80</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cus-white-transparent flex flex-col rounded-md shadow-sm border border-gray-200 h-96 w-64 sm:w-80 flex-shrink-0">
                            <div className="h-44 w-full rounded-tl-md rounded-tr-md p-4">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md">
                                    <FontAwesomeIcon icon={faHeart} className="absolute top-4 right-4 text-2xl text-cus-light-pink-high" />
                                </div>
                            </div>

                            <div className="h-auto w-full flex flex-col p-4">
                                <div className="flex flex-row items-center justify-start gap-2.5">
                                    <div className="h-7 w-7 border-2 border-black rounded-full flex items-center justify-center p-0.5">
                                        <a className="h-full w-full rounded-full bg-cus-light-yellow-high"></a>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <a className="text-base text-black font-semibold">Ben Stokes</a>
                                    </div>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-base text-black">develop custom web applications business e commerce and landing pages</p>
                                </div>

                                <div className="flex items-center justify-start mt-2">
                                    <p className="text-lg text-black font-semibold"><FontAwesomeIcon icon={faStar} className="text-base mr-2" />4.9</p>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-xl text-black font-semibold tracking-wider">From $80</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cus-white-transparent flex flex-col rounded-md shadow-sm border border-gray-200 h-96 w-64 sm:w-80 flex-shrink-0">
                            <div className="h-44 w-full rounded-tl-md rounded-tr-md p-4">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md">
                                    <FontAwesomeIcon icon={faHeart} className="absolute top-4 right-4 text-2xl text-cus-light-pink-high" />
                                </div>
                            </div>

                            <div className="h-auto w-full flex flex-col p-4">
                                <div className="flex flex-row items-center justify-start gap-2.5">
                                    <div className="h-7 w-7 border-2 border-black rounded-full flex items-center justify-center p-0.5">
                                        <a className="h-full w-full rounded-full bg-cus-light-yellow-high"></a>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <a className="text-base text-black font-semibold">Ben Stokes</a>
                                    </div>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-base text-black">develop custom web applications business e commerce and landing pages</p>
                                </div>

                                <div className="flex items-center justify-start mt-2">
                                    <p className="text-lg text-black font-semibold"><FontAwesomeIcon icon={faStar} className="text-base mr-2" />4.9</p>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-xl text-black font-semibold tracking-wider">From $80</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mt-6 h-full w-full grid grid-cols-12 gap-3.5">
                    <div className="col-span-4 flex flex-col items-center justify-center p-2 gap-12">
                        <div className="h-auto w-full flex flex-col justify-center items-start border border-gray-200 rounded-md shadow-sm px-6 py-4">
                            <h2 className="text-2xl font-londrinasolid tracking-wide">Categories</h2>

                            <div className="mt-5 h-auto w-full flex flex-col justify-center items-center gap-4 opacity-65">
                                {paths.map(({ id, title, icon }) => (
                                    <div key={id} className="h-auto w-full flex flex-col justify-center items-center gap-1.5">
                                        <div className="h-auto w-full flex flex-row justify-between items-center">
                                            <p>{title}</p>
                                            <FontAwesomeIcon onClick={toggleSubMenu} icon={isOpenSubMenu ? faMinus : faPlus} className="cursor-pointer" />
                                        </div>
                                        <div className={`h-auto w-full ${isOpenSubMenu ? "flex" : "hidden"} flex-col justify-center items-start transition-all duration-300 ea`}>
                                            <ul className="text-sm gap-0.5">
                                                <li>Web Development</li>
                                                <li>Mobile Development</li>
                                                <li>Data Science</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="h-52 w-full border border-gray-200 rounded-md shadow-sm"></div>
                    </div>

                    <div className="col-span-8"></div>
                </div>
            </div>

        </section>
    )
}

export default Home;