import React, { useEffect } from "react";

const CancelPayment = () => {

    useEffect(() => {
        document.body.classList.add("custom2");
        return () => document.body.classList.remove("custom2");
    }, []);

    return (
        <section className="bg-white custom2">
            <div className="max-w-7xl mx-auto h-screen bg-white flex items-center justify-center p-5">
                <div className="w-[90%] md:w-[60%] h-auto shadow-md rounded-md border-2 border-red-400 p-5">
                    <p className="text-red-400 text-lg font-semibold tracking-wider">Your're Payment is Cancelled!</p>
                </div>
            </div>
        </section>
    )
}

export default CancelPayment;