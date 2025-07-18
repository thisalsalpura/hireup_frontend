import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import DropdownComponent from "../components/DropdownComponent";
import SecondaryButton from "../components/SecondaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { steps } from "../constants/script";

const GigRegister = () => {

    useEffect(() => {
        document.body.classList.add("custom2");
        return () => document.body.classList.remove("custom2");
    }, []);

    const [activStep, setActiveStep] = useState(1);

    return (
        <section className="bg-white custom2">

            <Navbar />

            <div className="max-w-7xl mx-auto h-full mt-24 bg-white p-2.5 sm:p-5">
                <div className="flex items-center justify-start">
                    <div className="flex flex-wrap md:flex-row items-center justify-start md:justify-center">
                        <span className="text-base text-blue-700 opacity-50 cursor-pointer">Home &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp; GigRegister</span>
                    </div>
                </div>

                <div className="flex flex-wrap lg:flex-row items-center justify-center py-2.5 px-6 border-t border-b border-gray-300 gap-6 mt-6">
                    {steps.map((step) => (
                        <div key={step.id} onClick={() => setActiveStep(step.id)} className={`flex flex-row items-center justify-center gap-2.5 ${activStep === step.id ? "opacity-100" : "opacity-30"}`}>
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
                                            <p>As your Gig storefront, your title is the most important place to include keywords that buyers would likely use to search for a service like yours.</p>
                                        </div>
                                        <div className="col-span-12 md:col-span-8 flex flex-col gap-2 items-end justify-center">
                                            <input id="gigName" name="gigName" className="bg-cus-black-low h-10 w-full md:w-11/12 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="Web Development" required />
                                        </div>
                                    </div>

                                    <hr className="border-gray-300 h-0.5 w-full" />

                                    <div className="grid grid-cols-12 gap-4 md:gap-2.5 w-full items-start justify-center">
                                        <div className="col-span-12 md:col-span-4 flex flex-col gap-2 items-start justify-start">
                                            <h2 className="text-2xl font-semibold">Category</h2>
                                            <p>Choose the category and sub-category most suitable for your Gig.</p>
                                        </div>
                                        <div className="col-span-12 md:col-span-8 flex flex-col gap-2 items-end justify-center">
                                            <DropdownComponent name="Select Category" dropdownBtnClass="w-full md:w-11/12 bg-cus-black-low" dropdownMenuClass="bg-white" dropdownMenuItemClass="text-black" />
                                        </div>
                                    </div>

                                    <hr className="border-gray-300 h-0.5 w-full" />

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
                                            <DropdownComponent name="Select Category" dropdownBtnClass="w-full md:w-11/12 bg-cus-black-low" dropdownMenuClass="bg-white" dropdownMenuItemClass="text-black" />
                                        </div>
                                    </div>
                                </>
                            )}

                            {activStep === 2 && (
                                <>
                                    <div className="grid grid-cols-12 gap-4 md:gap-2.5 w-full items-start justify-center">
                                        <div className="col-span-12 md:col-span-4 flex flex-col gap-2 items-start justify-start">
                                            <h2 className="text-2xl font-semibold">Gig Title</h2>
                                            <p>As your Gig storefront, your title is the most important place to include keywords that buyers would likely use to search for a service like yours.</p>
                                        </div>
                                        <div className="col-span-12 md:col-span-8 flex flex-col gap-2 items-end justify-center">
                                            <input id="gigName" name="gigName" className="bg-cus-black-low h-10 w-full md:w-11/12 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="Web Development" required />
                                        </div>
                                    </div>

                                    <hr className="border-gray-300 h-0.5 w-full" />

                                    <div className="grid grid-cols-12 gap-4 md:gap-2.5 w-full items-start justify-center">
                                        <div className="col-span-12 md:col-span-4 flex flex-col gap-2 items-start justify-start">
                                            <h2 className="text-2xl font-semibold">Category</h2>
                                            <p>Choose the category and sub-category most suitable for your Gig.</p>
                                        </div>
                                        <div className="col-span-12 md:col-span-8 flex flex-col gap-2 items-end justify-center">
                                            <DropdownComponent name="Select Category" dropdownBtnClass="w-full md:w-11/12 bg-cus-black-low" dropdownMenuClass="bg-white" dropdownMenuItemClass="text-black" />
                                        </div>
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
                                            <DropdownComponent name="Select Category" dropdownBtnClass="w-full md:w-11/12 bg-cus-black-low" dropdownMenuClass="bg-white" dropdownMenuItemClass="text-black" />
                                        </div>
                                    </div>
                                </>
                            )}

                        </div>

                        <div className="h-full w-full flex items-center md:items-end justify-center md:justify-end mt-6 sm:mt-4">
                            <div className="h-auto w-full md:w-auto">
                                <SecondaryButton href="/advancedSearch" containerClass="w-full md:w-fit h-full bg-cus-black-low text-white" name="Save & Continue" />
                            </div>
                        </div>
                    </div>

                    <div className="top-6 col-span-3 h-fit sticky hidden lg:flex flex-col items-center justify-start p-2.5 pt-0">
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
                                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eius similique, culpa, omnis delectus nulla exercitationem aspernatur sequi, atque voluptatum ipsa quibusdam est ea necessitatibus numquam reprehenderit perspiciatis assumenda fugit?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GigRegister;