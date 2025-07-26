import React, { useEffect } from "react";

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

    return (
        <>
            <div className="h-full w-full flex flex-col items-center justify-center rounded-md p-6 gap-10">
                <div className="h-full w-full">
                    <div className="relative overflow-x-auto cusxscroll">
                        <table className="h-full w-full border-separate border-spacing-y-1">
                            <caption className="p-5 bg-cus-black-low rounded-md">
                                <h2 className="text-3xl text-white text-left">My Gigs</h2>
                                <p className="text-xs md:text-sm text-white text-left mt-2">Here you can manage all the services you offer on the platform. Track the status of your gigs, update pricing or descriptions, and showcase your skills to potential buyers. Keep your listings fresh to attract more clients.</p>
                            </caption>

                            <thead className="bg-gray-500">
                                <tr>
                                    <th className="px-6 py-3 text-black text-lg font-semibold text-left rounded-tl-md rounded-bl-md">
                                        Gig
                                    </th>
                                    <th className="px-6 py-3 text-black text-lg font-semibold text-center">
                                        Price
                                    </th>
                                    <th className="px-6 py-3 text-black text-lg font-semibold text-center">
                                        Rating
                                    </th>
                                    <th className="px-6 py-3 text-black text-lg font-semibold text-center rounded-tr-md rounded-br-md">
                                        Orders
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="bg-cus-black-low border-b border-gray-500">
                                    <th className="px-6 py-4 rounded-tl-md rounded-bl-md">
                                        <div className="flex items-start justify-start gap-4">
                                            <div className="h-12 w-20 bg-white rounded-md shrink-0">

                                            </div>
                                            <p className="w-full text-white text-xs lg:text-base text-left font-normal break-words">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nesciunt cumque rem reiciendis sequi molestias optio perspiciatis,
                                                autem maxime ipsa fuga placeat non, repellendus modi officiis quae natus alias repellat.
                                            </p>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">
                                        <div className="flex items-start justify-center text-white text-xs lg:text-base h-full w-full">
                                            <p>$3200</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-start justify-center text-white text-xs lg:text-base h-full w-full">
                                            <p>4.7</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 rounded-tr-md rounded-br-md">
                                        <div className="flex items-start justify-center text-white text-xs lg:text-base h-full w-full">
                                            <p>21+</p>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="bg-cus-black-low border-b border-gray-500">
                                    <th className="px-6 py-4 rounded-tl-md rounded-bl-md">
                                        <div className="flex items-start justify-start gap-4">
                                            <div className="h-12 w-20 bg-white rounded-md shrink-0">

                                            </div>
                                            <p className="w-full text-white text-xs lg:text-base text-left font-normal break-words">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">
                                        <div className="flex items-start justify-center text-white text-xs lg:text-base h-full w-full">
                                            <p>$3200</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-start justify-center text-white text-xs lg:text-base h-full w-full">
                                            <p>4.7</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 rounded-tr-md rounded-br-md">
                                        <div className="flex items-start justify-center text-white text-xs lg:text-base h-full w-full">
                                            <p>21+</p>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="bg-cus-black-low border-b border-gray-500">
                                    <th className="px-6 py-4 rounded-tl-md rounded-bl-md">
                                        <div className="flex items-start justify-start gap-4">
                                            <div className="h-12 w-20 bg-white rounded-md shrink-0">

                                            </div>
                                            <p className="w-full text-white text-xs lg:text-base text-left font-normal break-words">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nesciunt cumque rem reiciendis sequi molestias optio perspiciatis,
                                                autem maxime ipsa fuga placeat non, repellendus modi officiis quae natus alias repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Voluptatum, ab. Voluptate, fuga quibusdam. Numquam soluta reprehenderit fuga, quasi odio eligendi, eius eos optio sapiente dolor sit voluptates
                                                ducimus enim inventore.
                                            </p>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">
                                        <div className="flex items-start justify-center text-white text-xs lg:text-base h-full w-full">
                                            <p>$3200</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-start justify-center text-white text-xs lg:text-base h-full w-full">
                                            <p>4.7</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 rounded-tr-md rounded-br-md">
                                        <div className="flex items-start justify-center text-white text-xs lg:text-base h-full w-full">
                                            <p>21+</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellerGigs;