import React, { useEffect } from "react";
import Button from "../components/Button";
import signinImg from "../assets/images/signin.svg";
import { motion, AnimatePresence } from "framer-motion";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import SecondaryButton from "../components/SecondaryButton";

const AdminLogin = () => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    useEffect(() => {
        document.body.classList.add("custom2");
        return () => document.body.classList.remove("custom2");
    }, []);

    return (
        <section className="bg-white h-full">
            <div className="relative max-w-7xl mx-auto h-full bg-white">
                <div className="relative h-full w-full grid grid-cols-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="signin"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.5 }}
                            className="relative h-full w-full col-span-12 lg:col-span-12 grid grid-cols-12"
                        >

                            <div className="relative overflow-hidden h-full w-full hidden lg:flex lg:col-span-7 items-center justify-center p-3">
                                <div className="h-full w-full flex items-center justify-center">
                                    <h2 className="absolute bg-transparent text-transparent cus-text-style cus-text-style-black text-6xl font-londrinasolid z-20">Welcome! <br />HireUp</h2>

                                    <div className="h-full w-full flex items-center justify-center z-10">
                                        <img src={signinImg} alt="signin_img" className="object-cover h-[500px]" />
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-full w-full flex col-span-12 lg:col-span-5 items-center justify-center p-4 sm:p-6">
                                <div className="h-fit w-full flex flex-col bg-cus-black-low rounded-xl shadow-xl border border-black p-5 sm:p-8">
                                    <h2 className="text-white text-2xl text-left font-semibold">Admin Login</h2>

                                    <div className="flex flex-col w-full gap-1.5 mt-5">
                                        <label htmlFor="email" className="text-white text-sm">Email</label>
                                        <input id="email" name="email" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="email" placeholder="name@gmail.com" required />
                                    </div>

                                    <div className="flex flex-col w-full gap-1.5 mt-5">
                                        <label htmlFor="password" className="text-white text-sm">Password</label>
                                        <input id="password" name="password" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="password" placeholder="••••••••" required />
                                    </div>

                                    <div onClick={onOpen} className="h-full w-full">
                                        <Button name="Admin Login" containerClass="mt-8" frontClasses="text-white h-10 w-full border-2 border-white" backClasses="h-10 w-full bg-blue-700" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton backdrop="blur" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />

                    <ModalContent className="h-auto max-h-3/4 w-1/3 flex flex-col items-center justify-between bg-cus-black-low rounded-sm shadow-xl p-2.5 z-50">
                        {(onClose) => (
                            <>
                                <ModalHeader className="h-auto w-full flex flex-row items-center justify-between border-b border-b-gray-400">
                                    <div className="flex flex-row items-center justify-center gap-4">
                                        <p className="text-lg font-semibold text-white">Admin Verification</p>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <FontAwesomeIcon onClick={onClose} icon={faClose} className="text-xl text-white cursor-pointer" />
                                    </div>
                                </ModalHeader>
                                <ModalBody className="mt-4 mb-2.5 h-auto w-full flex items-center justify-center">
                                    <input id="text" name="text" className="bg-blur h-10 w-full py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="type here..." required />
                                </ModalBody>
                                <ModalFooter className="h-auto w-full flex items-center justify-center">
                                    <SecondaryButton href="/adminDashboard" containerClass="h-12 w-full bg-white text-black" name="Verify" />
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </section>
    )
}

export default AdminLogin;