import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SecondaryButton from "../components/SecondaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faRetweet, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { loadGigDropdowns, loadSubCategoryDropdownsData } from "../api/LoadGigDropdowns";
import { Slab } from "react-loading-indicators";
import { advancedSearch, clear } from "../api/AdvancedSearch";
import emptyImg from "../assets/images/empty-img.svg";
import Pagination from '@mui/material/Pagination';
import { showPassword, setHideBtnIcon } from "../api/ShowPassword";
import { registerAsSeller } from "../api/RegisterAsSeller";
import FooterMain from "./Footer";

const AdvancedSearch = () => {

    const [loading, setLoading] = useState(false);

    const [showFPModal, setShowFPModal] = useState(false);

    const [priceRange, setPriceRange] = useState([0, 1000]);

    const [currentPage, setCurrentPage] = useState(1);

    const [totalPages, setTotalPages] = useState(1);

    const gigsPerPage = 6;

    const fetchGigs = (page) => {
        const firstResult = (page - 1) * gigsPerPage;
        advancedSearch(setLoading, priceRange[0], priceRange[1], firstResult, gigsPerPage, setTotalPages);
    };

    useEffect(() => {
        fetchGigs(currentPage);
    }, [currentPage]);

    useEffect(() => {
        (async () => {
            setLoading(true);

            try {
                await loadGigDropdowns(setLoading);
                await advancedSearch(setLoading, priceRange[0], priceRange[1], 0, gigsPerPage, setTotalPages);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const handleSearch = () => {
        setCurrentPage(1);
        fetchGigs(1);
    };

    const handleClear = () => {
        clear(setPriceRange);
        setCurrentPage(1);
    };

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

                <div className="flex items-center justify-start">
                    <div className="flex flex-wrap md:flex-row items-center justify-start md:justify-center">
                        <a href="/home" className="text-base text-blue-700 opacity-50 cursor-pointer">Home &nbsp;{">"}&nbsp;</a>
                        <a href="/advancedSearch" className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp; AdvancedSearch</a>
                    </div>
                </div>

                <div className="h-full w-full flex flex-col items-start justify-start bg-cus-black-low rounded-md shadow-md mt-12 p-2.5">
                    <div className="h-full w-full grid grid-cols-12">
                        <div className="col-span-12 flex items-center justify-center pt-5 px-3 sm:px-5 pb-3">
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

                        <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-3 px-3 sm:px-5 pb-3">
                            <div className="flex flex-col w-full gap-1.5">
                                <label htmlFor="subCategory" className="text-white text-sm">Sub Category</label>
                                <select id="subCategory" name="subCategory" defaultValue="0" className="bg-blur h-10 w-full py-0.5 px-2.5 rounded-md text-white text-base appearance-none opacity-50" required disabled>
                                    <option className="text-black text-base" value="0">Select Sub Category</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-3 px-3 sm:px-5 pb-3">
                            <div className="flex flex-col w-full gap-1.5">
                                <label htmlFor="sortBy" className="text-white text-sm">Sort By</label>
                                <select id="sortBy" name="sortBy" defaultValue="0" className="bg-blur h-10 w-full py-0.5 px-2.5 rounded-md text-white text-base appearance-none" required>
                                    <option className="text-black text-base" value="0">Select Sort Option</option>
                                    <option className="text-black text-base" value="1">Price Low to High</option>
                                    <option className="text-black text-base" value="2">Price High to Low</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-6 flex items-center justify-center pt-3 px-3 sm:px-5 pb-3">
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

                        <div className="col-span-12 md:col-span-6 flex items-center justify-center p-5 mt-4">
                            <SecondaryButton onClick={handleClear} containerClass="w-full bg-white text-black" name="Clear" />
                        </div>

                        <div className="col-span-12 md:col-span-6 flex items-center justify-center p-5 mt-0 md:mt-4">
                            <SecondaryButton onClick={handleSearch} containerClass="w-full bg-black text-white" name="Search" />
                        </div>
                    </div>

                    <hr className="h-0.5 w-full bg-white opacity-10" />

                    <div id="search-result-main" className="h-full w-full grid grid-cols-12 gap-5 sm:gap-12 mt-6 bg-transparent px-4 md:px-8 py-4">
                        <div id="search-gig" className="bg-white hidden flex-col rounded-md shadow-md border border-gray-200 h-full col-span-12 md:col-span-6 lg:col-span-4 flex-shrink-0 group cursor-pointer">
                            <div className="h-48 w-full rounded-tl-md rounded-tr-md p-4 transform transition-transform duration-300 ease-in-out group-hover:scale-105">
                                <div className="relative h-full w-full bg-cus-light-yellow-high rounded-md shadow-md overflow-hidden">
                                    <img id="gig-image" className="h-full w-full object-cover" src={emptyImg} alt="gig-image" />
                                    <div className="absolute top-4 -right-10 flex flex-col justify-center items-center gap-2.5 transition-all duration-300 ease-in-out group-hover:top-4 group-hover:right-4">
                                        <a className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer z-10">
                                            <FontAwesomeIcon icon={faHeart} className="text-xl text-cus-light-pink-high" />
                                        </a>

                                        <a className="h-8 w-8 bg-white flex items-center justify-center border border-gray-200 rounded-md cursor-pointer z-10">
                                            <FontAwesomeIcon icon={faRetweet} className="text-xl text-black" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="h-auto w-full flex flex-col p-4">
                                <div className="flex flex-row items-center justify-start gap-2.5">
                                    <div className="h-7 w-7 border-2 border-black rounded-full flex items-center justify-center p-0.5">
                                        <a className="h-full w-full rounded-full bg-cus-light-yellow-high"></a>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <a id="gig-seller-name" className="text-base text-black font-semibold">##########</a>
                                    </div>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p id="gig-title" className="text-base text-black line-clamp-2">##########</p>
                                </div>

                                <div className="flex items-center justify-start mt-2">
                                    <p className="text-lg text-black font-semibold"><FontAwesomeIcon icon={faStar} className="text-base mr-2" />4.9</p>
                                </div>

                                <div className="flex items-center justify-start mt-3">
                                    <p className="text-xl text-black font-semibold tracking-wider">From $<span id="gig-price">##.##</span></p>
                                </div>
                            </div>
                        </div>

                        <div id="not-found" className="hidden h-full col-span-12 items-center justify-center">
                            <p className="text-white text-center text-2xl font-londrinasolid tracking-wide">No Gigs Found!</p>
                        </div>
                    </div>

                    <Pagination id="pagination-container" count={totalPages} page={currentPage} onChange={(event, page) => { setCurrentPage(page); }} color="primary" className="font-ropasans mx-auto bg-white rounded-md shadow-md p-2.5 my-5" sx={{ fontFamily: '"Ropa Sans", sans-serif', fontWeight: 'bold', '& .MuiPaginationItem-root': { fontFamily: '"Ropa Sans", sans-serif', fontWeight: 'bold' }, }} />
                </div>

                <FooterMain />
            </div>

        </section>
    )
}

export default AdvancedSearch;