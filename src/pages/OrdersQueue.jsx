import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Button from "../components/Button";

const OrdersQueue = () => {

    useEffect(() => {
        document.body.classList.add("custom2");
        return () => document.body.classList.remove("custom2");
    }, []);

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
                            <div className="col-span-12 md:col-span-6 flex items-center justify-center">
                                <div className="h-56 md:h-full w-full bg-cus-light-yellow-low rounded-md">

                                </div>
                            </div>

                            <div className="mt-10 md:mt-0 col-span-12 md:col-span-6 flex flex-col items-center justify-between pl-0 md:pl-6">
                                <div className="h-full w-full flex flex-col items-start md:items-end justify-center">
                                    <h2 className="text-left md:text-right text-2xl font-bold">Note :-</h2>
                                    <p className="text-left md:text-right">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos pariatur beatae amet quis accusantium sit hic quo ipsum veniam quibusdam tempore, unde minus laborum ipsam sint fugit non animi facere!
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at aut eum, culpa tempora perspiciatis asperiores iusto, voluptate corrupti dicta ipsam provident perferendis repellendus laboriosam natus quasi facilis possimus. Error.
                                    </p>
                                </div>

                                <div className="h-full w-full flex flex-col md:items-end justify-center mt-8">
                                    <Button name="Let's Talk" frontClasses="text-black h-10 w-full md:w-32 border-2 border-black px-12" backClasses="h-10 w-full md:w-32 bg-cus-light-yellow-high" />
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
                            <div className="col-span-12 md:col-span-6 flex items-center justify-center">
                                <div className="h-56 md:h-full w-full bg-cus-light-yellow-low rounded-md">

                                </div>
                            </div>

                            <div className="mt-10 md:mt-0 col-span-12 md:col-span-6 flex flex-col items-center justify-between pl-0 md:pl-6">
                                <div className="h-full w-full flex flex-col items-start md:items-end justify-center">
                                    <h2 className="text-left md:text-right text-2xl font-bold">Note :-</h2>
                                    <p className="text-left md:text-right">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos pariatur beatae amet quis accusantium sit hic quo ipsum veniam quibusdam tempore, unde minus laborum ipsam sint fugit non animi facere!
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at aut eum, culpa tempora perspiciatis asperiores iusto, voluptate corrupti dicta ipsam provident perferendis repellendus laboriosam natus quasi facilis possimus. Error.
                                    </p>
                                </div>

                                <div className="h-full w-full flex flex-col md:items-end justify-center mt-8">
                                    <Button name="Let's Talk" frontClasses="text-black h-10 w-full md:w-32 border-2 border-black px-12" backClasses="h-10 w-full md:w-32 bg-cus-light-yellow-high" />
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
                            <div className="col-span-12 md:col-span-6 flex items-center justify-center">
                                <div className="h-56 md:h-full w-full bg-cus-light-yellow-low rounded-md">

                                </div>
                            </div>

                            <div className="mt-10 md:mt-0 col-span-12 md:col-span-6 flex flex-col items-center justify-between pl-0 md:pl-6">
                                <div className="h-full w-full flex flex-col items-start md:items-end justify-center">
                                    <h2 className="text-left md:text-right text-2xl font-bold">Note :-</h2>
                                    <p className="text-left md:text-right">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos pariatur beatae amet quis accusantium sit hic quo ipsum veniam quibusdam tempore, unde minus laborum ipsam sint fugit non animi facere!
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at aut eum, culpa tempora perspiciatis asperiores iusto, voluptate corrupti dicta ipsam provident perferendis repellendus laboriosam natus quasi facilis possimus. Error.
                                    </p>
                                </div>

                                <div className="h-full w-full flex flex-col md:items-end justify-center mt-8">
                                    <Button name="Let's Talk" frontClasses="text-black h-10 w-full md:w-32 border-2 border-black px-12" backClasses="h-10 w-full md:w-32 bg-cus-light-yellow-high" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default OrdersQueue;