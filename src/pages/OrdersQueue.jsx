import React from "react";
import Navbar from "./Navbar";
import Button from "../components/Button";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const OrdersQueue = () => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <section className="bg-white custom2">

            <Navbar />

            <div className="relative max-w-7xl mx-auto h-full mt-24 bg-white p-5">
                <div className="flex items-center justify-start">
                    <div className="flex flex-wrap md:flex-row items-center justify-start md:justify-center">
                        <span className="text-base text-blue-700 opacity-50 cursor-pointer">Home &nbsp;{">"}&nbsp;</span>
                        <span className="text-base text-blue-700 opacity-100 cursor-pointer">&nbsp; OrdersQueue</span>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-8 py-4 px-2 mt-8">
                    <div className="h-full w-full bg-white flex flex-col items-center justify-between border border-gray-300 rounded-md shadow-lg p-5">
                        <div className="h-full w-full flex flex-row items-center justify-start gap-5">
                            <div className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-black p-0.5">
                                <div className="h-full w-full bg-cus-light-yellow-high rounded-full"></div>
                            </div>

                            <p className="text-lg font-semibold">Tim David</p>
                        </div>

                        <div className="h-full w-full grid grid-cols-12 mt-5">
                            <div className="col-span-6 flex items-center justify-center">
                                <div className="h-full w-full bg-cus-light-yellow-low rounded-md">

                                </div>
                            </div>

                            <div className="col-span-6 flex flex-col items-start justify-between pl-6">
                                <div className="h-full w-full flex flex-col items-end justify-center">
                                    <h2 className="text-right text-2xl font-bold">Note :-</h2>
                                    <p className="text-right">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos pariatur beatae amet quis accusantium sit hic quo ipsum veniam quibusdam tempore, unde minus laborum ipsam sint fugit non animi facere!
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at aut eum, culpa tempora perspiciatis asperiores iusto, voluptate corrupti dicta ipsam provident perferendis repellendus laboriosam natus quasi facilis possimus. Error.
                                    </p>
                                </div>

                                <div onClick={onOpen} className="h-full w-full flex items-center justify-end mt-8">
                                    <Button name="Let's Talk" frontClasses="text-black h-10 w-full border-2 border-black px-12" backClasses="h-10 w-full bg-cus-light-yellow-high" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-full w-full bg-white flex flex-col items-center justify-between border border-gray-300 rounded-md shadow-lg p-5">
                        <div className="h-full w-full flex flex-row items-center justify-start gap-5">
                            <div className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-black p-0.5">
                                <div className="h-full w-full bg-cus-light-yellow-high rounded-full"></div>
                            </div>

                            <p className="text-lg font-semibold">Tim David</p>
                        </div>

                        <div className="h-full w-full grid grid-cols-12 mt-5">
                            <div className="col-span-6 flex items-center justify-center">
                                <div className="h-full w-full bg-cus-light-yellow-low rounded-md">

                                </div>
                            </div>

                            <div className="col-span-6 flex flex-col items-start justify-between pl-6">
                                <div className="h-full w-full flex flex-col items-end justify-center">
                                    <h2 className="text-right text-2xl font-bold">Note :-</h2>
                                    <p className="text-right">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos pariatur beatae amet quis accusantium sit hic quo ipsum veniam quibusdam tempore, unde minus laborum ipsam sint fugit non animi facere!
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at aut eum, culpa tempora perspiciatis asperiores iusto, voluptate corrupti dicta ipsam provident perferendis repellendus laboriosam natus quasi facilis possimus. Error.
                                    </p>
                                </div>

                                <div onClick={onOpen} className="h-full w-full flex items-center justify-end mt-8">
                                    <Button name="Let's Talk" frontClasses="text-black h-10 w-full border-2 border-black px-12" backClasses="h-10 w-full bg-cus-light-yellow-high" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-full w-full bg-white flex flex-col items-center justify-between border border-gray-300 rounded-md shadow-lg p-5">
                        <div className="h-full w-full flex flex-row items-center justify-start gap-5">
                            <div className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-black p-0.5">
                                <div className="h-full w-full bg-cus-light-yellow-high rounded-full"></div>
                            </div>

                            <p className="text-lg font-semibold">Tim David</p>
                        </div>

                        <div className="h-full w-full grid grid-cols-12 mt-5">
                            <div className="col-span-6 flex items-center justify-center">
                                <div className="h-full w-full bg-cus-light-yellow-low rounded-md">

                                </div>
                            </div>

                            <div className="col-span-6 flex flex-col items-start justify-between pl-6">
                                <div className="h-full w-full flex flex-col items-end justify-center">
                                    <h2 className="text-right text-2xl font-bold">Note :-</h2>
                                    <p className="text-right">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos pariatur beatae amet quis accusantium sit hic quo ipsum veniam quibusdam tempore, unde minus laborum ipsam sint fugit non animi facere!
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at aut eum, culpa tempora perspiciatis asperiores iusto, voluptate corrupti dicta ipsam provident perferendis repellendus laboriosam natus quasi facilis possimus. Error.
                                    </p>
                                </div>

                                <div onClick={onOpen} className="h-full w-full flex items-center justify-end mt-8">
                                    <Button name="Let's Talk" frontClasses="text-black h-10 w-full border-2 border-black px-12" backClasses="h-10 w-full bg-cus-light-yellow-high" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton backdrop="blur" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />

                    <ModalContent className="h-auto max-h-3/4 w-2/4 flex flex-col items-center justify-between bg-cus-black-low rounded-sm shadow-xl p-2.5 z-50">
                        {(onClose) => (
                            <>
                                <ModalHeader className="h-auto w-full flex flex-row items-center justify-between border-b border-b-gray-400">
                                    <div className="flex flex-row items-center justify-center gap-4">
                                        <div className="h-9 w-9 flex items-center justify-center rounded-full border-2 border-white p-0.5">
                                            <div className="h-full w-full bg-cus-light-yellow-high rounded-full"></div>
                                        </div>

                                        <p className="text-lg font-semibold text-white">Tim David</p>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <FontAwesomeIcon onClick={onClose} icon={faClose} className="text-xl text-white cursor-pointer" />
                                    </div>
                                </ModalHeader>
                                <ModalBody className="mt-4 mb-2.5 grid grid-cols-12 gap-4 overflow-y-auto">
                                    <>
                                        <div className="col-span-6 flex flex-row items-start justify-start gap-2">
                                            <div className="h-7 w-7 aspect-square flex items-center justify-center rounded-full border border-white p-0.5 shrink-0">
                                                <div className="h-full w-full bg-cus-light-yellow-high rounded-full"></div>
                                            </div>

                                            <div className="h-full w-full bg-white flex flex-col rounded-tr-md rounded-bl-md rounded-br-md shadow-xl p-2.5 gap-1.5">
                                                <p className="text-black text-left text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis non adipisci at mollitia alias debitis cumque asperiores dolor quos, hic fugiat. Quas beatae, quidem nihil provident nesciunt eos iusto.</p>
                                                <p className="text-black opacity-40 text-xs text-right">14.36</p>
                                            </div>
                                        </div>

                                        <div className="col-span-6"></div>
                                    </>

                                    <>
                                        <div className="col-span-6"></div>

                                        <div className="col-span-6 flex flex-row items-start justify-end gap-2">
                                            <div className="h-full w-full bg-white flex flex-col rounded-tl-md rounded-bl-md rounded-br-md shadow-xl p-2.5 gap-1.5">
                                                <p className="text-black text-right text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis non adipisci at mollitia alias debitis cumque asperiores dolor quos, hic fugiat. Quas beatae, quidem nihil provident nesciunt eos iusto.</p>
                                                <p className="text-black opacity-40 text-xs text-left">16.44</p>
                                            </div>

                                            <div className="h-7 w-7 aspect-square flex items-center justify-center rounded-full border border-white p-0.5 shrink-0">
                                                <div className="h-full w-full bg-cus-light-yellow-high rounded-full"></div>
                                            </div>
                                        </div>
                                    </>

                                    <>
                                        <div className="col-span-6 flex flex-row items-start justify-start gap-2">
                                            <div className="h-7 w-7 aspect-square flex items-center justify-center rounded-full border border-white p-0.5 shrink-0">
                                                <div className="h-full w-full bg-cus-light-yellow-high rounded-full"></div>
                                            </div>

                                            <div className="h-full w-full bg-white flex flex-col rounded-tr-md rounded-bl-md rounded-br-md shadow-xl p-2.5 gap-1.5">
                                                <p className="text-black text-left text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis non adipisci at mollitia alias debitis cumque asperiores dolor quos, hic fugiat. Quas beatae, quidem nihil provident nesciunt eos iusto.</p>
                                                <p className="text-black opacity-40 text-xs text-right">14.36</p>
                                            </div>
                                        </div>

                                        <div className="col-span-6"></div>
                                    </>

                                    <>
                                        <div className="col-span-6"></div>

                                        <div className="col-span-6 flex flex-row items-start justify-end gap-2">
                                            <div className="h-full w-full bg-white flex flex-col rounded-tl-md rounded-bl-md rounded-br-md shadow-xl p-2.5 gap-1.5">
                                                <p className="text-black text-right text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis non adipisci at mollitia alias debitis cumque asperiores dolor quos, hic fugiat. Quas beatae, quidem nihil provident nesciunt eos iusto.</p>
                                                <p className="text-black opacity-40 text-xs text-left">16.44</p>
                                            </div>

                                            <div className="h-7 w-7 aspect-square flex items-center justify-center rounded-full border border-white p-0.5 shrink-0">
                                                <div className="h-full w-full bg-cus-light-yellow-high rounded-full"></div>
                                            </div>
                                        </div>
                                    </>
                                </ModalBody>
                                <ModalFooter className="h-auto w-full flex flex-row items-center justify-center gap-4">
                                    <input id="text" name="text" className="bg-blur h-10 w-full py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="type here..." required />

                                    <div className="h-10 w-16 bg-blur rounded-md flex items-center justify-center cursor-pointer">
                                        <FontAwesomeIcon icon={faPaperPlane} className="text-lg text-white" />
                                    </div>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>

        </section>
    )
}

export default OrdersQueue;