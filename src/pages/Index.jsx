import React from "react";
import Navbar from "./Navbar";
import Hero from "./index_sections/Hero";
import Details from "./index_sections/Details";
import Footer from "./index_sections/Footer";

const Index = () => {
    return (
        <section className="bg-white">
            {/* <Navbar /> */}

            <div className="max-w-7xl mx-auto h-full mt-24 bg-black p-5">
                <Hero />
                <Details />
            </div>

            <Footer />
        </section>
    )
}

export default Index;