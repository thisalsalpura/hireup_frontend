import React from "react";
import Button from "../components/Button";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import signinImg from "../assets/images/signin.svg";
import registerImg from "../assets/images/register.svg";

const Login = () => {
    return (
        <section className="bg-white h-full">
            <div className="max-w-7xl mx-auto h-full bg-white">
                <div className="h-full w-full grid grid-cols-12">
                    <div className="relative overflow-hidden h-full w-full hidden lg:flex items-center justify-center lg:col-span-7 p-3">
                        <div className="h-full w-full flex items-center justify-center z-10">
                            <img src={signinImg} alt="signin_img" className="object-cover h-[500px]" />
                        </div>
                        <h2 className="absolute text-black text-6xl text-center font-londrinasolid z-20">Welcome! <br />HireUp</h2>
                    </div>

                    <div className="h-full w-full flex items-center justify-center col-span-12 lg:col-span-5 p-4 sm:p-6">
                        <div className="h-full w-full flex flex-col bg-cus-black-low rounded-xl shadow-xl border border-black p-5 sm:p-8">
                            <h2 className="text-white text-2xl text-left font-semibold">Sign In</h2>

                            <div className="flex flex-col w-full gap-1.5 mt-5">
                                <label htmlFor="email" className="text-white text-sm">Email</label>
                                <input id="email" name="email" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="email" placeholder="name@gmail.com" required />
                            </div>

                            <div className="flex flex-col w-full gap-1.5 mt-5">
                                <label htmlFor="password" className="text-white text-sm">Password</label>
                                <input id="password" name="password" className="bg-blur h-10 py-0.5 px-2.5 rounded-md text-white text-base" type="password" placeholder="••••••••" required />
                            </div>

                            <div className="flex flex-row items-center justify-between mt-5">
                                <label className="flex items-center space-x-2.5">
                                    <input
                                        type="checkbox"
                                        className="bg-blur rounded-md h-4 w-4 cursor-pointer focus:ring-2 focus:ring-blue-700"
                                        required
                                    />
                                    <span className="text-white text-sm sm:text-base">Remember Me</span>
                                </label>

                                <label className="text-blue-700 text-sm sm:text-base"><a href="/">Forgot Password?</a></label>
                            </div>

                            <Button name="SignIn" containerClass="mt-8" frontClasses="text-white h-10 w-full border-2 border-white" backClasses="h-10 w-full bg-blue-700" />

                            <p className="text-white text-sm sm:text-base tracking-wide mt-4">Not registered? <a href="/" className="text-blue-700">Create account</a></p>

                            <Button name="Google SignIn" icon={faGoogle} containerClass="mt-4" frontClasses="text-blue-700 h-10 w-full border-2 border-blue-700" backClasses="h-10 w-full bg-white" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;