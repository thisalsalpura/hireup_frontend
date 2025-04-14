import React from "react";
import homeImg from "../../assets/images/home-img.svg";

const Hero = () => {
    return (
        <section className="h-full bg-cus-black-low rounded-xl">
            <div className="grid grid-cols-12 grid-rows-12 h-full">
                <div className="col-start-1 col-span-12 md:col-span-4 row-start-1 row-span-3 md:row-span-9 flex items-center md:items-start text-center md:text-left p-5">
                    <p className="text-2xl md:text-xl lg:text-3xl bg-transparent text-transparent cus-text-style"><span className="cus-text-style-light-yellow-high">Find skilled freelancers ready to bring your ideas to life.</span> Post your project, connect with talent, and get quality work done—on your terms.</p>
                </div>

                <div className="col-start-1 md:col-start-5 col-span-12 md:col-span-4 row-start-4 md:row-start-3 row-span-6 md:row-span-8 flex items-center justify-center">
                    <img className="object-cover h-52 md:h-56 lg:h-72" src={homeImg} alt="home-img" />
                </div>

                <div className="col-start-1 md:col-start-9 col-span-12 md:col-span-4 row-start-10 md:row-start-4 row-span-3 md:row-span-9 flex items-center md:items-end text-center md:text-right p-5">
                    <p className="text-2xl md:text-xl lg:text-3xl bg-transparent text-transparent cus-text-style">Turn your skills into income. <span className="cus-text-style-dark-purple">Create your profile, showcase your expertise, and start getting hired by clients who value what you do.</span></p>
                </div>
            </div>
        </section >
    )
}

export default Hero;