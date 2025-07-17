import React, { useEffect } from "react";
import Hero from "./index_sections/Hero";
import Details from "./index_sections/Details";
import Footer from "./index_sections/Footer";
import Nav from "./index_sections/Nav";

const Index = () => {

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

    useEffect(() => {
        document.body.classList.add("custom1");
        return () => document.body.classList.remove("custom1");
    }, []);

    return (
        <section className="bg-white custom1">
            <Nav />

            <div className="max-w-7xl mx-auto h-full mt-24 bg-black p-5">
                <Hero />
                <Details />
            </div>

            <Footer />
        </section>
    )
}

export default Index;