import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import verificationImg from "../assets/images/verification.svg";
import { VerifyUser } from "../api/UserVerification";
import { Slab } from "react-loading-indicators";

const UserVerification = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:8080/hireup_backend/SessionServlet", {
                method: "GET",
                credentials: "include"
            });

            if (response.ok) {
                const json = await response.json();
                if (json.redirect === "YES") {
                    window.location.href = "/home";
                }
            }
        })();
    }, []);

    return (
        <section className="bg-white h-full">
            <div className={`h-screen w-full ${loading ? "flex" : "hidden"} items-center justify-center`}>
                <Slab color="#000000" size="medium" text="" textColor="" />
            </div>

            <div className={`max-w-7xl mx-auto ${loading ? "hidden" : "flex"} h-full bg-white`}>
                <div className="relative h-full w-full grid grid-cols-12 items-center justify-center">

                    <div className="relative overflow-hidden h-full w-full hidden lg:flex lg:col-span-7 items-center justify-center p-3">
                        <div className="h-full w-full flex items-center justify-center">
                            <h2 className="absolute bg-transparent text-transparent tracking-widest cus-text-style cus-text-style-black text-6xl font-londrinasolid z-20">Welcome! <br />HireUp</h2>

                            <div className="h-full w-full flex items-center justify-center z-10">
                                <img src={verificationImg} alt="signin_img" className="object-cover h-[500px]" />
                            </div>
                        </div>
                    </div>

                    <div className="relative h-fit w-full flex col-span-12 lg:col-span-5 items-center justify-center p-4 sm:p-6">
                        <div className="h-full w-full flex flex-col bg-cus-black-low rounded-xl shadow-xl border border-black p-5 sm:p-8">
                            <h2 className="text-white text-2xl text-left font-semibold">Verification</h2>

                            <div className="flex flex-col w-full gap-1.5 mt-5">
                                <label htmlFor="verification" className="text-white text-sm">Verification Code</label>
                                <input id="verification" name="verification" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="text" placeholder="••••••••" required />
                            </div>

                            <Button onClick={() => VerifyUser(setLoading)} name="Verify" containerClass="mt-8" frontClasses="text-white h-10 w-full border-2 border-white" backClasses="h-10 w-full bg-blue-700" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default UserVerification;