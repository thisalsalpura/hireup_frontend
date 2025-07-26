import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faArrowUpRightFromSquare, faPen, faUserGraduate, faTrash, faClose } from "@fortawesome/free-solid-svg-icons";
import { loadSellerData } from "../api/LoadSellerData";
import { addQualification, addSkill } from "../api/AddQualificationAndSkill";
import { updateSellerProfile } from "../api/SellerProfileUpdate";
import SecondaryButton from "../components/SecondaryButton";

const SellerProfile = ({ setLoading }) => {

    const [showEduModal, setShowEduModal] = useState(false);

    const [showSkillModal, setShowSkillModal] = useState(false);

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

    useEffect(() => {
        (async () => {
            setLoading(true);

            try {
                await loadSellerData();
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <>
            {showEduModal && (
                <>
                    <div role="dialog" aria-modal="true" aria-labelledby="dialog-title" className="relative z-50">
                        <div aria-hidden="true" className="fixed inset-0 bg-gray-500/75 transition-opacity"></div>

                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4">
                                <div className="relative overflow-hidden rounded-lg bg-white">
                                    <div className="bg-white p-6">
                                        <div className="flex items-start justify-center">
                                            <div className="text-left">
                                                <h3 id="dialog-title" className="text-xl font-semibold text-black">Add Education Qualification</h3>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">You can add your Education Qualification from this. (Minimum 1 and Maximun 2)</p>
                                                </div>

                                                <div className="flex flex-col w-full gap-1.5 mt-5">
                                                    <label htmlFor="qualificationName" className="text-black text-sm">Qualification Name (Such as Degree or Course)</label>
                                                    <input id="qualificationName" name="qualificationName" className="bg-cus-black-low h-10 py-0.5 px-2.5 rounded-md text-white text-base" placeholder="BSc Hons Software Engineering" type="text" required />
                                                </div>

                                                <div className="flex flex-col w-full gap-1.5 mt-5">
                                                    <label htmlFor="placeName" className="text-black text-sm">Institute or University Name</label>
                                                    <input id="qualificationPlace" name="placeName" className="bg-cus-black-low h-10 w-full py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="MIT" required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white flex flex-row-reverse pt-2 pb-6 px-6 gap-2.5">
                                        <button onClick={() => setShowEduModal(false)} type="button" className="inline-flex justify-center rounded-md bg-red-400 px-3 py-1 text-lg font-semibold text-black shadow-xs ring-1 ring-red-400 ring-inset w-auto cursor-pointer">Cancel</button>
                                        <button onClick={() => addQualification(setLoading, setShowEduModal)} type="button" className="inline-flex justify-center rounded-md bg-blur px-3 py-1 text-lg font-semibold text-black shadow-xs ring-1 ring-black ring-inset w-auto cursor-pointer">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {showSkillModal && (
                <>
                    <div role="dialog" aria-modal="true" aria-labelledby="dialog-title" className="relative z-50">
                        <div aria-hidden="true" className="fixed inset-0 bg-gray-500/75 transition-opacity"></div>

                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4">
                                <div className="relative overflow-hidden rounded-lg bg-white">
                                    <div className="bg-white p-6">
                                        <div className="flex items-start justify-center">
                                            <div className="text-left">
                                                <h3 id="dialog-title" className="text-xl font-semibold text-black">Add Skills and Expertise</h3>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">You can add your Skills and Expertise from this. (Minimum 1 and Maximun 10)</p>
                                                </div>

                                                <div className="flex flex-col w-full gap-1.5 mt-5">
                                                    <label htmlFor="skillName" className="text-black text-sm">Skill Name</label>
                                                    <input id="skillName" name="skillName" className="bg-cus-black-low h-10 py-0.5 px-2.5 rounded-md text-white text-base" placeholder="WEBDEVELOPMENT" type="text" required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white flex flex-row-reverse pt-2 pb-6 px-6 gap-2.5">
                                        <button onClick={() => setShowSkillModal(false)} type="button" className="inline-flex justify-center rounded-md bg-red-400 px-3 py-1 text-lg font-semibold text-black shadow-xs ring-1 ring-red-400 ring-inset w-auto cursor-pointer">Cancel</button>
                                        <button onClick={() => addSkill(setLoading, setShowSkillModal)} type="button" className="inline-flex justify-center rounded-md bg-blur px-3 py-1 text-lg font-semibold text-black shadow-xs ring-1 ring-black ring-inset w-auto cursor-pointer">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <>
                <div className="h-full w-full flex flex-col items-center justify-center rounded-md p-6 gap-10">
                    <div className="h-full w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0">
                        <div className="h-full w-auto flex flex-row items-center justify-center gap-6">
                            <div className="h-24 md:h-32 w-24 md:w-32 flex items-center justify-center border-2 border-black rounded-full p-1">
                                <div className="h-full w-full flex items-center justify-center bg-cus-light-yellow-high rounded-full"></div>
                            </div>

                            <div className="h-full w-auto flex flex-col items-start justify-center gap-2.5">
                                <h2 id="sellerName" className="text-2xl md:text-3xl font-semibold">################</h2>
                                <div className="h-auto w-auto flex items-center justify-center gap-2">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-base md:text-lg" />
                                    <p id="sellerCountry" className="text-base md:text-lg">################</p>
                                </div>
                            </div>
                        </div>

                        <div className="h-full w-full md:w-auto flex items-center justify-center">
                            <a href="/gigRegister" className="h-auto w-full md:w-auto flex items-center justify-between bg-black rounded-md shadow-md px-5 py-4 gap-8 cursor-pointer">
                                <p className="text-xl md:text-2xl text-white">Add New Gig</p>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-base md:text-lg text-white" />
                            </a>
                        </div>
                    </div>

                    <div className="h-full w-full flex flex-col items-start justify-center border border-gray-300 rounded-md p-5 gap-6">
                        <h2 className="text-4xl font-londrinasolid">About Us</h2>
                        <textarea id="about" name="about" rows="6" className="bg-cus-black-low w-full p-2.5 rounded-md text-white text-base resize-none" type="text" placeholder="I'm John Doeily..." required />
                    </div>

                    <div className="h-full w-full flex flex-col items-start justify-center border border-gray-300 rounded-md p-5 gap-6">
                        <h2 className="text-4xl font-londrinasolid">Education Qualification</h2>
                        <div id="edu-qualification-main" className="h-auto w-full hidden flex-col items-center justify-start gap-3">
                            <div id="edu-qualification-temp" className="edu-qualification-item h-auto w-full hidden flex-col md:flex-row items-center justify-between bg-gray-300 rounded-md px-4 py-3.5 gap-6">
                                <div className="h-auto w-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                                    <div className="h-12 w-12 flex items-center justify-center bg-gray-200 rounded-full p-1 cursor-pointer">
                                        <FontAwesomeIcon icon={faUserGraduate} className="text-xl text-black" />
                                    </div>

                                    <div className="flex flex-col items-center md:items-start justify-center">
                                        <h2 id="edu-qualification-name" className="text-xl text-center md:text-left font-semibold"></h2>
                                        <p id="edu-qualification-place" className="text-center md:text-left"></p>
                                    </div>
                                </div>

                                <hr className="h-0.5 w-full flex md:hidden bg-cus-black-low opacity-10" />

                                <div id="edu-qualification-remove" className="h-12 w-12 flex items-center justify-center bg-gray-200 rounded-full p-1 cursor-pointer">
                                    <FontAwesomeIcon icon={faTrash} className="text-xl text-red-500" />
                                </div>
                            </div>
                        </div>
                        <h3 id="no-edu-qualification" className="text-lg">No Education Qualifications added yet.</h3>
                        <button onClick={() => setShowEduModal(true)} className="px-2 py-0.5 border border-gray-400 rounded-lg font-semibold cursor-pointer"><FontAwesomeIcon icon={faPen} className="mr-2.5 text-sm" />Save</button>
                    </div>

                    <div className="h-full w-full flex flex-col items-start justify-center border border-gray-300 rounded-md p-5 gap-6">
                        <h2 className="text-4xl font-londrinasolid">Skills and Expertise</h2>
                        <div id="skill-main" className="h-auto w-full hidden flex-wrap items-center justify-start gap-6">
                            <div id="skill-temp" className="skill-item h-auto w-auto hidden flex-row items-center justify-center border border-gray-400 rounded-3xl px-4 py-1 gap-4">
                                <p id="skill-name" className="text-lg"></p>
                                <FontAwesomeIcon id="skill-remove" icon={faClose} className="text-lg cursor-pointer" />
                            </div>
                        </div>
                        <h3 id="no-skill-name" className="text-lg">No Skills and Expertise added yet.</h3>
                        <button onClick={() => setShowSkillModal(true)} className="px-2 py-0.5 border border-gray-400 rounded-lg font-semibold cursor-pointer"><FontAwesomeIcon icon={faPen} className="mr-2.5 text-sm" />Save</button>
                    </div>

                    <div className="h-full w-full flex items-center md:items-end justify-center md:justify-end">
                        <div className="h-auto w-full md:w-auto">
                            <SecondaryButton onClick={() => updateSellerProfile(setLoading)} containerClass="w-full md:w-fit h-full bg-cus-black-low text-white" name="Save" />
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default SellerProfile;