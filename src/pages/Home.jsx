import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faStar, faHeart, faCircleLeft, faCircleRight, faPlus, faMinus, faRetweet, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import SecondaryButton from "../components/SecondaryButton";
import { paths } from "../constants/script";
import Button from "../components/Button";
import FooterMain from "./Footer";
import { Slab } from "react-loading-indicators";
import { showPassword } from "../api/ShowPassword";
import { setHideBtnIcon } from "../api/ShowPassword";
import { registerAsSeller } from "../api/RegisterAsSeller";

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

    const [openSubMenus, setOpenSubMenus] = useState({});

    const [loading, setLoading] = useState(false);

    const [showFPModal, setShowFPModal] = useState(false);

    const toggleSubMenu = (id) => {
        setOpenSubMenus((previousOpen) => ({
            ...previousOpen,
            [id]: !previousOpen[id],
        }));
    };

    return (
        <section className="bg-white custom2 relative">
            <div className={`fixed inset-0 h-screen w-full bg-transparent ${loading ? "flex" : "hidden"} items-center justify-center z-[9999]`}>
                <Slab color="#000000" size="large" text="" textColor="" />
            </div>

            <Navbar onShowModal={() => setShowFPModal(true)} onShowLoading={setLoading} loadingClass={`${loading ? "opacity-20 pointer-events-none" : ""}`} />

            <div className={`max-w-7xl mx-auto ${loading ? "opacity-20 pointer-events-none" : ""} h-full bg-white p-5`}>

                {showFPModal && (
                    <>
                        <div role="dialog" aria-modal="true" aria-labelledby="dialog-title" className="relative z-50">
                            <div aria-hidden="true" className="fixed inset-0 bg-gray-500/75 transition-opacity"></div>

                            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4">
                                    <div className="relative overflow-hidden rounded-lg bg-white">
                                        <div className="bg-white p-6">
                                            <div className="flex items-start justify-center">
                                                <div className="text-left">
                                                    <h3 id="dialog-title" className="text-xl font-semibold text-black">Seller Registration</h3>
                                                    <div className="mt-2">
                                                        <p className="text-sm text-gray-500">Are you sure you want to register as a seller? Then fill the details and register as a seller.</p>
                                                    </div>

                                                    <div className="flex flex-col w-full gap-1.5 mt-5">
                                                        <label htmlFor="email" className="text-black text-sm">Email</label>
                                                        <input id="email" name="email" className="bg-cus-black-low h-10 w-full py-0.5 px-2.5 rounded-md text-white text-base" type="email" placeholder="name@gmail.com" required />
                                                    </div>

                                                    <div className="flex flex-col w-full gap-1.5 mt-5">
                                                        <label htmlFor="password" className="text-black text-sm">Confirm Password</label>
                                                        <div className="relative">
                                                            <input onMouseLeave={() => setHideBtnIcon("password", "passwordShow", "passwordHide")} id="password" name="password" className="bg-cus-black-low h-10 w-full py-0.5 px-2.5 rounded-md text-white text-base" type="password" placeholder="••••••••" required />

                                                            <button onClick={() => showPassword("password", "passwordShow", "passwordHide")} type="button" className="absolute inset-y-0 right-4 flex items-center text-white text-sm focus:outline-none cursor-pointer">
                                                                <span className="hidden" id="passwordShow"><FontAwesomeIcon icon={faEye} /></span>
                                                                <span className="flex" id="passwordHide"><FontAwesomeIcon icon={faEyeSlash} /></span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white flex flex-row-reverse pt-2 pb-6 px-6 gap-2.5">
                                            <button onClick={() => setShowFPModal(false)} type="button" className="inline-flex justify-center rounded-md bg-red-400 px-3 py-1 text-lg font-semibold text-black shadow-xs ring-1 ring-red-400 ring-inset w-auto cursor-pointer">Cancel</button>
                                            <button onClick={() => registerAsSeller(setLoading, setShowFPModal)} type="button" className="inline-flex justify-center rounded-md bg-blur px-3 py-1 text-lg font-semibold text-black shadow-xs ring-1 ring-black ring-inset w-auto cursor-pointer">Register as Seller</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div className="relative h-72 w-full flex items-center justify-center rounded-md overflow-hidden filter blur-xl">
                    <div className="absolute ml-64 mb-24 h-72 w-72 bg-cus-dark-purple rounded-full mix-blend-multiply opacity-80 animate-scale-14s animate-translate-1"></div>
                    <div className="absolute ml-48 mt-24 h-72 w-72 bg-cus-light-pink-high rounded-full mix-blend-multiply opacity-80 animate-scale-10s animate-translate-3"></div>
                    <div className="absolute h-72 w-72 bg-cus-light-orange rounded-full mix-blend-multiply opacity-80 animate-scale-7s animate-translate-5"></div>
                    <div className="absolute mr-48 mb-24 h-72 w-72 bg-cus-light-yellow-high rounded-full mix-blend-multiply opacity-80 animate-scale-14s animate-translate-2"></div>
                    <div className="absolute mr-64 mt-24 h-72 w-72 bg-cus-dark-pink rounded-full mix-blend-multiply opacity-80 animate-scale-10s animate-translate-4"></div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center h-full w-full -translate-y-1/2 relative gap-2 sm:gap-0">
                    <div className="flex flex-row h-fit w-full sm:w-auto">
                        <input type="text" className="bg-cus-black-low px-5 h-16 w-full sm:w-[400px] rounded-tl-lg rounded-bl-lg outline-none text-sm md:text-lg lg:text-2xl text-white" placeholder="What service are you looking for today?" />

                        <div className="-ml-0.5 bg-cus-black-low px-4 h-16 flex items-center justify-center rounded-tr-lg rounded-br-lg">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-base md:text-lg lg:text-2xl text-white cursor-pointer" />
                        </div>
                    </div>

                    <div className="flex items-center justify-center h-16 w-full sm:w-auto sm:ml-2.5">
                        <SecondaryButton href="/advancedSearch" containerClass="w-full sm:w-fit h-full bg-cus-black-low text-white" name="Advanced" />
                    </div>
                </div>


                <div className="mt-10">
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-0.5">
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

                    <div ref={scrollRef} className="flex gap-5 sm:gap-8 mt-6 overflow-x-auto hide-scrollbar px-0.5 py-4">

                        <div className="bg-cus-white-transparent flex flex-col rounded-md shadow-sm border border-gray-200 h-96 w-64 sm:w-80 flex-shrink-0 group">
                            <div className="h-48 w-full rounded-tl-md rounded-tr-md p-4 transform transition-transform duration-300 ease-in-out group-hover:scale-105">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md overflow-hidden">
                                    <div className="absolute top-4 -right-10 flex flex-col justify-center items-center gap-2.5 transition-all duration-300 ease-in-out group-hover:top-4 group-hover:right-4">
                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faHeart} className="text-xl text-cus-light-pink-high" />
                                        </div>

                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faRetweet} className="text-xl text-black" />
                                        </div>
                                    </div>
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
                                    <p className="text-base text-black line-clamp-2">develop custom web applications business e commerce and landing pages</p>
                                </div>

                                <div className="flex items-center justify-start mt-2">
                                    <p className="text-lg text-black font-semibold"><FontAwesomeIcon icon={faStar} className="text-base mr-2" />4.9</p>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-xl text-black font-semibold tracking-wider">From $80</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cus-white-transparent flex flex-col rounded-md shadow-sm border border-gray-200 h-96 w-64 sm:w-80 flex-shrink-0 group">
                            <div className="h-48 w-full rounded-tl-md rounded-tr-md p-4 transform transition-transform duration-300 ease-in-out group-hover:scale-105">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md overflow-hidden">
                                    <div className="absolute top-4 -right-10 flex flex-col justify-center items-center gap-2.5 transition-all duration-300 ease-in-out group-hover:top-4 group-hover:right-4">
                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faHeart} className="text-xl text-cus-light-pink-high" />
                                        </div>

                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faRetweet} className="text-xl text-black" />
                                        </div>
                                    </div>
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
                                    <p className="text-base text-black line-clamp-2">develop custom web applications business e commerce and landing pages</p>
                                </div>

                                <div className="flex items-center justify-start mt-2">
                                    <p className="text-lg text-black font-semibold"><FontAwesomeIcon icon={faStar} className="text-base mr-2" />4.9</p>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-xl text-black font-semibold tracking-wider">From $80</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cus-white-transparent flex flex-col rounded-md shadow-sm border border-gray-200 h-96 w-64 sm:w-80 flex-shrink-0 group">
                            <div className="h-48 w-full rounded-tl-md rounded-tr-md p-4 transform transition-transform duration-300 ease-in-out group-hover:scale-105">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md overflow-hidden">
                                    <div className="absolute top-4 -right-10 flex flex-col justify-center items-center gap-2.5 transition-all duration-300 ease-in-out group-hover:top-4 group-hover:right-4">
                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faHeart} className="text-xl text-cus-light-pink-high" />
                                        </div>

                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faRetweet} className="text-xl text-black" />
                                        </div>
                                    </div>
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
                                    <p className="text-base text-black line-clamp-2">develop custom web applications business e commerce and landing pages</p>
                                </div>

                                <div className="flex items-center justify-start mt-2">
                                    <p className="text-lg text-black font-semibold"><FontAwesomeIcon icon={faStar} className="text-base mr-2" />4.9</p>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-xl text-black font-semibold tracking-wider">From $80</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cus-white-transparent flex flex-col rounded-md shadow-sm border border-gray-200 h-96 w-64 sm:w-80 flex-shrink-0 group">
                            <div className="h-48 w-full rounded-tl-md rounded-tr-md p-4 transform transition-transform duration-300 ease-in-out group-hover:scale-105">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md overflow-hidden">
                                    <div className="absolute top-4 -right-10 flex flex-col justify-center items-center gap-2.5 transition-all duration-300 ease-in-out group-hover:top-4 group-hover:right-4">
                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faHeart} className="text-xl text-cus-light-pink-high" />
                                        </div>

                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faRetweet} className="text-xl text-black" />
                                        </div>
                                    </div>
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
                                    <p className="text-base text-black line-clamp-2">develop custom web applications business e commerce and landing pages</p>
                                </div>

                                <div className="flex items-center justify-start mt-2">
                                    <p className="text-lg text-black font-semibold"><FontAwesomeIcon icon={faStar} className="text-base mr-2" />4.9</p>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-xl text-black font-semibold tracking-wider">From $80</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cus-white-transparent flex flex-col rounded-md shadow-sm border border-gray-200 h-96 w-64 sm:w-80 flex-shrink-0 group">
                            <div className="h-48 w-full rounded-tl-md rounded-tr-md p-4 transform transition-transform duration-300 ease-in-out group-hover:scale-105">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md overflow-hidden">
                                    <div className="absolute top-4 -right-10 flex flex-col justify-center items-center gap-2.5 transition-all duration-300 ease-in-out group-hover:top-4 group-hover:right-4">
                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faHeart} className="text-xl text-cus-light-pink-high" />
                                        </div>

                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faRetweet} className="text-xl text-black" />
                                        </div>
                                    </div>
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
                                    <p className="text-base text-black line-clamp-2">develop custom web applications business e commerce and landing pages</p>
                                </div>

                                <div className="flex items-center justify-start mt-2">
                                    <p className="text-lg text-black font-semibold"><FontAwesomeIcon icon={faStar} className="text-base mr-2" />4.9</p>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-xl text-black font-semibold tracking-wider">From $80</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cus-white-transparent flex flex-col rounded-md shadow-sm border border-gray-200 h-96 w-64 sm:w-80 flex-shrink-0 group">
                            <div className="h-48 w-full rounded-tl-md rounded-tr-md p-4 transform transition-transform duration-300 ease-in-out group-hover:scale-105">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md overflow-hidden">
                                    <div className="absolute top-4 -right-10 flex flex-col justify-center items-center gap-2.5 transition-all duration-300 ease-in-out group-hover:top-4 group-hover:right-4">
                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faHeart} className="text-xl text-cus-light-pink-high" />
                                        </div>

                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faRetweet} className="text-xl text-black" />
                                        </div>
                                    </div>
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
                                    <p className="text-base text-black line-clamp-2">develop custom web applications business e commerce and landing pages</p>
                                </div>

                                <div className="flex items-center justify-start mt-2">
                                    <p className="text-lg text-black font-semibold"><FontAwesomeIcon icon={faStar} className="text-base mr-2" />4.9</p>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-xl text-black font-semibold tracking-wider">From $80</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cus-white-transparent flex flex-col rounded-md shadow-sm border border-gray-200 h-96 w-64 sm:w-80 flex-shrink-0 group">
                            <div className="h-48 w-full rounded-tl-md rounded-tr-md p-4 transform transition-transform duration-300 ease-in-out group-hover:scale-105">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md overflow-hidden">
                                    <div className="absolute top-4 -right-10 flex flex-col justify-center items-center gap-2.5 transition-all duration-300 ease-in-out group-hover:top-4 group-hover:right-4">
                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faHeart} className="text-xl text-cus-light-pink-high" />
                                        </div>

                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faRetweet} className="text-xl text-black" />
                                        </div>
                                    </div>
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
                                    <p className="text-base text-black line-clamp-2">develop custom web applications business e commerce and landing pages</p>
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

                <div className="mt-10 relative h-full w-full grid grid-cols-12 sm:gap-3.5">
                    <div className="col-span-12 sm:col-span-6 lg:col-span-3 h-full sm:h-fit sm:top-6 sm:sticky flex flex-col justify-start items-start p-0.5 gap-12">
                        <div className="h-auto w-full flex flex-col justify-center items-start border border-gray-200 rounded-md shadow-sm px-6 py-4">
                            <h2 className="text-2xl font-londrinasolid tracking-wide">Categories</h2>

                            <div className="mt-5 h-auto w-full flex flex-col justify-center items-center gap-4 opacity-65">
                                {paths.map(({ id, title, icon }) => (
                                    <div key={id} className="h-auto w-full flex flex-col justify-center items-center gap-1.5 transition-all duration-300 ease-in-out">
                                        <div className="h-auto w-full flex flex-row justify-between items-center">
                                            <p>{title}</p>
                                            <FontAwesomeIcon onClick={() => toggleSubMenu(id)} icon={openSubMenus[id] ? faMinus : faPlus} className="cursor-pointer transform transition-transform duration-300" />
                                        </div>
                                        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openSubMenus[id] ? "max-h-44 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"} w-full flex flex-col justify-center items-start`}>
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

                        <div className="h-auto w-full flex flex-col justify-center items-start border border-gray-200 rounded-md shadow-sm px-6 py-4">
                            <h2 className="text-2xl font-londrinasolid tracking-wide">Best Sellers</h2>

                            <div className="mt-5 h-auto w-full flex flex-col justify-center items-center gap-4">
                                <div className="h-auto w-full flex flex-row justify-start items-center border-b border-b-gray-200 py-4 gap-4">
                                    <div className="h-16 w-16 flex flex-shrink-0 justify-center items-center rounded-lg border-2 border-black p-0.5">
                                        <div className="h-full w-full bg-cus-light-yellow-high rounded-lg"></div>
                                    </div>

                                    <div className="h-16 w-full flex flex-col justify-start items-start overflow-hidden">
                                        <p className="text-left font-semibold">Ben Stokes</p>
                                        <p className="text-left text-sm line-clamp-2">Hi there! I am Ben Stokes. I design responsive and user-friendly websites and applications. My expertise includes web development using HTML, CSS, JavaScript, and PHP, as well as UI and UX design for both web and mobile platforms. I build everything from personal websites to complex e-commerce platforms. I also provide database management services, develop desktop software applications using Java and design logos and icons for your brand. Let's bring your digital vision to life with a professional, modern touch.</p>
                                    </div>
                                </div>

                                <div className="h-auto w-full flex flex-row justify-start items-center border-b border-b-gray-200 py-4 gap-4">
                                    <div className="h-16 w-16 flex flex-shrink-0 justify-center items-center rounded-lg border-2 border-black p-0.5">
                                        <div className="h-full w-full bg-cus-light-yellow-high rounded-lg"></div>
                                    </div>

                                    <div className="h-16 w-full flex flex-col justify-start items-start overflow-hidden">
                                        <p className="text-left font-semibold">Ben Stokes</p>
                                        <p className="text-left text-sm line-clamp-2">Hi there! I am Ben Stokes. I design responsive and user-friendly websites and applications. My expertise includes web development using HTML, CSS, JavaScript, and PHP, as well as UI and UX design for both web and mobile platforms. I build everything from personal websites to complex e-commerce platforms. I also provide database management services, develop desktop software applications using Java and design logos and icons for your brand. Let's bring your digital vision to life with a professional, modern touch.</p>
                                    </div>
                                </div>

                                <div className="h-auto w-full flex flex-row justify-start items-center border-b border-b-gray-200 py-4 gap-4">
                                    <div className="h-16 w-16 flex flex-shrink-0 justify-center items-center rounded-lg border-2 border-black p-0.5">
                                        <div className="h-full w-full bg-cus-light-yellow-high rounded-lg"></div>
                                    </div>

                                    <div className="h-16 w-full flex flex-col justify-start items-start overflow-hidden">
                                        <p className="text-left font-semibold">Ben Stokes</p>
                                        <p className="text-left text-sm line-clamp-2">Hi there! I am Ben Stokes. I design responsive and user-friendly websites and applications. My expertise includes web development using HTML, CSS, JavaScript, and PHP, as well as UI and UX design for both web and mobile platforms. I build everything from personal websites to complex e-commerce platforms. I also provide database management services, develop desktop software applications using Java and design logos and icons for your brand. Let's bring your digital vision to life with a professional, modern touch.</p>
                                    </div>
                                </div>

                                <div className="h-auto w-full flex flex-row justify-start items-center border-b border-b-gray-200 py-4 gap-4">
                                    <div className="h-16 w-16 flex flex-shrink-0 justify-center items-center rounded-lg border-2 border-black p-0.5">
                                        <div className="h-full w-full bg-cus-light-yellow-high rounded-lg"></div>
                                    </div>

                                    <div className="h-16 w-full flex flex-col justify-start items-start overflow-hidden">
                                        <p className="text-left font-semibold">Ben Stokes</p>
                                        <p className="text-left text-sm line-clamp-2">Hi there! I am Ben Stokes. I design responsive and user-friendly websites and applications. My expertise includes web development using HTML, CSS, JavaScript, and PHP, as well as UI and UX design for both web and mobile platforms. I build everything from personal websites to complex e-commerce platforms. I also provide database management services, develop desktop software applications using Java and design logos and icons for your brand. Let's bring your digital vision to life with a professional, modern touch.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 sm:mt-0 col-span-12 sm:col-span-6 lg:col-span-9 flex flex-wrap justify-center items-start gap-5 pr-0.5 pl-2.5 py-0.5">

                        <div className="bg-cus-white-transparent flex flex-col rounded-md shadow-sm border border-gray-200 h-96 w-full sm:w-72 flex-shrink-0 group">
                            <div className="h-48 w-full rounded-tl-md rounded-tr-md p-4 transform transition-transform duration-300 ease-in-out group-hover:scale-105">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md overflow-hidden">
                                    <div className="absolute top-4 -right-10 flex flex-col justify-center items-center gap-2.5 transition-all duration-300 ease-in-out group-hover:top-4 group-hover:right-4">
                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faHeart} className="text-xl text-cus-light-pink-high" />
                                        </div>

                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faRetweet} className="text-xl text-black" />
                                        </div>
                                    </div>
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
                                    <p className="text-base text-black line-clamp-2">develop custom web applications business e commerce and landing pages</p>
                                </div>

                                <div className="flex items-center justify-start mt-2">
                                    <p className="text-lg text-black font-semibold"><FontAwesomeIcon icon={faStar} className="text-base mr-2" />4.9</p>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-xl text-black font-semibold tracking-wider">From $80</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cus-white-transparent flex flex-col rounded-md shadow-sm border border-gray-200 h-96 w-full sm:w-72 flex-shrink-0 group">
                            <div className="h-48 w-full rounded-tl-md rounded-tr-md p-4 transform transition-transform duration-300 ease-in-out group-hover:scale-105">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md overflow-hidden">
                                    <div className="absolute top-4 -right-10 flex flex-col justify-center items-center gap-2.5 transition-all duration-300 ease-in-out group-hover:top-4 group-hover:right-4">
                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faHeart} className="text-xl text-cus-light-pink-high" />
                                        </div>

                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faRetweet} className="text-xl text-black" />
                                        </div>
                                    </div>
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
                                    <p className="text-base text-black line-clamp-2">develop custom web applications business e commerce and landing pages</p>
                                </div>

                                <div className="flex items-center justify-start mt-2">
                                    <p className="text-lg text-black font-semibold"><FontAwesomeIcon icon={faStar} className="text-base mr-2" />4.9</p>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-xl text-black font-semibold tracking-wider">From $80</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cus-white-transparent flex flex-col rounded-md shadow-sm border border-gray-200 h-96 w-full sm:w-72 flex-shrink-0 group">
                            <div className="h-48 w-full rounded-tl-md rounded-tr-md p-4 transform transition-transform duration-300 ease-in-out group-hover:scale-105">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md overflow-hidden">
                                    <div className="absolute top-4 -right-10 flex flex-col justify-center items-center gap-2.5 transition-all duration-300 ease-in-out group-hover:top-4 group-hover:right-4">
                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faHeart} className="text-xl text-cus-light-pink-high" />
                                        </div>

                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faRetweet} className="text-xl text-black" />
                                        </div>
                                    </div>
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
                                    <p className="text-base text-black line-clamp-2">develop custom web applications business e commerce and landing pages</p>
                                </div>

                                <div className="flex items-center justify-start mt-2">
                                    <p className="text-lg text-black font-semibold"><FontAwesomeIcon icon={faStar} className="text-base mr-2" />4.9</p>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-xl text-black font-semibold tracking-wider">From $80</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cus-white-transparent flex flex-col rounded-md shadow-sm border border-gray-200 h-96 w-full sm:w-72 flex-shrink-0 group">
                            <div className="h-48 w-full rounded-tl-md rounded-tr-md p-4 transform transition-transform duration-300 ease-in-out group-hover:scale-105">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md overflow-hidden">
                                    <div className="absolute top-4 -right-10 flex flex-col justify-center items-center gap-2.5 transition-all duration-300 ease-in-out group-hover:top-4 group-hover:right-4">
                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faHeart} className="text-xl text-cus-light-pink-high" />
                                        </div>

                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faRetweet} className="text-xl text-black" />
                                        </div>
                                    </div>
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
                                    <p className="text-base text-black line-clamp-2">develop custom web applications business e commerce and landing pages</p>
                                </div>

                                <div className="flex items-center justify-start mt-2">
                                    <p className="text-lg text-black font-semibold"><FontAwesomeIcon icon={faStar} className="text-base mr-2" />4.9</p>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-xl text-black font-semibold tracking-wider">From $80</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cus-white-transparent flex flex-col rounded-md shadow-sm border border-gray-200 h-96 w-full sm:w-72 flex-shrink-0 group">
                            <div className="h-48 w-full rounded-tl-md rounded-tr-md p-4 transform transition-transform duration-300 ease-in-out group-hover:scale-105">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md overflow-hidden">
                                    <div className="absolute top-4 -right-10 flex flex-col justify-center items-center gap-2.5 transition-all duration-300 ease-in-out group-hover:top-4 group-hover:right-4">
                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faHeart} className="text-xl text-cus-light-pink-high" />
                                        </div>

                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faRetweet} className="text-xl text-black" />
                                        </div>
                                    </div>
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
                                    <p className="text-base text-black line-clamp-2">develop custom web applications business e commerce and landing pages</p>
                                </div>

                                <div className="flex items-center justify-start mt-2">
                                    <p className="text-lg text-black font-semibold"><FontAwesomeIcon icon={faStar} className="text-base mr-2" />4.9</p>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-xl text-black font-semibold tracking-wider">From $80</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cus-white-transparent flex flex-col rounded-md shadow-sm border border-gray-200 h-96 w-full sm:w-72 flex-shrink-0 group">
                            <div className="h-48 w-full rounded-tl-md rounded-tr-md p-4 transform transition-transform duration-300 ease-in-out group-hover:scale-105">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md overflow-hidden">
                                    <div className="absolute top-4 -right-10 flex flex-col justify-center items-center gap-2.5 transition-all duration-300 ease-in-out group-hover:top-4 group-hover:right-4">
                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faHeart} className="text-xl text-cus-light-pink-high" />
                                        </div>

                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faRetweet} className="text-xl text-black" />
                                        </div>
                                    </div>
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
                                    <p className="text-base text-black line-clamp-2">develop custom web applications business e commerce and landing pages</p>
                                </div>

                                <div className="flex items-center justify-start mt-2">
                                    <p className="text-lg text-black font-semibold"><FontAwesomeIcon icon={faStar} className="text-base mr-2" />4.9</p>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-xl text-black font-semibold tracking-wider">From $80</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cus-white-transparent flex flex-col rounded-md shadow-sm border border-gray-200 h-96 w-full sm:w-72 flex-shrink-0 group">
                            <div className="h-48 w-full rounded-tl-md rounded-tr-md p-4 transform transition-transform duration-300 ease-in-out group-hover:scale-105">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md overflow-hidden">
                                    <div className="absolute top-4 -right-10 flex flex-col justify-center items-center gap-2.5 transition-all duration-300 ease-in-out group-hover:top-4 group-hover:right-4">
                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faHeart} className="text-xl text-cus-light-pink-high" />
                                        </div>

                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faRetweet} className="text-xl text-black" />
                                        </div>
                                    </div>
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
                                    <p className="text-base text-black line-clamp-2">develop custom web applications business e commerce and landing pages</p>
                                </div>

                                <div className="flex items-center justify-start mt-2">
                                    <p className="text-lg text-black font-semibold"><FontAwesomeIcon icon={faStar} className="text-base mr-2" />4.9</p>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-xl text-black font-semibold tracking-wider">From $80</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cus-white-transparent flex flex-col rounded-md shadow-sm border border-gray-200 h-96 w-full sm:w-72 flex-shrink-0 group">
                            <div className="h-48 w-full rounded-tl-md rounded-tr-md p-4 transform transition-transform duration-300 ease-in-out group-hover:scale-105">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md overflow-hidden">
                                    <div className="absolute top-4 -right-10 flex flex-col justify-center items-center gap-2.5 transition-all duration-300 ease-in-out group-hover:top-4 group-hover:right-4">
                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faHeart} className="text-xl text-cus-light-pink-high" />
                                        </div>

                                        <div className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer">
                                            <FontAwesomeIcon icon={faRetweet} className="text-xl text-black" />
                                        </div>
                                    </div>
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
                                    <p className="text-base text-black line-clamp-2">develop custom web applications business e commerce and landing pages</p>
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

                <div className="mt-16 h-full w-full p-0.5">
                    <div className="mb-10 flex flex-col md:flex-row items-center justify-center md:justify-between">
                        <h2 className="text-black text-3xl text-center font-londrinasolid">Popular Gigs!</h2>

                        <div className="hidden md:flex flex-row items-center justify-center gap-2">
                            <div onClick={scrollLeft} className="bg-cus-black-low w-auto h-auto px-4 py-2.5 flex items-center justify-center rounded-md cursor-pointer">
                                <FontAwesomeIcon icon={faCircleLeft} className="text-white text-2xl font-bold" />
                            </div>
                            <div onClick={scrollRight} className="bg-cus-black-low w-auto h-auto px-4 py-2.5 flex items-center justify-center rounded-md cursor-pointer">
                                <FontAwesomeIcon icon={faCircleRight} className="text-white text-2xl font-bold" />
                            </div>
                        </div>
                    </div>

                    <div className="h-auto w-full grid grid-cols-12 border border-gray-200 rounded-md shadow-sm p-4 gap-6">
                        <div className="col-span-12 sm:col-span-6 h-44 sm:h-full bg-cus-light-yellow-high border border-gray-200 rounded-md">

                        </div>

                        <div className="col-span-12 sm:col-span-6 flex flex-col justify-start items-start gap-4">
                            <div className="flex flex-row justify-center items-start gap-4">
                                <div className="h-16 w-16 flex justify-center items-start border-2 border-black rounded-md p-0.5">
                                    <div className="h-full w-full bg-cus-light-yellow-high rounded-md">

                                    </div>
                                </div>

                                <div className="h-full w-auto flex flex-col justify-center items-start">
                                    <p className="text-lg font-semibold text-left">Ben Stokes</p>
                                    <p className="text-lg text-black font-semibold text-left"><FontAwesomeIcon icon={faStar} className="text-base mr-2" />4.9</p>
                                </div>
                            </div>

                            <p className="text-sm line-clamp-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odit nostrum iure amet quaerat eos illum reiciendis ipsam architecto facilis ex earum ut, nobis consequuntur numquam consequatur nulla, sed dicta?
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae consequatur, expedita repellendus vitae molestias excepturi magnam dicta. Laboriosam, deserunt. Expedita eligendi quisquam ducimus nemo aperiam nobis unde sint non quod.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam ducimus accusamus soluta quas assumenda est iusto a? Eius in aperiam maiores blanditiis delectus ullam fuga dolor saepe quisquam quia.
                            </p>

                            <p className="text-xl text-black font-semibold tracking-wider">From $80</p>

                            <Button name="Add to Cart" containerClass="mt-2" frontClasses="text-black h-10 w-full border-2 border-black" backClasses="h-10 w-full bg-cus-light-yellow-high" />
                        </div>
                    </div>
                </div>

                <h2 className="mt-16 text-black text-3xl font-londrinasolid text-center sm:text-left px-0.5">News</h2>

                <div className="mt-10 flex flex-wrap justify-center lg:justify-start items-center sm:gap-6 px-0.5">

                    <div className="h-auto w-full sm:w-72 flex flex-col justify-center items-center gap-2.5">
                        <div className="h-36 w-full bg-cus-light-yellow-high border border-gray-200 rounded-md">

                        </div>

                        <div className="h-auto w-full flex flex-col justify-center items-start gap-1.5">
                            <p className="mt-2 text-left line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam necessitatibus, quasi cum possimus, debitis pariatur sit ex, similique eum dignissimos delectus fugit a esse ullam sed itaque distinctio tempore officia.</p>
                            <p className="text-left text-sm opacity-75">Aug 12, 2025</p>
                        </div>
                    </div>

                    <div className="mt-12 sm:mt-0 h-auto w-full sm:w-72 flex flex-col justify-center items-center gap-2.5">
                        <div className="h-36 w-full bg-cus-light-yellow-high border border-gray-200 rounded-md">

                        </div>

                        <div className="h-auto w-full flex flex-col justify-center items-start gap-1.5">
                            <p className="mt-2 text-left line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam necessitatibus, quasi cum possimus, debitis pariatur sit ex, similique eum dignissimos delectus fugit a esse ullam sed itaque distinctio tempore officia.</p>
                            <p className="text-left text-sm opacity-75">Aug 12, 2025</p>
                        </div>
                    </div>

                    <div className="mt-12 sm:mt-0 h-auto w-full sm:w-72 flex flex-col justify-center items-center gap-2.5">
                        <div className="h-36 w-full bg-cus-light-yellow-high border border-gray-200 rounded-md">

                        </div>

                        <div className="h-auto w-full flex flex-col justify-center items-start gap-1.5">
                            <p className="mt-2 text-left line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam necessitatibus, quasi cum possimus, debitis pariatur sit ex, similique eum dignissimos delectus fugit a esse ullam sed itaque distinctio tempore officia.</p>
                            <p className="text-left text-sm opacity-75">Aug 12, 2025</p>
                        </div>
                    </div>

                    <div className="mt-12 sm:mt-0 h-auto w-full sm:w-72 flex flex-col justify-center items-center gap-2.5">
                        <div className="h-36 w-full bg-cus-light-yellow-high border border-gray-200 rounded-md">

                        </div>

                        <div className="h-auto w-full flex flex-col justify-center items-start gap-1.5">
                            <p className="mt-2 text-left line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam necessitatibus, quasi cum possimus, debitis pariatur sit ex, similique eum dignissimos delectus fugit a esse ullam sed itaque distinctio tempore officia.</p>
                            <p className="text-left text-sm opacity-75">Aug 12, 2025</p>
                        </div>
                    </div>

                    <div className="mt-12 sm:mt-0 h-auto w-full sm:w-72 flex flex-col justify-center items-center gap-2.5">
                        <div className="h-36 w-full bg-cus-light-yellow-high border border-gray-200 rounded-md">

                        </div>

                        <div className="h-auto w-full flex flex-col justify-center items-start gap-1.5">
                            <p className="mt-2 text-left line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam necessitatibus, quasi cum possimus, debitis pariatur sit ex, similique eum dignissimos delectus fugit a esse ullam sed itaque distinctio tempore officia.</p>
                            <p className="text-left text-sm opacity-75">Aug 12, 2025</p>
                        </div>
                    </div>

                    <div className="mt-12 sm:mt-0 h-auto w-full sm:w-72 flex flex-col justify-center items-center gap-2.5">
                        <div className="h-36 w-full bg-cus-light-yellow-high border border-gray-200 rounded-md">

                        </div>

                        <div className="h-auto w-full flex flex-col justify-center items-start gap-1.5">
                            <p className="mt-2 text-left line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam necessitatibus, quasi cum possimus, debitis pariatur sit ex, similique eum dignissimos delectus fugit a esse ullam sed itaque distinctio tempore officia.</p>
                            <p className="text-left text-sm opacity-75">Aug 12, 2025</p>
                        </div>
                    </div>

                    <div className="mt-12 sm:mt-0 h-auto w-full sm:w-72 flex flex-col justify-center items-center gap-2.5">
                        <div className="h-36 w-full bg-cus-light-yellow-high border border-gray-200 rounded-md">

                        </div>

                        <div className="h-auto w-full flex flex-col justify-center items-start gap-1.5">
                            <p className="mt-2 text-left line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam necessitatibus, quasi cum possimus, debitis pariatur sit ex, similique eum dignissimos delectus fugit a esse ullam sed itaque distinctio tempore officia.</p>
                            <p className="text-left text-sm opacity-75">Aug 12, 2025</p>
                        </div>
                    </div>

                </div>

                <FooterMain />

            </div>

        </section>
    )
}

export default Home;