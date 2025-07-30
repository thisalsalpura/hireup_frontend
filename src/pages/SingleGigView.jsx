import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes, faStar, faLeftLong, faRightLong, faEye, faEyeSlash, faCloudDownload, faClock, faCommentDollar } from "@fortawesome/free-solid-svg-icons";
import { loadSingleGigData, changeMainImage } from "../api/LoadSingleGigData";
import { Slab } from "react-loading-indicators";
import { showPassword, setHideBtnIcon } from "../api/ShowPassword";
import emptyImg from "../assets/images/empty-img.svg";
import FooterMain from "./Footer";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import SecondaryButton from "../components/SecondaryButton";

const SingleGigView = () => {

    const [loading, setLoading] = useState(false);

    const [selectedTab, setSelectedTab] = useState(0);

    const [gigBronzePackage, setGigBronzePackage] = useState(null);

    const [gigSilverPackage, setGigSilverPackage] = useState(null);

    const [gigGoldPackage, setGigGoldPackage] = useState(null);

    useEffect(() => {
        (async () => {
            setLoading(true);

            try {
                await loadSingleGigData(setLoading, setGigBronzePackage, setGigSilverPackage, setGigGoldPackage);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    useEffect(() => {
        if (selectedTab === 0 && gigBronzePackage) {
            document.getElementById("bronze-package-note").innerHTML = gigBronzePackage.extra_note;
            document.getElementById("bronze-package-delivery-time").innerHTML = gigBronzePackage.delivery_time;
            document.getElementById("bronze-package-price").innerHTML = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(gigBronzePackage.price);
        }

        if (selectedTab === 1 && gigSilverPackage) {
            document.getElementById("silver-package-note").innerHTML = gigSilverPackage.extra_note;
            document.getElementById("silver-package-delivery-time").innerHTML = gigSilverPackage.delivery_time;
            document.getElementById("silver-package-price").innerHTML = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(gigSilverPackage.price);
        }

        if (selectedTab === 2 && gigGoldPackage) {
            document.getElementById("gold-package-note").innerHTML = gigGoldPackage.extra_note;
            document.getElementById("gold-package-delivery-time").innerHTML = gigGoldPackage.delivery_time;
            document.getElementById("gold-package-price").innerHTML = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(gigGoldPackage.price);
        }
    }, [selectedTab, gigBronzePackage, gigSilverPackage, gigGoldPackage]);

    const [showFPModal, setShowFPModal] = useState(false);

    const scrollRef = useRef(null);

    const scrollLeft = (e) => {
        e.stopPropagation();
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -150,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = (e) => {
        e.stopPropagation();
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 150,
                behavior: "smooth",
            });
        }
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
                        <a href="/home" className="text-base text-blue-700 opacity-50 cursor-pointer">Home &nbsp;{">"}&nbsp;</a>
                        <a href="#" className="text-base text-blue-700 opacity-50 cursor-pointer">&nbsp; SingleGigView &nbsp;{">"}&nbsp;</a>
                        <a href="#" className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp; <span id="category">#########</span> &nbsp;{">"}&nbsp;</a>
                        <a href="#" className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp; <span id="sub-category">#########</span></a>
                    </div>

                    <div className="flex items-center justify-start md:justify-center">
                        <FontAwesomeIcon icon={faShareNodes} className="text-base font-semibold text-blue-700 hover:-rotate-12 transition-all duration-300 ease-in-out" />
                    </div>
                </div>

                <div className="grid grid-cols-12 items-start mt-8 h-full w-full relative py-2.5 gap-6">
                    <div className="col-span-12 lg:col-span-7 h-full flex flex-col justify-center">
                        <p id="gig-title" className="text-3xl text-black font-semibold text-left"></p>

                        <div className="flex flex-row items-center justify-start gap-3.5 mt-8">
                            <div className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-black p-0.5">
                                <a className="h-full w-full rounded-full bg-cus-light-yellow-high"></a>
                            </div>

                            <div className="flex flex-col justify-start">
                                <p id="seller-name" className="text-md text-black font-semibold text-left">#########</p>
                                <p id="gig-rating" className="text-md text-black font-semibold text-left"><FontAwesomeIcon icon={faStar} className="text-md mr-2" />#########</p>
                            </div>
                        </div>

                        <div className="relative flex items-center mt-8">
                            <div className="w-full h-96 rounded-md overflow-hidden cursor-pointer">
                                <img id="gigMainImage" className="h-full w-full object-cover" src={emptyImg} alt="gig-main-img" />
                            </div>
                        </div>

                        <div className="relative w-full h-full mt-2.5">
                            <div onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 ml-3 z-10">
                                <div className="w-10 h-10 bg-cus-black-low flex items-center justify-center border border-white rounded-lg p-2 cursor-pointer">
                                    <FontAwesomeIcon icon={faLeftLong} className="text-white text-lg" />
                                </div>
                            </div>

                            <div ref={scrollRef} className="w-full overflow-x-auto hide-scrollbar flex items-center gap-1.5">
                                <div onClick={changeMainImage} className="h-28 w-72 rounded-md flex-shrink-0 overflow-hidden cursor-pointer">
                                    <img id="gigImage1" className="gig-img-container h-full w-full object-cover transition-opacity duration-300" src={emptyImg} alt="gig-image-1" />
                                </div>

                                <div onClick={changeMainImage} className="h-28 w-72 rounded-md flex-shrink-0 overflow-hidden cursor-pointer">
                                    <img id="gigImage2" className="gig-img-container h-full w-full object-cover transition-opacity duration-300" src={emptyImg} alt="gig-image-2" />
                                </div>

                                <div onClick={changeMainImage} className="h-28 w-72 rounded-md flex-shrink-0 overflow-hidden cursor-pointer">
                                    <img id="gigImage3" className="gig-img-container h-full w-full object-cover transition-opacity duration-300" src={emptyImg} alt="gig-image-3" />
                                </div>
                            </div>

                            <div onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 mr-3 z-10">
                                <div className="w-10 h-10 bg-cus-black-low flex items-center justify-center border border-white rounded-lg p-2 cursor-pointer">
                                    <FontAwesomeIcon icon={faRightLong} className="text-white text-lg" />
                                </div>
                            </div>
                        </div>

                        <div className="h-auto w-full flex items-center justify-between bg-red-400 rounded-md px-4 py-3 mt-4">
                            <p className="text-white text-xl font-londrinasolid tracking-wide">Documentation</p>
                            <a id="gigDocument" href="#" target="_blank" download className="flex items-center justify-center cursor-pointer"><FontAwesomeIcon icon={faCloudDownload} className="text-white text-xl z-10" /></a>
                        </div>

                        <div className="h-auto w-full flex flex-col items-start justify-start bg-white shadow rounded-md border border-gray-300 p-4 mt-10">
                            <p className="text-3xl font-semibold text-black text-left">Description</p>

                            <div className="h-auto w-full flex items-center justify-start border border-gray-500 rounded-md p-2.5 mt-4">
                                <p id="gig-desc" className="text-black">#########</p>
                            </div>
                        </div>

                        <div className="h-auto w-full flex flex-col items-start justify-start bg-white shadow rounded-md border border-gray-300 p-4 mt-6">
                            <p className="text-lg font-semibold text-black text-left">Category: &nbsp;&nbsp;<span id="category2" className="font-normal">#########</span></p>
                            <p className="text-lg font-semibold text-black text-left mt-2">Sub Category: &nbsp;&nbsp;<span id="sub-category2" className="font-normal">#########</span></p>
                        </div>

                        <div className="h-auto w-full flex flex-col items-start justify-start bg-white shadow rounded-md border border-gray-300 p-4 mt-6">
                            <p className="text-3xl font-semibold text-black text-left">Search Tags</p>

                            <div id="search-tags-main" className="h-auto w-full hidden flex-wrap items-center justify-start mt-4 gap-5">
                                <div id="search-tag-temp" className="search-tag-item h-auto w-auto hidden flex-row items-center justify-center border border-gray-500 rounded-3xl px-4 py-1 gap-4">
                                    <p id="search-tag-name" className="text-lg"></p>
                                </div>
                            </div>
                        </div>

                        <div className="h-auto w-full flex flex-col items-start justify-start bg-white shadow rounded-md border border-gray-300 p-4 mt-6">
                            <p className="text-3xl font-semibold text-black text-left">FAQs</p>

                            <div id="faq-main" className="h-auto w-full hidden flex-wrap items-center justify-start mt-4 gap-5">
                                <div id="faq-temp" className="faq-item h-auto w-full hidden flex-col items-center justify-center border border-gray-500 rounded-md overflow-hidden">
                                    <div className="h-auto w-full bg-cus-black-low flex items-start justify-start rounded-tl-md rounded-tr-md p-4">
                                        <p id="faq-ques" className="text-white break-words"></p>
                                    </div>
                                    <div className="h-auto w-full bg-transparent flex items-start justify-start rounded-bl-md rounded-br-md p-4">
                                        <p id="faq-ans" className="text-black break-words"></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-auto w-full flex flex-col items-start justify-start bg-white shadow rounded-md border border-gray-300 p-4 mt-6">
                            <p className="text-3xl font-semibold text-black text-left">Reviews</p>

                            <div className="h-auto w-full flex flex-col border border-gray-500 rounded-md p-2.5 mt-4">
                                <div className="flex flex-row items-center justify-start gap-3.5">
                                    <div className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-gray-300 p-0.5">
                                        <a className="h-full w-full rounded-full bg-cus-light-yellow-high"></a>
                                    </div>

                                    <div className="flex flex-col justify-start">
                                        <p className="text-md text-black font-semibold text-left">Ben Stokes</p>
                                        <p className="text-md text-black font-semibold text-left"><FontAwesomeIcon icon={faStar} className="text-md mr-2" />4.9</p>
                                    </div>
                                </div>

                                <p className="mt-3.5 text-black">SMCSE was wonderful to work with! They understood my business needs and expectations and went above and beyond with their deliverables. I will hire them again</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 lg:mt-0 col-span-12 lg:col-span-5 lg:sticky lg:top-28 self-start">
                        <div className="bg-white shadow p-4 rounded-md w-full border border-gray-300">
                            <Tabs className={"w-full"} selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)} forceRenderTabPanel>
                                <TabList>
                                    <Tab><p className="text-black font-semibold">Bronze</p></Tab>
                                    <Tab><p className="text-black font-semibold">Silver</p></Tab>
                                    <Tab><p className="text-black font-semibold">Gold</p></Tab>
                                </TabList>

                                <TabPanel>
                                    <div className="flex flex-col items-start justify-start p-2.5 gap-8 mt-4">
                                        <h2 className="text-2xl font-semibold">Bronze Package</h2>

                                        <div className="flex flex-wrap">
                                            <p id="bronze-package-note">#########</p>
                                        </div>

                                        <div className="h-auto w-full flex flex-row items-center justify-end gap-2.5">
                                            <FontAwesomeIcon icon={faClock} className="text-xl" />
                                            <p className="text-xl font-semibold"><span id="bronze-package-delivery-time">##</span> Days</p>
                                        </div>

                                        <div className="h-auto w-full flex items-center justify-end">
                                            <p className="text-3xl font-semibold">$ <span id="bronze-package-price">####</span></p>
                                        </div>

                                        <SecondaryButton containerClass="w-full bg-black text-white" name="Add to Cart" />
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="flex flex-col items-start justify-start p-2.5 gap-8 mt-4">
                                        <h2 className="text-2xl font-semibold">Silver Package</h2>

                                        <div className="flex flex-wrap">
                                            <p id="silver-package-note">#########</p>
                                        </div>

                                        <div className="h-auto w-full flex flex-row items-center justify-end gap-2.5">
                                            <FontAwesomeIcon icon={faClock} className="text-xl" />
                                            <p className="text-xl font-semibold"><span id="silver-package-delivery-time">##</span> Days</p>
                                        </div>

                                        <div className="h-auto w-full flex items-center justify-end">
                                            <p className="text-3xl font-semibold">$ <span id="silver-package-price">####</span></p>
                                        </div>

                                        <SecondaryButton containerClass="w-full bg-black text-white" name="Add to Cart" />
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="flex flex-col items-start justify-start p-2.5 gap-8 mt-4">
                                        <h2 className="text-2xl font-semibold">Gold Package</h2>

                                        <div className="flex flex-wrap">
                                            <p id="gold-package-note">#########</p>
                                        </div>

                                        <div className="h-auto w-full flex flex-row items-center justify-end gap-2.5">
                                            <FontAwesomeIcon icon={faClock} className="text-xl" />
                                            <p className="text-xl font-semibold"><span id="gold-package-delivery-time">##</span> Days</p>
                                        </div>

                                        <div className="h-auto w-full flex items-center justify-end">
                                            <p className="text-3xl font-semibold">$ <span id="gold-package-price">####</span></p>
                                        </div>

                                        <SecondaryButton containerClass="w-full bg-black text-white" name="Add to Cart" />
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>

                <FooterMain />
            </div>

        </section>
    )
}

export default SingleGigView;