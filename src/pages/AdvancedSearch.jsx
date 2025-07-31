import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SecondaryButton from "../components/SecondaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Pagination } from "@heroui/react";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { loadGigDropdowns, loadSubCategoryDropdownsData } from "../api/LoadGigDropdowns";
import { Slab } from "react-loading-indicators";
import { advancedSearch } from "../api/AdvancedSearch";
import emptyImg from "../assets/images/empty-img.svg";

const AdvancedSearch = () => {

    const [loading, setLoading] = useState(false);

    const [priceRange, setPriceRange] = useState([0, 1000]);

    useEffect(() => {
        (async () => {
            setLoading(true);

            try {
                await loadGigDropdowns(setLoading);
                await advancedSearch(setLoading, priceRange[0], priceRange[1]);
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

    return (
        <section className="bg-white custom2 relative">

            <div className={`fixed inset-0 h-screen w-full bg-transparent ${loading ? "flex" : "hidden"} items-center justify-center z-[9999]`}>
                <Slab color="#000000" size="large" text="" textColor="" />
            </div>

            <Navbar onShowModal={() => setShowFPModal(true)} onShowLoading={setLoading} loadingClass={`${loading ? "opacity-20 pointer-events-none" : ""}`} />

            <div className={`max-w-7xl mx-auto ${loading ? "opacity-20 pointer-events-none" : ""} h-full mt-24 bg-white p-5`}>
                <div className="flex items-center justify-start">
                    <div className="flex flex-wrap md:flex-row items-center justify-start md:justify-center">
                        <a href="/home" className="text-base text-blue-700 opacity-50 cursor-pointer">Home &nbsp;{">"}&nbsp;</a>
                        <a href="/advancedSearch" className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp; AdvancedSearch</a>
                    </div>
                </div>

                <div className="h-full w-full flex flex-col items-start justify-start bg-cus-black-low rounded-md shadow-md mt-12 p-2.5">
                    <div className="h-full w-full grid grid-cols-12">
                        <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-5 px-3 sm:px-5 pb-3">
                            <div className="flex flex-col w-full gap-1.5">
                                <label htmlFor="gigTitle" className="text-white text-sm">Gig Title</label>
                                <input id="gigTitle" name="gigTitle" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="Web Development" required />
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-3 px-3 sm:px-5 pb-3">
                            <div className="flex flex-col w-full gap-1.5">
                                <label htmlFor="category" className="text-white text-sm">Category</label>
                                <select onChange={loadSubCategoryDropdownsData} id="category" name="category" defaultValue="0" className="bg-blur h-10 w-full py-0.5 px-2.5 rounded-md text-white text-base appearance-none" required>
                                    <option className="text-black text-base" value="0">Select Category</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-5 px-3 sm:px-5 pb-3">
                            <div className="flex flex-col w-full gap-1.5">
                                <label htmlFor="subCategory" className="text-white text-sm">Sub Category</label>
                                <select id="subCategory" name="subCategory" defaultValue="0" className="bg-blur h-10 w-full py-0.5 px-2.5 rounded-md text-white text-base appearance-none opacity-50" required disabled>
                                    <option className="text-black text-base" value="0">Select Sub Category</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-5 px-3 sm:px-5 pb-3">
                            <div className="flex flex-col w-full gap-1.5">
                                <label htmlFor="price" className="text-white text-sm">Price Range</label>
                                <div className="bg-blur h-full md:h-10 w-full grid grid-cols-12 rounded-md items-center px-2.5 pt-4 pb-2 md:pt-0 md:pb-0 gap-3 md:gap-0">
                                    <RangeSlider
                                        min={0}
                                        max={1000}
                                        step={20}
                                        value={priceRange}
                                        onInput={setPriceRange}
                                        className="col-span-12 md:col-span-6 lg:col-span-8"
                                    />
                                    <div className="col-span-12 md:col-span-6 lg:col-span-4 flex items-center justify-between md:justify-end text-xs lg:text-sm text-white gap-4">
                                        <span>Min: ${priceRange[0]}</span>
                                        <span>Max: ${priceRange[1]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 flex items-center justify-center p-5 mt-4">
                            <SecondaryButton onClick={() => advancedSearch(setLoading, priceRange[0], priceRange[1])} containerClass="w-full md:w-1/3 bg-black text-white" name="Search" />
                        </div>
                    </div>

                    <hr className="h-0.5 w-full bg-white opacity-10" />

                    <div id="search-result-main" className="h-full w-full grid grid-cols-12 gap-5 sm:gap-12 mt-6 bg-transparent px-4 md:px-8 py-4">
                        <div id="search-gig" className="bg-white hidden flex-col rounded-md shadow-md h-full col-span-12 md:col-span-6 lg:col-span-4 flex-shrink-0">
                            <div className="h-44 w-full rounded-tl-md rounded-tr-md p-4">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md overflow-hidden">
                                    <img id="gig-image" className="h-full w-full object-cover" src={emptyImg} alt="gig-image" />
                                    <FontAwesomeIcon icon={faHeart} className="absolute top-4 right-4 text-2xl text-cus-light-pink-high" />
                                </div>
                            </div>

                            <div className="h-auto w-full flex flex-col p-4">
                                <div className="flex flex-row items-center justify-start gap-2.5">
                                    <div className="h-7 w-7 border-2 border-black rounded-full flex items-center justify-center p-0.5">
                                        <a className="h-full w-full rounded-full bg-cus-light-yellow-high"></a>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <a id="gig-seller-name" className="text-base text-black font-semibold">Ben Stokes</a>
                                    </div>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p id="gig-title" className="text-base text-black">develop custom web applications business e commerce and landing pages</p>
                                </div>

                                <div className="flex items-center justify-start mt-2">
                                    <p className="text-lg text-black font-semibold"><FontAwesomeIcon icon={faStar} className="text-base mr-2" />4.9</p>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-xl text-black font-semibold tracking-wider">From $<span id="gig-price">80</span></p>
                                </div>
                            </div>
                        </div>

                        <div id="not-found" className="hidden h-full col-span-12 items-center justify-center">
                            <p className="text-white text-center text-2xl font-londrinasolid tracking-wide">No Gigs Found!</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AdvancedSearch;