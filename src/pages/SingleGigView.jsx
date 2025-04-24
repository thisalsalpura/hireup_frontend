import React, { useRef } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes, faStar, faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";

const SingleGigView = () => {

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
        <section className="bg-white custom2">

            <Navbar />

            <div className="max-w-7xl mx-auto h-full mt-24 bg-white p-5">

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
                    <div className="flex flex-wrap md:flex-row items-center justify-start md:justify-center">
                        <span className="text-base text-blue-700 opacity-50 cursor-pointer">Home &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-50 cursor-pointer">&nbsp;SingleGigView &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp;Programming & Tech &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp;Web Development</span>
                    </div>

                    <div className="flex items-center justify-start md:justify-center">
                        <FontAwesomeIcon icon={faShareNodes} className="text-base font-semibold text-blue-700 hover:-rotate-12 transition-all duration-300 ease-in-out" />
                    </div>
                </div>

                <div className="grid grid-cols-12 mt-8">
                    <div className="col-span-7 h-full flex flex-col justify-center pr-5">
                        <p className="text-3xl text-black text-left">develop custom web applications business e commerce and landing pages</p>

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

                        <div className="h-full w-full mt-10">
                            <div className="relative overflow-x-auto">

                                <table class="h-full w-full">
                                    <caption class="p-5 bg-cus-black-low rounded-tl-md rounded-tr-md">
                                        <h2 className="text-3xl text-white text-left">Our products</h2>
                                        <p className="text-sm text-white text-left mt-2">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
                                    </caption>

                                    <thead className="bg-gray-500">
                                        <tr>
                                            <th className="px-6 py-3 text-black text-lg font-semibold">
                                                Package
                                            </th>
                                            <th className="px-6 py-3 text-black text-lg font-semibold">
                                                Bronze
                                            </th>
                                            <th className="px-6 py-3 text-black text-lg font-semibold">
                                                Silver
                                            </th>
                                            <th className="px-6 py-3 text-black text-lg font-semibold">
                                                Gold
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr className="bg-cus-black-low border-b border-gray-500">
                                            <th className="px-6 py-4 text-white text-base">
                                                Apple MacBook Pro 17
                                            </th>
                                            <td className="px-6 py-4 text-white text-base">
                                                Silver
                                            </td>
                                            <td className="px-6 py-4 text-white text-base">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4 text-white text-base">
                                                $2999
                                            </td>
                                        </tr>
                                        <tr className="bg-cus-black-low border-b border-gray-500">
                                            <th className="px-6 py-4 text-white text-base">
                                                Apple MacBook Pro 17
                                            </th>
                                            <td className="px-6 py-4 text-white text-base">
                                                Silver
                                            </td>
                                            <td className="px-6 py-4 text-white text-base">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4 text-white text-base">
                                                $2999
                                            </td>
                                        </tr>
                                        <tr className="bg-cus-black-low border-b border-gray-500">
                                            <th className="px-6 py-4 text-white text-base">
                                                Apple MacBook Pro 17
                                            </th>
                                            <td className="px-6 py-4 text-white text-base">
                                                Silver
                                            </td>
                                            <td className="px-6 py-4 text-white text-base">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4 text-white text-base">
                                                $2999
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                    <div className="col-span-5 h-full flex items-center justify-center pl-5">

                        <div class="border-b border-gray-200 dark:border-gray-700">
                            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
                                <li class="me-2" role="presentation">
                                    <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                                </li>
                                <li class="me-2" role="presentation">
                                    <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
                                </li>
                                <li class="me-2" role="presentation">
                                    <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
                                </li>
                                <li role="presentation">
                                    <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-styled-tab" data-tabs-target="#styled-contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
                                </li>
                            </ul>
                        </div>
                        <div id="default-styled-tab-content">
                            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
                                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                            </div>
                            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                            </div>
                            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-settings" role="tabpanel" aria-labelledby="settings-tab">
                                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                            </div>
                            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-contacts" role="tabpanel" aria-labelledby="contacts-tab">
                                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default SingleGigView;