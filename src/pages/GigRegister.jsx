import React, { useEffect, useState } from "react";
import SecondaryButton from "../components/SecondaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { steps } from "../constants/script";
import { loadProductDropdowns } from "../api/LoadProductDropdowns";
import { loadSubCategoryDropdownsData } from "../api/LoadProductDropdowns";
import { Slab } from "react-loading-indicators";
import logo from "../assets/icons/logo.svg";
import { saveGig } from "../api/SaveGig";

const GigRegister = () => {

    const [loading, setLoading] = useState(false);

    const [activStep, setActiveStep] = useState(1);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:8080/hireup_backend/SessionServletSeller", {
                method: "GET",
                credentials: "include"
            });

            if (response.ok) {
                const json = await response.json();
                if (json.redirect === "NO") {
                    window.location.href = "/home";
                }
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            setLoading(true);

            try {
                await loadProductDropdowns(setLoading);
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

            <nav className={`fixed top-0 left-0 right-0 ${loading ? "opacity-20 pointer-events-none" : ""} z-50`}>
                <div className="max-w-7xl mx-auto h-36 md:h-24 bg-white flex flex-col md:flex-row items-center justify-between py-4 md:py-0 px-7">
                    <a href="/home">
                        <img className="h-10 sm:h-12" src={logo} alt="logo" />
                    </a>

                    <div className="flex items-center justify-center">
                        <a href="/home" className="cus-btn-set w-auto flex">
                            <p className="text-lg font-bold text-black">Switch to Buying</p>
                        </a>
                    </div>
                </div>
            </nav>

            <div className={`max-w-7xl mx-auto h-full mt-24 ${loading ? "opacity-20 pointer-events-none" : ""} bg-white p-2.5 sm:p-5`}>
                <div className="flex items-center justify-start">
                    <div className="flex flex-wrap md:flex-row items-center justify-start md:justify-center">
                        <a href="/home" className="text-base text-blue-700 opacity-50 cursor-pointer">Home &nbsp;{">"}&nbsp;</a>
                        <a href="/sellerDashboard" className="text-base text-blue-700 opacity-50 cursor-pointer">SellerDashboard &nbsp;{">"}&nbsp;</a>
                        <a href="/gigRegister" className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp; GigRegister</a>
                    </div>
                </div>

                <div className="flex flex-wrap lg:flex-row items-center justify-center py-2.5 px-6 border-t border-b border-gray-300 gap-6 mt-6">
                    {steps.map((step) => (
                        <div key={step.id} className={`flex flex-row items-center justify-center gap-2.5 ${activStep === step.id ? "opacity-100" : "opacity-30"}`}>
                            <div className="h-6 w-6 bg-cus-light-yellow-high flex items-center justify-center rounded-full">
                                <p>{step.id}</p>
                            </div>
                            <p>{step.name}</p>
                            <p>&nbsp;{">"}&nbsp;</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-12 mt-6 h-full items-start relative">
                    <div className="col-span-12 lg:col-span-9 flex flex-col h-full items-center justify-start p-2.5">
                        <div className="h-full w-full flex flex-col gap-6 items-center justify-start border border-gray-300 shadow-xl rounded-md p-4 sm:p-8">

                            {activStep === 1 && (
                                <>
                                    <div className="grid grid-cols-12 gap-4 md:gap-2.5 w-full items-start justify-center">
                                        <div className="col-span-12 md:col-span-4 flex flex-col gap-2 items-start justify-start">
                                            <h2 className="text-2xl font-semibold">Gig Title</h2>
                                            <p>This is the name of your service. Use clear, keyword-rich titles that buyers would type when searching for your service. Make it specific and professional.</p>
                                        </div>
                                        <div className="col-span-12 md:col-span-8 flex flex-col gap-2 items-end justify-center">
                                            <input id="gigTitle" name="gigTitle" className="bg-cus-black-low h-10 w-full md:w-11/12 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="I will do..." required />
                                        </div>
                                    </div>

                                    <hr className="border-gray-300 h-0.5 w-full" />

                                    <div className="grid grid-cols-12 gap-4 md:gap-2.5 w-full items-start justify-center">
                                        <div className="col-span-12 md:col-span-4 flex flex-col gap-2 items-start justify-start">
                                            <h2 className="text-2xl font-semibold">Gig Description</h2>
                                            <p>Briefly explain what your gig offers, what makes it unique, and how it benefits the buyer. Keep it concise but informative to attract interest.</p>
                                        </div>
                                        <div className="col-span-12 md:col-span-8 flex flex-col gap-2 items-end justify-center">
                                            <textarea id="gigDesc" name="gigDesc" rows="6" className="bg-cus-black-low w-full md:w-11/12 p-2.5 rounded-md text-white text-base resize-none" type="text" placeholder="Briefly explain about your Gig..." required />
                                        </div>
                                    </div>

                                    <hr className="border-gray-300 h-0.5 w-full" />

                                    <div className="grid grid-cols-12 gap-4 md:gap-2.5 w-full items-start justify-center">
                                        <div className="col-span-12 md:col-span-4 flex flex-col gap-2 items-start justify-start">
                                            <h2 className="text-2xl font-semibold">Category</h2>
                                            <p>Choose the main service area that best matches your gig. This helps place your gig in the right section for buyers to find it easily.</p>
                                        </div>
                                        <div className="col-span-12 md:col-span-8 flex flex-col gap-2 items-end justify-center">
                                            <select onChange={loadSubCategoryDropdownsData} id="category" name="category" defaultValue="0" className="bg-white h-10 w-full md:w-11/12 py-0.5 px-2.5 rounded-md text-black text-base border-2 border-cus-black-low appearance-none" required>
                                                <option className="text-black text-base" value="0">Select Category</option>
                                            </select>
                                        </div>
                                    </div>

                                    <hr className="border-gray-300 h-0.5 w-full" />

                                    <div className="grid grid-cols-12 gap-4 md:gap-2.5 w-full items-start justify-center">
                                        <div className="col-span-12 md:col-span-4 flex flex-col gap-2 items-start justify-start">
                                            <h2 className="text-2xl font-semibold">Sub Category</h2>
                                            <p>Select a more specific service type under the main category. This allows buyers to filter services more precisely and improves your gig's visibility.</p>
                                        </div>
                                        <div className="col-span-12 md:col-span-8 flex flex-col gap-2 items-end justify-center">
                                            <select id="subCategory" name="subCategory" defaultValue="0" className="bg-white h-10 w-full md:w-11/12 py-0.5 px-2.5 rounded-md text-black text-base border-2 border-cus-black-low appearance-none opacity-50" required disabled>
                                                <option className="text-black text-base" value="0">Select Sub Category</option>
                                            </select>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activStep === 2 && (
                                <>
                                    <div className="h-auto w-full flex items-center justify-start">
                                        <h1 className="text-2xl font-semibold">Bronze Package</h1>
                                    </div>

                                    <hr className="border-gray-300 h-0.5 w-full" />

                                    <div className="w-full relative overflow-x-auto cusxscroll">
                                        <table className="h-full w-full border-separate border-spacing-y-1">
                                            <thead className="bg-gray-500">
                                                <tr>
                                                    <th className="px-6 py-3 rounded-tl-md rounded-bl-md">
                                                        <div className="flex flex-col justify-start items-start h-full">
                                                            <p className="text-black text-lg font-semibold">Price &nbsp;[$]</p>
                                                        </div>
                                                    </th>
                                                    <th className="px-6 py-3 text-black text-lg font-semibold text-center">
                                                        <div className="flex flex-col justify-start items-start h-full">
                                                            <p className="text-black text-lg font-semibold">Delivery Time &nbsp;[Days]</p>
                                                        </div>
                                                    </th>
                                                    <th className="px-6 py-3 text-black text-lg font-semibold text-center rounded-tr-md rounded-br-md">
                                                        <div className="flex flex-col justify-start items-start h-full">
                                                            <p className="text-black text-lg font-semibold">Extra Note</p>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr className="bg-cus-black-low border-b border-gray-500">
                                                    <td className="px-6 py-4 rounded-tl-md rounded-bl-md">
                                                        <div className="flex items-start justify-start h-full w-36 shrink-0">
                                                            <input id="bronzePrice" name="bronzePrice" pattern="^\d+(\.\d{2})?$" className="bg-white h-10 w-full py-0.5 px-2.5 rounded-md text-black text-base" type="text" placeholder="40" required />
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-start justify-start h-full w-36 shrink-0">
                                                            <input id="bronzeDTime" name="bronzeDTime" className="bg-white h-10 w-full py-0.5 px-2.5 rounded-md text-black text-base" type="text" placeholder="4" required />
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 rounded-tr-md rounded-br-md">
                                                        <div className="flex items-start justify-start h-full w-56 md:w-full">
                                                            <textarea id="bronzeNote" name="bronzeNote" rows="3" className="bg-white w-full p-2.5 rounded-md text-black text-base resize-none" type="text" placeholder="Describe the special key points in each Bronze Package..." required />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <hr className="border-gray-300 h-0.5 w-full" />

                                    <div className="h-auto w-full flex items-center justify-start">
                                        <h1 className="text-2xl font-semibold">Silver Package</h1>
                                    </div>

                                    <hr className="border-gray-300 h-0.5 w-full" />

                                    <div className="w-full relative overflow-x-auto cusxscroll">
                                        <table className="h-full w-full border-separate border-spacing-y-1">
                                            <thead className="bg-gray-500">
                                                <tr>
                                                    <th className="px-6 py-3 rounded-tl-md rounded-bl-md">
                                                        <div className="flex flex-col justify-start items-start h-full">
                                                            <p className="text-black text-lg font-semibold">Price &nbsp;[$]</p>
                                                        </div>
                                                    </th>
                                                    <th className="px-6 py-3 text-black text-lg font-semibold text-center">
                                                        <div className="flex flex-col justify-start items-start h-full">
                                                            <p className="text-black text-lg font-semibold">Delivery Time &nbsp;[Days]</p>
                                                        </div>
                                                    </th>
                                                    <th className="px-6 py-3 text-black text-lg font-semibold text-center rounded-tr-md rounded-br-md">
                                                        <div className="flex flex-col justify-start items-start h-full">
                                                            <p className="text-black text-lg font-semibold">Extra Note</p>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr className="bg-cus-black-low border-b border-gray-500">
                                                    <td className="px-6 py-4 rounded-tl-md rounded-bl-md">
                                                        <div className="flex items-start justify-start h-full w-36 shrink-0">
                                                            <input id="silverPrice" name="silverPrice" pattern="^\d+(\.\d{2})?$" className="bg-white h-10 w-full py-0.5 px-2.5 rounded-md text-black text-base" type="text" placeholder="50" required />
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-start justify-start h-full w-36 shrink-0">
                                                            <input id="silverDTime" name="silverDTime" className="bg-white h-10 w-full py-0.5 px-2.5 rounded-md text-black text-base" type="text" placeholder="5" required />
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 rounded-tr-md rounded-br-md">
                                                        <div className="flex items-start justify-start h-full w-56 md:w-full">
                                                            <textarea id="silverNote" name="silverNote" rows="3" className="bg-white w-full p-2.5 rounded-md text-black text-base resize-none" type="text" placeholder="Describe the special key points in each Silver Package..." required />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <hr className="border-gray-300 h-0.5 w-full" />

                                    <div className="h-auto w-full flex items-center justify-start">
                                        <h1 className="text-2xl font-semibold">Gold Package</h1>
                                    </div>

                                    <hr className="border-gray-300 h-0.5 w-full" />

                                    <div className="w-full relative overflow-x-auto cusxscroll">
                                        <table className="h-full w-full border-separate border-spacing-y-1">
                                            <thead className="bg-gray-500">
                                                <tr>
                                                    <th className="px-6 py-3 rounded-tl-md rounded-bl-md">
                                                        <div className="flex flex-col justify-start items-start h-full">
                                                            <p className="text-black text-lg font-semibold">Price &nbsp;[$]</p>
                                                        </div>
                                                    </th>
                                                    <th className="px-6 py-3 text-black text-lg font-semibold text-center">
                                                        <div className="flex flex-col justify-start items-start h-full">
                                                            <p className="text-black text-lg font-semibold">Delivery Time &nbsp;[Days]</p>
                                                        </div>
                                                    </th>
                                                    <th className="px-6 py-3 text-black text-lg font-semibold text-center rounded-tr-md rounded-br-md">
                                                        <div className="flex flex-col justify-start items-start h-full">
                                                            <p className="text-black text-lg font-semibold">Extra Note</p>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr className="bg-cus-black-low border-b border-gray-500">
                                                    <td className="px-6 py-4 rounded-tl-md rounded-bl-md">
                                                        <div className="flex items-start justify-start h-full w-36 shrink-0">
                                                            <input id="goldPrice" name="goldPrice" pattern="^\d+(\.\d{2})?$" className="bg-white h-10 w-full py-0.5 px-2.5 rounded-md text-black text-base" type="text" placeholder="60" required />
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-start justify-start h-full w-36 shrink-0">
                                                            <input id="goldDTime" name="goldDTime" className="bg-white h-10 w-full py-0.5 px-2.5 rounded-md text-black text-base" type="text" placeholder="6" required />
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 rounded-tr-md rounded-br-md">
                                                        <div className="flex items-start justify-start h-full w-56 md:w-full">
                                                            <textarea id="goldNote" name="goldNote" rows="3" className="bg-white w-full p-2.5 rounded-md text-black text-base resize-none" type="text" placeholder="Describe the special key points in each Gold Package..." required />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                            )}

                            {activStep === 3 && (
                                <>
                                    <div className="grid grid-cols-12 gap-4 md:gap-2.5 w-full items-start justify-center">
                                        <div className="col-span-12 md:col-span-4 flex flex-col gap-2 items-start justify-start">
                                            <h2 className="text-2xl font-semibold">Gig Title</h2>
                                            <p>As your Gig storefront, your title is the most important place to include keywords that buyers would likely use to search for a service like yours.</p>
                                        </div>
                                        <div className="col-span-12 md:col-span-8 flex flex-col gap-2 items-end justify-center">
                                            <input id="" name="" className="bg-cus-black-low h-10 w-full md:w-11/12 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="Web Development" required />
                                        </div>
                                    </div>

                                    <hr className="border-gray-300 h-0.5 w-full" />

                                    <div className="grid grid-cols-12 gap-4 md:gap-2.5 w-full items-start justify-center">
                                        <div className="col-span-12 md:col-span-4 flex flex-col gap-2 items-start justify-start">
                                            <h2 className="text-2xl font-semibold">Category</h2>
                                            <p>Choose the category and sub-category most suitable for your Gig.</p>
                                        </div>
                                        <div className="col-span-12 md:col-span-8 flex flex-col gap-2 items-end justify-center">
                                            <select id="city" name="city" defaultValue="0" className="bg-cus-black-low h-10 w-full md:w-11/12 py-0.5 px-2.5 rounded-md text-white text-base appearance-none" required>
                                                <option className="text-black text-base" value="0">Select City</option>
                                            </select>
                                        </div>
                                    </div>
                                </>
                            )}

                        </div>

                        <div className="h-full w-full flex items-center md:items-end justify-center md:justify-end mt-6 sm:mt-4">
                            <div className="h-auto w-full md:w-auto">
                                <SecondaryButton onClick={() => saveGig(setLoading, activStep, setActiveStep)} containerClass="w-full md:w-fit h-full bg-cus-black-low text-white" name="Save & Continue" />
                            </div>
                        </div>
                    </div>

                    <div className="top-20 col-span-3 h-fit sticky hidden lg:flex flex-col items-center justify-start p-2.5 pt-0">
                        <div className="h-12 w-12 translate-y-1/2 flex items-center justify-center rounded-full border border-black p-1 z-10">
                            <div className="h-full w-full bg-cus-light-yellow-high flex items-center justify-center rounded-full">
                                <FontAwesomeIcon icon={faLightbulb} className="text-black text-lg" />
                            </div>
                        </div>
                        <div className="relative h-full w-full bg-cus-black-low shadow-xl rounded-md p-4 pt-8">
                            <div className="absolute left-0 top-8 -translate-x-full">
                                <div className="w-0 h-0 border-y-[10px] border-y-transparent border-r-[10px] border-r-cus-black-low"></div>
                            </div>

                            <div className="h-full w-full flex flex-col gap-2 items-start justify-start">
                                {activStep === 1 && (
                                    <p className="text-white">Enter your Gig Title, Gig Description, Gig Category and Gig Sub Category. Then click a Save & Continue button.</p>
                                )}

                                {activStep === 2 && (
                                    <p className="text-white">Enter the Price, Delivery Time and Special Key Points of each Gold, Silver and Bronze Packages.</p>
                                )}

                                {activStep === 3 && (
                                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eius similique, culpa, omnis delectus nulla exercitationem aspernatur sequi, atque voluptatum ipsa quibusdam est ea necessitatibus numquam reprehenderit perspiciatis assumenda fugit?</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GigRegister;