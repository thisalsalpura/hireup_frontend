import React from "react";
import Navbar from "./Navbar";
import DropdownComponent from "../components/DropdownComponent";
import SecondaryButton from "../components/SecondaryButton";

const GigRegister = () => {
    return (
        <section className="bg-white custom2">

            <Navbar />

            <div className="max-w-7xl mx-auto h-full mt-24 bg-white p-5">
                <div className="flex items-center justify-start">
                    <div className="flex flex-wrap md:flex-row items-center justify-start md:justify-center">
                        <span className="text-base text-blue-700 opacity-50 cursor-pointer">Home &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp; GigRegister</span>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-center py-2.5 px-6 border-t border-b border-gray-300 gap-6 mt-6">
                    <div className="flex flex-row items-center justify-center gap-2.5">
                        <div className="h-6 w-6 bg-cus-light-yellow-high flex items-center justify-center rounded-full">
                            <p>1</p>
                        </div>
                        <p>Overview</p>
                        <p>&nbsp;{">"}&nbsp;</p>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-2.5">
                        <div className="h-6 w-6 bg-cus-light-yellow-high flex items-center justify-center rounded-full">
                            <p>2</p>
                        </div>
                        <p>Pricing</p>
                        <p>&nbsp;{">"}&nbsp;</p>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-2.5">
                        <div className="h-6 w-6 bg-cus-light-yellow-high flex items-center justify-center rounded-full">
                            <p>3</p>
                        </div>
                        <p>Description & FAQ</p>
                        <p>&nbsp;{">"}&nbsp;</p>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-2.5">
                        <div className="h-6 w-6 bg-cus-light-yellow-high flex items-center justify-center rounded-full">
                            <p>4</p>
                        </div>
                        <p>Requirements</p>
                        <p>&nbsp;{">"}&nbsp;</p>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-2.5">
                        <div className="h-6 w-6 bg-cus-light-yellow-high flex items-center justify-center rounded-full">
                            <p>5</p>
                        </div>
                        <p>Gallery</p>
                        <p>&nbsp;{">"}&nbsp;</p>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-2.5">
                        <div className="h-6 w-6 bg-cus-light-yellow-high flex items-center justify-center rounded-full">
                            <p>6</p>
                        </div>
                        <p>Publish</p>
                    </div>
                </div>

                <div className="grid grid-cols-12 mt-6">
                    <div className="col-span-9 flex flex-col items-center justify-start p-2.5">
                        <div className="h-full w-full flex flex-col gap-6 items-center justify-start border border-gray-300 shadow-xl rounded-md p-8">
                            <div className="grid grid-cols-12 gap-2.5 w-full items-start justify-center">
                                <div className="col-span-4 flex flex-col gap-2 items-start justify-start">
                                    <h2 className="text-2xl font-semibold">Gig Title</h2>
                                    <p>As your Gig storefront, your title is the most important place to include keywords that buyers would likely use to search for a service like yours.</p>
                                </div>
                                <div className="col-span-8 flex flex-col gap-2 items-end justify-center">
                                    <input id="gigName" name="gigName" className="bg-cus-black-low h-10 w-11/12 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="Web Development" required />
                                </div>
                            </div>

                            <hr className="border-gray-300 h-0.5 w-full" />

                            <div className="grid grid-cols-12 gap-2.5 w-full items-start justify-center">
                                <div className="col-span-4 flex flex-col gap-2 items-start justify-start">
                                    <h2 className="text-2xl font-semibold">Category</h2>
                                    <p>Choose the category and sub-category most suitable for your Gig.</p>
                                </div>
                                <div className="col-span-8 flex flex-col gap-2 items-end justify-center">
                                    <DropdownComponent name="Select Category" dropdownBtnClass="w-11/12 bg-cus-black-low" dropdownMenuClass="bg-white" dropdownMenuItemClass="text-black" />
                                </div>
                            </div>
                        </div>

                        <div className="h-full w-full flex items-end justify-end mt-4">
                            <div className="h-auto w-auto">
                                <SecondaryButton href="/advancedSearch" containerClass="w-fit h-full bg-cus-black-low text-white" name="Save & Continue" />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default GigRegister;