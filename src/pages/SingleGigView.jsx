import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes, faStar, faLeftLong, faRightLong, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { loadSingleGigData } from "../api/LoadSingleGigData";
import { Slab } from "react-loading-indicators";
import { showPassword, setHideBtnIcon } from "../api/ShowPassword";

const SingleGigView = () => {

    const [loading, setLoading] = useState(false);

    const [showFPModal, setShowFPModal] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);

            try {
                await loadSingleGigData(setLoading);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

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

    return (
        <section className="bg-white custom2 relative">
            <div className={`fixed inset-0 h-screen w-full bg-transparent ${loading ? "flex" : "hidden"} items-center justify-center z-[9999]`}>
                <Slab color="#000000" size="large" text="" textColor="" />
            </div>

            <nav className={`fixed ${loading ? "opacity-20 pointer-events-none" : ""} top-0 left-0 right-0 z-50`}>
                <Navbar onShowModal={() => setShowFPModal(true)} onShowLoading={setLoading} />
            </nav>

            <div className={`max-w-7xl mx-auto ${loading ? "opacity-20 pointer-events-none" : ""} h-full mt-24 bg-white p-5`}>

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

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
                    <div className="flex flex-wrap md:flex-row items-center justify-start md:justify-center">
                        <span className="text-base text-blue-700 opacity-50 cursor-pointer">Home &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-50 cursor-pointer">&nbsp; SingleGigView &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp; Programming & Tech &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp; Web Development</span>
                    </div>

                    <div className="flex items-center justify-start md:justify-center">
                        <FontAwesomeIcon icon={faShareNodes} className="text-base font-semibold text-blue-700 hover:-rotate-12 transition-all duration-300 ease-in-out" />
                    </div>
                </div>

                <div className="grid grid-cols-12 items-start mt-8 h-full relative">
                    <div className="col-span-12 lg:col-span-7 h-full flex flex-col justify-center p-0.5 lg:py-0 lg:pl-0 lg:pr-5">
                        <p id="gig-title" className="text-3xl text-black text-left">develop custom web applications business e commerce and landing pages</p>

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
                            <div className="absolute left-0 items-center justify-start ml-3">
                                <div className="h-full w-full bg-white flex items-center justify-center rounded-full p-2 cursor-pointer">
                                    <FontAwesomeIcon icon={faLeftLong} className="text-black text-lg" />
                                </div>
                            </div>

                            <div className="w-full h-96 bg-amber-400 rounded-md">

                            </div>

                            <div className="absolute right-0 items-center justify-end mr-3">
                                <div className="h-full w-full bg-white flex items-center justify-center rounded-full p-2 cursor-pointer">
                                    <FontAwesomeIcon icon={faRightLong} className="text-black text-lg" />
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full h-full mt-2.5">
                            <div onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 ml-3">
                                <div className="h-full w-full bg-cus-black-low flex items-center justify-center rounded-lg p-2 cursor-pointer">
                                    <FontAwesomeIcon icon={faLeftLong} className="text-white text-lg" />
                                </div>
                            </div>

                            <div ref={scrollRef} className="w-full overflow-x-auto hide-scrollbar flex items-center gap-1.5">
                                <div className="h-24 w-36 bg-cus-light-orange rounded-md flex-shrink-0">

                                </div>

                                <div className="h-24 w-36 bg-cus-light-orange rounded-md flex-shrink-0">

                                </div>

                                <div className="h-24 w-36 bg-cus-light-orange rounded-md flex-shrink-0">

                                </div>

                                <div className="h-24 w-36 bg-cus-light-orange rounded-md flex-shrink-0">

                                </div>

                                <div className="h-24 w-36 bg-cus-light-orange rounded-md flex-shrink-0">

                                </div>

                                <div className="h-24 w-36 bg-cus-light-orange rounded-md flex-shrink-0">

                                </div>
                            </div>

                            <div onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 mr-3">
                                <div className="h-full w-full bg-cus-black-low flex items-center justify-center rounded-lg p-2 cursor-pointer">
                                    <FontAwesomeIcon icon={faRightLong} className="text-white text-lg" />
                                </div>
                            </div>
                        </div>

                        <p className="text-3xl text-black text-left mt-10">Reviews</p>

                        <div className="h-full w-full flex flex-col p-2.5 border border-black rounded-md mt-4">
                            <div className="flex flex-row items-center justify-start gap-3.5">
                                <div className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-black p-0.5">
                                    <a className="h-full w-full rounded-full bg-cus-light-yellow-high"></a>
                                </div>

                                <div className="flex flex-col justify-start">
                                    <p className="text-md text-black font-semibold text-left">Ben Stokes</p>
                                    <p className="text-md text-black font-semibold text-left"><FontAwesomeIcon icon={faStar} className="text-md mr-2" />4.9</p>
                                </div>
                            </div>

                            <p className="mt-3.5 text-black">SMCSE was wonderful to work with! They understood my business needs and expectations and went above and beyond with their deliverables. I will hire them again</p>
                        </div>

                        <p className="text-3xl text-black text-left mt-10">About this Gig</p>

                        <div className="h-full w-full mt-4">
                            <div className="relative overflow-x-auto cusxscroll">

                                <table className="h-full w-full border-separate border-spacing-y-1">
                                    <caption className="p-5 bg-cus-black-low rounded-md">
                                        <h2 className="text-3xl text-white text-left">Our products</h2>
                                        <p className="text-sm text-white text-left mt-2">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
                                    </caption>

                                    <thead className="bg-gray-500">
                                        <tr>
                                            <th className="px-6 py-3 text-black text-lg font-semibold text-left rounded-tl-md rounded-bl-md">
                                                Package
                                            </th>
                                            <th className="px-6 py-3 text-black text-lg font-semibold text-left">
                                                Bronze
                                            </th>
                                            <th className="px-6 py-3 text-black text-lg font-semibold text-left">
                                                Silver
                                            </th>
                                            <th className="px-6 py-3 text-black text-lg font-semibold text-left rounded-tr-md rounded-br-md">
                                                Gold
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr className="bg-cus-black-low border-b border-gray-500">
                                            <th className="px-6 py-4 text-white text-base text-left rounded-tl-md rounded-bl-md">
                                                Apple MacBook Pro 17
                                            </th>
                                            <td className="px-6 py-4 text-white text-base text-left">
                                                Silver
                                            </td>
                                            <td className="px-6 py-4 text-white text-base text-left">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4 text-white text-base text-left rounded-tr-md rounded-br-md">
                                                $2999
                                            </td>
                                        </tr>
                                        <tr className="bg-cus-black-low border-b border-gray-500">
                                            <th className="px-6 py-4 text-white text-base text-left rounded-tl-md rounded-bl-md">
                                                Apple MacBook Pro 17
                                            </th>
                                            <td className="px-6 py-4 text-white text-base text-left">
                                                Silver
                                            </td>
                                            <td className="px-6 py-4 text-white text-base text-left">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4 text-white text-base text-left rounded-tr-md rounded-br-md">
                                                $2999
                                            </td>
                                        </tr>
                                        <tr className="bg-cus-black-low border-b border-gray-500">
                                            <th className="px-6 py-4 text-white text-base text-left rounded-tl-md rounded-bl-md">
                                                Apple MacBook Pro 17
                                            </th>
                                            <td className="px-6 py-4 text-white text-base text-left">
                                                Silver
                                            </td>
                                            <td className="px-6 py-4 text-white text-base text-left">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4 text-white text-base text-left rounded-tr-md rounded-br-md">
                                                $2999
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                    <div className="mt-16 lg:mt-0 col-span-12 lg:col-span-5 lg:sticky lg:top-6 h-fit w-full flex items-start justify-center px-0.5 sm:px-5">
                        {/* <TabsComponent /> */}
                    </div>
                </div>

            </div>

        </section>
    )
}

export default SingleGigView;