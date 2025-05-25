import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faArrowUpRightFromSquare, faPen, faUserGraduate, faTrash, faClose } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/react";
import SecondaryButton from "../components/SecondaryButton";
import DropdownComponent from "../components/DropdownComponent";

const SellerProfile = () => {

    const { isOpen: isProOpen, onOpen: onProOpen, onOpenChange: onProOpenChange } = useDisclosure();
    const { isOpen: isAboutUsOpen, onOpen: onAboutUsOpen, onOpenChange: onAboutUsOpenChange } = useDisclosure();
    const { isOpen: isEducationOpen, onOpen: onEducationOpen, onOpenChange: onEducationOpenChange } = useDisclosure();
    const { isOpen: isSkillsOpen, onOpen: onSkillsOpen, onOpenChange: onSkillsOpenChange } = useDisclosure();

    useEffect(() => {
        document.body.classList.add("custom2");
        return () => document.body.classList.remove("custom2");
    }, []);

    return (
        <section className="bg-white custom2">

            <Navbar />

            <div className="max-w-7xl mx-auto h-full mt-24 bg-white p-5">

                <div className="flex items-center justify-start">
                    <div className="flex flex-wrap md:flex-row items-center justify-start md:justify-center">
                        <span className="text-base text-blue-700 opacity-50 cursor-pointer">Home &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp; SellerProfile</span>
                    </div>
                </div>

                <div className="mt-8 h-full w-full flex flex-col items-center justify-center bg-white border border-gray-300 shadow-xl rounded-md p-6 gap-10">
                    <div className="h-full w-full flex flex-row items-start justify-between">
                        <div className="h-full w-auto flex flex-row items-center justify-center gap-6">
                            <div className="h-32 w-32 flex items-center justify-center border-2 border-black rounded-full p-1">
                                <div className="h-full w-full flex items-center justify-center bg-cus-light-yellow-high rounded-full"></div>
                            </div>

                            <div className="h-full w-auto flex flex-col items-start justify-center gap-2.5">
                                <h2 className="text-3xl font-semibold">John Doeily</h2>
                                <div className="h-auto w-auto flex items-center justify-center gap-2">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-lg" />
                                    <p className="text-lg">Sri Lanka</p>
                                </div>
                                <button onClick={onProOpen} className="px-2 py-0.5 border border-gray-400 rounded-lg font-semibold cursor-pointer"><FontAwesomeIcon icon={faPen} className="mr-2.5 text-sm" />Edit</button>
                            </div>
                        </div>

                        <div className="h-full w-auto flex items-center justify-center">
                            <div className="h-auto w-auto flex items-center justify-between bg-black rounded-md shadow-md px-5 py-4 gap-8 cursor-pointer">
                                <p className="text-2xl text-white">Explore My Gigs</p>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-lg text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="h-full w-full flex flex-col items-start justify-center border border-gray-300 rounded-md p-5 gap-6">
                        <h2 className="text-4xl font-londrinasolid">About Us</h2>
                        <p>
                            Hi there! I am Thisal Salpura. I design responsive and user-friendly websites and applications.
                            My expertise includes web development using HTML, CSS, JavaScript, and PHP, as well as UI and UX design for
                            both web and mobile platforms. I build everything from personal websites to complex e-commerce platforms.
                            I also provide database management services, develop desktop software applications using Java and design
                            logos and icons for your brand. Let's bring your digital vision to life with a professional, modern touch.
                        </p>
                        <button onClick={onAboutUsOpen} className="px-2 py-0.5 border border-gray-400 rounded-lg font-semibold cursor-pointer"><FontAwesomeIcon icon={faPen} className="mr-2.5 text-sm" />Edit About Us</button>
                    </div>

                    <div className="h-full w-full flex flex-col items-start justify-center border border-gray-300 rounded-md p-5 gap-6">
                        <h2 className="text-4xl font-londrinasolid">Education</h2>
                        <div className="h-auto w-full flex flex-col items-center justify-start gap-3">
                            <div className="h-auto w-full flex flex-row items-center justify-between bg-gray-300 rounded-md px-4 py-3.5 gap-6">
                                <div className="h-auto w-auto flex flex-row items-center justify-center gap-6">
                                    <div className="h-12 w-12 flex items-center justify-center bg-gray-200 rounded-full p-1">
                                        <FontAwesomeIcon icon={faUserGraduate} className="text-xl text-black" />
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <h2 className="text-xl font-semibold">Birmingham City University</h2>
                                        <p>BSc Hons Software Engineering</p>
                                    </div>
                                </div>

                                <div className="h-12 w-12 flex items-center justify-center bg-gray-200 rounded-full p-1 cursor-pointer">
                                    <FontAwesomeIcon icon={faTrash} className="text-xl text-red-500" />
                                </div>
                            </div>

                            <div className="h-auto w-full flex flex-row items-center justify-between bg-gray-300 rounded-md px-4 py-3.5 gap-6">
                                <div className="h-auto w-auto flex flex-row items-center justify-center gap-6">
                                    <div className="h-12 w-12 flex items-center justify-center bg-gray-200 rounded-full p-1">
                                        <FontAwesomeIcon icon={faUserGraduate} className="text-xl text-black" />
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <h2 className="text-xl font-semibold">Java Institute</h2>
                                        <p>BSc Hons Software Engineering</p>
                                    </div>
                                </div>

                                <div className="h-12 w-12 flex items-center justify-center bg-gray-200 rounded-full p-1 cursor-pointer">
                                    <FontAwesomeIcon icon={faTrash} className="text-xl text-red-500" />
                                </div>
                            </div>
                        </div>
                        <button onClick={onEducationOpen} className="px-2 py-0.5 border border-gray-400 rounded-lg font-semibold cursor-pointer"><FontAwesomeIcon icon={faPen} className="mr-2.5 text-sm" />Edit Education</button>
                    </div>

                    <div className="h-full w-full flex flex-col items-start justify-center border border-gray-300 rounded-md p-5 gap-6">
                        <h2 className="text-4xl font-londrinasolid">Skills and Expertise</h2>
                        <div className="h-auto w-full flex flex-wrap items-center justify-start gap-6">
                            <div className="h-auto w-auto flex flex-row items-center justify-center border border-gray-400 rounded-3xl px-4 py-1 gap-4">
                                <p className="text-lg">HTML</p>
                                <FontAwesomeIcon icon={faClose} className="text-lg cursor-pointer" />
                            </div>

                            <div className="h-auto w-auto flex flex-row items-center justify-center border border-gray-400 rounded-3xl px-4 py-1 gap-4">
                                <p className="text-lg">CSS</p>
                                <FontAwesomeIcon icon={faClose} className="text-lg cursor-pointer" />
                            </div>

                            <div className="h-auto w-auto flex flex-row items-center justify-center border border-gray-400 rounded-3xl px-4 py-1 gap-4">
                                <p className="text-lg">JavaScript</p>
                                <FontAwesomeIcon icon={faClose} className="text-lg cursor-pointer" />
                            </div>

                            <div className="h-auto w-auto flex flex-row items-center justify-center border border-gray-400 rounded-3xl px-4 py-1 gap-4">
                                <p className="text-lg">PHP</p>
                                <FontAwesomeIcon icon={faClose} className="text-lg cursor-pointer" />
                            </div>

                            <div className="h-auto w-auto flex flex-row items-center justify-center border border-gray-400 rounded-3xl px-4 py-1 gap-4">
                                <p className="text-lg">Java</p>
                                <FontAwesomeIcon icon={faClose} className="text-lg cursor-pointer" />
                            </div>

                            <div className="h-auto w-auto flex flex-row items-center justify-center border border-gray-400 rounded-3xl px-4 py-1 gap-4">
                                <p className="text-lg">MySQL</p>
                                <FontAwesomeIcon icon={faClose} className="text-lg cursor-pointer" />
                            </div>

                            <div className="h-auto w-auto flex flex-row items-center justify-center border border-gray-400 rounded-3xl px-4 py-1 gap-4">
                                <p className="text-lg">React</p>
                                <FontAwesomeIcon icon={faClose} className="text-lg cursor-pointer" />
                            </div>

                            <div className="h-auto w-auto flex flex-row items-center justify-center border border-gray-400 rounded-3xl px-4 py-1 gap-4">
                                <p className="text-lg">Flutter</p>
                                <FontAwesomeIcon icon={faClose} className="text-lg cursor-pointer" />
                            </div>

                            <div className="h-auto w-auto flex flex-row items-center justify-center border border-gray-400 rounded-3xl px-4 py-1 gap-4">
                                <p className="text-lg">Bootstrap</p>
                                <FontAwesomeIcon icon={faClose} className="text-lg cursor-pointer" />
                            </div>

                            <div className="h-auto w-auto flex flex-row items-center justify-center border border-gray-400 rounded-3xl px-4 py-1 gap-4">
                                <p className="text-lg">Tailwind CSS</p>
                                <FontAwesomeIcon icon={faClose} className="text-lg cursor-pointer" />
                            </div>

                            <div className="h-auto w-auto flex flex-row items-center justify-center border border-gray-400 rounded-3xl px-4 py-1 gap-4">
                                <p className="text-lg">Firebase</p>
                                <FontAwesomeIcon icon={faClose} className="text-lg cursor-pointer" />
                            </div>
                        </div>
                        <button onClick={onSkillsOpen} className="px-2 py-0.5 border border-gray-400 rounded-lg font-semibold cursor-pointer"><FontAwesomeIcon icon={faPen} className="mr-2.5 text-sm" />Edit Skills</button>
                    </div>
                </div>

                <Modal isOpen={isProOpen} onOpenChange={onProOpenChange} hideCloseButton backdrop="blur" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />

                    <ModalContent className="h-auto max-h-3/4 w-2/4 flex flex-col items-center justify-between bg-cus-black-low rounded-sm shadow-xl p-2.5 z-50">
                        {(onClose) => (
                            <>
                                <ModalHeader className="h-auto w-full flex flex-row items-center justify-between border-b border-b-gray-400">
                                    <div className="flex flex-row items-center justify-center gap-4">
                                        <p className="text-lg font-semibold text-white">Seller's Profile Details</p>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <FontAwesomeIcon onClick={onClose} icon={faClose} className="text-xl text-white cursor-pointer" />
                                    </div>
                                </ModalHeader>
                                <ModalBody className="mt-4 mb-2.5 h-auto w-full flex flex-col items-center justify-center gap-6">
                                    <div className="flex flex-col w-full gap-1.5">
                                        <label htmlFor="sellerName" className="text-white text-sm">Seller Name</label>
                                        <input id="sellerName" name="sellerName" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="John Doeily" required />
                                    </div>

                                    <div className="flex flex-col w-full gap-1.5">
                                        <label htmlFor="sellerCountry" className="text-white text-sm">Seller Country</label>
                                        <DropdownComponent name="Seller Country" dropdownBtnClass="w-full" dropdownMenuClass="bg-white" dropdownMenuItemClass="text-black" />
                                    </div>
                                </ModalBody>
                                <ModalFooter className="h-auto w-full flex items-center justify-center">
                                    <SecondaryButton href="" containerClass="h-12 w-full bg-white text-black" name="Save" />
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>

                <Modal isOpen={isAboutUsOpen} onOpenChange={onAboutUsOpenChange} hideCloseButton backdrop="blur" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />

                    <ModalContent className="h-auto max-h-3/4 w-2/4 flex flex-col items-center justify-between bg-cus-black-low rounded-sm shadow-xl p-2.5 z-50">
                        {(onClose) => (
                            <>
                                <ModalHeader className="h-auto w-full flex flex-row items-center justify-between border-b border-b-gray-400">
                                    <div className="flex flex-row items-center justify-center gap-4">
                                        <p className="text-lg font-semibold text-white">Seller's About Us</p>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <FontAwesomeIcon onClick={onClose} icon={faClose} className="text-xl text-white cursor-pointer" />
                                    </div>
                                </ModalHeader>
                                <ModalBody className="mt-4 mb-2.5 h-auto w-full flex items-center justify-center">
                                    <textarea id="text" name="text" className="bg-blur h-36 max-h-48 w-full py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="type here..." required />
                                </ModalBody>
                                <ModalFooter className="h-auto w-full flex items-center justify-center">
                                    <SecondaryButton href="" containerClass="h-12 w-full bg-white text-black" name="Save" />
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>

                <Modal isOpen={isEducationOpen} onOpenChange={onEducationOpenChange} hideCloseButton backdrop="blur" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />

                    <ModalContent className="h-auto max-h-3/4 w-2/4 flex flex-col items-center justify-between bg-cus-black-low rounded-sm shadow-xl p-2.5 z-50">
                        {(onClose) => (
                            <>
                                <ModalHeader className="h-auto w-full flex flex-row items-center justify-between border-b border-b-gray-400">
                                    <div className="flex flex-row items-center justify-center gap-4">
                                        <p className="text-lg font-semibold text-white">Seller's Education</p>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <FontAwesomeIcon onClick={onClose} icon={faClose} className="text-xl text-white cursor-pointer" />
                                    </div>
                                </ModalHeader>
                                <ModalBody className="mt-4 mb-2.5 h-auto w-full flex flex-col items-center justify-center gap-6">
                                    <div className="flex flex-col w-full gap-1.5">
                                        <label htmlFor="universityName" className="text-white text-sm">University Name</label>
                                        <input id="universityName" name="universityName" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="Massachusetts Institute of Technology" required />
                                    </div>

                                    <div className="flex flex-col w-full gap-1.5">
                                        <label htmlFor="degreeName" className="text-white text-sm">Degree Name</label>
                                        <input id="degreeName" name="degreeName" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="BSc Hons Software Engineering" required />
                                    </div>
                                </ModalBody>
                                <ModalFooter className="h-auto w-full flex items-center justify-center">
                                    <SecondaryButton href="" containerClass="h-12 w-full bg-white text-black" name="Save" />
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>

                <Modal isOpen={isSkillsOpen} onOpenChange={onSkillsOpenChange} hideCloseButton backdrop="blur" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />

                    <ModalContent className="h-auto max-h-3/4 w-2/4 flex flex-col items-center justify-between bg-cus-black-low rounded-sm shadow-xl p-2.5 z-50">
                        {(onClose) => (
                            <>
                                <ModalHeader className="h-auto w-full flex flex-row items-center justify-between border-b border-b-gray-400">
                                    <div className="flex flex-row items-center justify-center gap-4">
                                        <p className="text-lg font-semibold text-white">Seller's Skills</p>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <FontAwesomeIcon onClick={onClose} icon={faClose} className="text-xl text-white cursor-pointer" />
                                    </div>
                                </ModalHeader>
                                <ModalBody className="mt-4 mb-2.5 h-auto w-full flex flex-col items-center justify-center gap-6">
                                    <div className="flex flex-col w-full gap-1.5">
                                        <label htmlFor="skill" className="text-white text-sm">Skill</label>
                                        <input id="skill" name="skill" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="HTML" required />
                                    </div>
                                </ModalBody>
                                <ModalFooter className="h-auto w-full flex items-center justify-center">
                                    <SecondaryButton href="" containerClass="h-12 w-full bg-white text-black" name="Save" />
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>

            </div>

        </section>
    )
}

export default SellerProfile;