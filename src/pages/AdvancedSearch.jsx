import React, { useEffect } from "react";
import Navbar from "./Navbar";
import SecondaryButton from "../components/SecondaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Pagination } from "@heroui/react";

const AdvancedSearch = () => {

    useEffect(() => {
        document.body.classList.add("custom2");
        return () => document.body.classList.remove("custom2");
    }, []);

    return (
        <section className="bg-white custom2">

            <Navbar />

            <div className="max-w-7xl mx-auto h-full mt-24 bg-white p-5">
                <div className="flex items-center justify-start">
                    <div className="flex flex-wrap md:flex-row items-center justify-start md:justify-center">
                        <span className="text-base text-blue-700 opacity-50 cursor-pointer">Home &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp; AdvancedSearch</span>
                    </div>
                </div>

                <div className="h-full w-full flex flex-col items-center justify-center bg-cus-black-low rounded-md shadow-md mt-12 p-2.5">
                    <div className="h-full w-full grid grid-cols-12">
                        <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-5 px-3 sm:px-5 pb-3">
                            <div className="flex flex-col w-full gap-1.5">
                                <label htmlFor="gigName" className="text-white text-sm">Gig Name</label>
                                <input id="gigName" name="gigName" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="Web Development" required />
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-3 px-3 sm:px-5 pb-3">
                            <div className="flex flex-col w-full gap-1.5">
                                <label className="text-white text-sm">Category</label>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-5 px-3 sm:px-5 pb-3">
                            <div className="flex flex-col w-full gap-1.5">
                                <label htmlFor="pricef" className="text-white text-sm">Price From</label>
                                <input id="pricef" name="pricef" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="number" placeholder="50$" required />
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-5 px-3 sm:px-5 pb-3">
                            <div className="flex flex-col w-full gap-1.5">
                                <label htmlFor="pricet" className="text-white text-sm">Price To</label>
                                <input id="pricet" name="pricet" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="number" placeholder="1000$" required />
                            </div>
                        </div>

                        <div className="col-span-12 flex items-center justify-center p-5 mt-4">
                            <SecondaryButton containerClass="w-full md:w-1/3 bg-black text-white" name="Search" />
                        </div>
                    </div>

                    <hr className="h-0.5 w-full bg-white opacity-10" />

                    <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 mt-6 bg-transparent px-0.5 py-4">
                        <div className="bg-white flex flex-col rounded-md shadow-md h-96 w-64 sm:w-80 flex-shrink-0">
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

                        <div className="bg-white flex flex-col rounded-md shadow-md h-96 w-64 sm:w-80 flex-shrink-0">
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

                        <div className="bg-white flex flex-col rounded-md shadow-md h-96 w-64 sm:w-80 flex-shrink-0">
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

                        <div className="bg-white flex flex-col rounded-md shadow-md h-96 w-64 sm:w-80 flex-shrink-0">
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

                        <div className="bg-white flex flex-col rounded-md shadow-md h-96 w-64 sm:w-80 flex-shrink-0">
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

                    <Pagination className="bg-blur text-white rounded-md mt-4 mb-4 cursor-pointer" initialPage={1} total={10} color="success" variant="flat" radius="md" size="md" />
                </div>

            </div>

        </section>
    )
}

export default AdvancedSearch;