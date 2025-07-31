import React, { useEffect, useState } from "react";
import { loadSellerActiveGigsData, changeToInactiveGig } from "../api/LoadSellerActiveGigsData";
import { loadSellerInactiveGigsData, changeToActiveGig } from "../api/LoadSellerInactiveGigsData";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const SellerGigs = ({ setLoading }) => {

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
                } else if (json.redirect === "NOTOP") {
                    window.location.href = "/userProfile";
                }
            }
        })();
    }, []);

    const [activeGigs, setActiveGigs] = useState([]);

    const [inactiveGigs, setInactiveGigs] = useState([]);

    useEffect(() => {
        (async () => {
            setLoading(true);

            try {
                await loadSellerActiveGigsData(setLoading, setActiveGigs);
                await loadSellerInactiveGigsData(setLoading, setInactiveGigs)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <>
            <div className="h-full w-full flex flex-col items-center justify-center border border-gray-300 rounded-md p-6 gap-10">
                <div className="h-full w-full">
                    <Tabs className={"w-full"} forceRenderTabPanel>
                        <TabList>
                            <Tab><p className="text-black font-semibold">Active Gigs</p></Tab>
                            <Tab><p className="text-black font-semibold">Inactive Gigs</p></Tab>
                        </TabList>

                        <TabPanel>
                            <div className="relative overflow-x-auto cusxscroll">
                                <table className="h-full w-full border-separate border-spacing-y-1">
                                    <caption className="p-5 bg-cus-black-low rounded-md">
                                        <h2 className="text-3xl text-white text-left font-londrinasolid tracking-wide">My Active Gig</h2>
                                        <p className="text-white text-left mt-2.5">Change your Active Gig status as Inactive</p>
                                    </caption>

                                    <thead className="bg-gray-500">
                                        <tr>
                                            <th className="px-6 py-3 text-black text-lg font-semibold text-left rounded-tl-md rounded-bl-md">
                                                Gig
                                            </th>
                                            <th className="px-6 py-3 text-black text-lg font-semibold text-left">
                                                Category
                                            </th>
                                            <th className="px-6 py-3 text-black text-lg font-semibold text-left">
                                                Sub Category
                                            </th>
                                            <th className="px-6 py-3 text-black text-lg font-semibold text-left rounded-tr-md rounded-br-md">                                    </th>
                                        </tr>
                                    </thead>

                                    <tbody id="seller-active-gigs-main">
                                        {activeGigs.length > 0 ? (
                                            activeGigs.map((gig, index) => (
                                                <tr key={index} id="seller-active-gig" className="bg-cus-black-low border-b border-gray-500">
                                                    <td className="px-6 py-4 rounded-tl-md rounded-bl-md">
                                                        <div className="flex items-start justify-start gap-4">
                                                            <div className="h-12 w-20 bg-white rounded-md overflow-hidden shrink-0">
                                                                <img id="seller-active-gig-image" className="h-full w-full object-cover" src={gig.image} alt="gig-main-img" />
                                                            </div>
                                                            <p id="seller-active-gig-title" className="w-64 text-white text-xs lg:text-base text-left font-normal break-words line-clamp-3">{gig.title}</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-start justify-start text-white text-xs lg:text-base h-full w-full">
                                                            <p id="seller-active-gig-category">{gig.sub_Category.category.name}</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-start justify-start text-white text-xs lg:text-base h-full w-full">
                                                            <p id="seller-active-gig-subcategory">{gig.sub_Category.name}</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 rounded-tr-md rounded-br-md">
                                                        <div className="flex items-start justify-start text-white text-xs lg:text-base h-full w-full">
                                                            <button onClick={() => changeToInactiveGig(setLoading, gig.id, activeGigs, setActiveGigs, inactiveGigs, setInactiveGigs)} id="change-active-gig-visible-btn" type="button" className="w-full inline-flex justify-center rounded-md bg-white px-3 py-1 text-lg font-semibold text-black shadow-xs hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">Change Visible</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr id="empty-seller-active-gigs" className="bg-cus-black-low border-b border-gray-500">
                                                <td className="px-6 py-4 text-center text-white text-lg rounded-md" colSpan="5">
                                                    <p>No Active Gigs Found!</p>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className="relative overflow-x-auto cusxscroll">
                                <table className="h-full w-full border-separate border-spacing-y-1">
                                    <caption className="p-5 bg-cus-black-low rounded-md">
                                        <h2 className="text-3xl text-white text-left font-londrinasolid tracking-wide">My Inactive Gig</h2>
                                        <p className="text-white text-left mt-2.5">Change your Inactive Gig status as Active</p>
                                    </caption>

                                    <thead className="bg-gray-500">
                                        <tr>
                                            <th className="px-6 py-3 text-black text-lg font-semibold text-left rounded-tl-md rounded-bl-md">
                                                Gig
                                            </th>
                                            <th className="px-6 py-3 text-black text-lg font-semibold text-left">
                                                Category
                                            </th>
                                            <th className="px-6 py-3 text-black text-lg font-semibold text-left">
                                                Sub Category
                                            </th>
                                            <th className="px-6 py-3 text-black text-lg font-semibold text-left rounded-tr-md rounded-br-md">                                    </th>
                                        </tr>
                                    </thead>

                                    <tbody id="seller-inactive-gigs-main">
                                        {inactiveGigs.length > 0 ? (
                                            inactiveGigs.map((gig, index) => (
                                                <tr key={index} id="seller-inactive-gig" className="bg-cus-black-low border-b border-gray-500">
                                                    <td className="px-6 py-4 rounded-tl-md rounded-bl-md">
                                                        <div className="flex items-start justify-start gap-4">
                                                            <div className="h-12 w-20 bg-white rounded-md overflow-hidden shrink-0">
                                                                <img id="seller-inactive-gig-image" className="h-full w-full object-cover" src={gig.image} alt="gig-main-img" />
                                                            </div>
                                                            <p id="seller-inactive-gig-title" className="w-64 text-white text-xs lg:text-base text-left font-normal break-words line-clamp-3">{gig.title}</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-start justify-start text-white text-xs lg:text-base h-full w-full">
                                                            <p id="seller-inactive-gig-category">{gig.sub_Category.category.name}</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-start justify-start text-white text-xs lg:text-base h-full w-full">
                                                            <p id="seller-inactive-gig-subcategory">{gig.sub_Category.name}</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 rounded-tr-md rounded-br-md">
                                                        <div className="flex items-start justify-start text-white text-xs lg:text-base h-full w-full">
                                                            <button onClick={() => changeToActiveGig(setLoading, gig.id, activeGigs, setActiveGigs, inactiveGigs, setInactiveGigs)} id="change-inactive-gig-visible-btn" type="button" className="w-full inline-flex justify-center rounded-md bg-white px-3 py-1 text-lg font-semibold text-black shadow-xs hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">Change Visible</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr id="empty-seller-inactive-gigs" className="bg-cus-black-low border-b border-gray-500">
                                                <td className="px-6 py-4 text-center text-white text-lg rounded-md" colSpan="5">
                                                    <p>No Inactive Gigs Found!</p>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default SellerGigs;