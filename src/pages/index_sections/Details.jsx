import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { paths } from "../../constants/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import Button from "../../components/Button";

const Details = () => {
    return (
        <section className="h-full">
            <div className="h-full bg-cus-black-low rounded-xl p-5 mt-12">
                <h2 className="font-londrinasolid text-4xl text-white">Categories</h2>

                <div className="h-full w-full mt-5">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="h-64 lg:h-80 bg-transparent flex items-center justify-center"
                    >
                        {paths.map(({ id, title, icon }) => (
                            <SwiperSlide key={id} className="bg-blur rounded-xl flex items-center justify-center">
                                <div className="absolute h-full w-full flex items-center justify-center z-10 opacity-25">
                                    <FontAwesomeIcon icon={icon} className="text-9xl text-black" />
                                </div>

                                <div className="h-full w-full flex items-center justify-center p-5 z-20">
                                    <p className="text-center text-4xl sm:text-5xl lg:text-9xl font-londrinasolid bg-transparent text-transparent cus-text-style">{title}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div >

            <div className="h-full bg-cus-black-low rounded-xl p-5 mt-12">
                <div className="bg-blur grid grid-cols-12 grid-rows-12 h-full w-full rounded-xl items-center justify-center px-0 sm:px-3">
                    <div className="col-span-12 lg:col-span-4 row-span-2 lg:row-span-12 h-full py-6 px-3 flex items-center justify-center">
                        <p className="text-4xl lg:text-7xl text-center lg:text-left font-londrinasolid tracking-wider font-medium bg-transparent text-transparent cus-text-style">Let's work Together!</p>
                    </div>

                    <div className="col-span-12 lg:col-span-4 row-span-5 lg:row-span-12 h-full py-6 px-4 flex items-center justify-center">
                        <div className="h-full w-full bg-white flex flex-col justify-between shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out rounded-xl p-5">
                            <div className="h-full w-full flex flex-col items-center justify-center">
                                <h2 className="text-black text-2xl md:text-3xl text-center font-semibold">Seller</h2>

                                <hr className="bg-black mt-6 w-full opacity-25" />

                                <p className="mt-7 text-center text-black text-base md:text-lg xl:text-xl tracking-wide">Turn your skills into income. Create your profile, showcase your expertise, and start getting hired by clients who value what you do.</p>
                            </div>

                            <Button name="Join as a Seller" containerClass="mt-10" frontClasses="text-black h-10 w-full border-2 border-black" backClasses="h-10 w-full bg-cus-light-yellow-high" />
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-4 row-span-5 lg:row-span-12 h-full py-6 px-4 flex items-center justify-center">
                        <div className="h-full w-full bg-white flex flex-col justify-between shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out rounded-xl p-5">
                            <div className="h-full w-full flex flex-col items-center justify-center">
                                <h2 className="text-black text-2xl md:text-3xl text-center font-semibold">Buyer</h2>

                                <hr className="bg-black mt-6 w-full opacity-25" />

                                <p className="mt-7 text-center text-black text-base md:text-lg xl:text-xl tracking-wide">Find skilled freelancers ready to bring your ideas to life. Post your project, connect with talent, and get quality work done—on your terms.</p>
                            </div>

                            <Button name="Join as a Buyer" containerClass="mt-10" frontClasses="text-white h-10 w-full border-2 border-black" backClasses="h-10 w-full bg-cus-dark-purple" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-full bg-cus-black-low rounded-xl p-5 mt-12">
                <div className="h-full w-full bg-blur rounded-xl flex flex-col items-center justify-center p-8">
                    <h2 className="text-3xl lg:text-5xl text-white text-center">Freelance services at your fingertips</h2>

                    <Button name="Join HireUp" containerClass="mt-8" frontClasses="text-black h-10 w-40 border-2 border-black" backClasses="h-10 w-40 bg-white" />
                </div>
            </div>

            <div className="h-full bg-cus-black-low rounded-xl p-5 mt-12">
                <div className="h-full w-full flex flex-col items-center justify-center p-5">
                    <h2 className="text-3xl lg:text-5xl text-white text-center">Work fast from anywhere</h2>

                    <p className="text-xl lg:text-2xl text-cus-white-transparent text-center tracking-wide mt-3">Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.</p>

                    <div className="flex flex-col md:flex-row gap-3.5 mt-6">
                        <div className="inline-flex items-center justify-center gap-3.5 bg-blur rounded-lg shadow-xl p-2 w-44 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
                            <FontAwesomeIcon icon={faApple} className="text-white text-3xl" />

                            <div className="flex flex-col">
                                <p className="text-white text-base">Download on the</p>
                                <p className="text-white text-xl">Mac App Store</p>
                            </div>
                        </div>

                        <div className="inline-flex items-center justify-center gap-3.5 bg-blur rounded-lg shadow-xl p-2 w-44 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
                            <FontAwesomeIcon icon={faGooglePlay} className="text-white text-3xl" />

                            <div className="flex flex-col">
                                <p className="text-white text-base">Get in on</p>
                                <p className="text-white text-xl">Google Play</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-full bg-cus-black-low rounded-xl p-5 mt-12">
                <div className="h-full w-full flex flex-col items-start justify-center p-5">
                    <h2 className="text-white text-3xl text-left">Get more updates...</h2>

                    <p className="text-white text-base md:text-lg text-left tracking-wider mt-2.5">Subscribe to our newsletter and never miss an opportunity—whether you're hiring or offering your skills.</p>

                    <div className="mt-5 w-full flex flex-col md:flex-row gap-4">
                        <input type="email" id="email" name="email" className="w-full md:w-72 bg-blur rounded-md text-lg text-white border border-white px-2 py-1" placeholder="Your email address..." required />

                        <Button name="Subscribe" frontClasses="text-white h-10 w-full md:w-40 border-2 border-white" backClasses="h-10 w-full md:w-40 bg-blue-700" />
                    </div>

                    <p className="text-white text-base md:text-lg text-left tracking-wider mt-5">By subscribing, you agree to our <span className="text-blue-700">Terms of Service</span> and <span className="text-blue-700">Privacy Policy</span>.</p>
                </div>
            </div>
        </section>
    )
}

export default Details;