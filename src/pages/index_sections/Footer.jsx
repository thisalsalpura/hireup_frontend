import React from "react";
import { socialLinks } from "../../constants/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@heroui/tooltip";

const Footer = () => {
    return (
        <section className="max-w-7xl mx-auto h-full p-5">
            <div className="h-full w-full flex flex-col items-center justify-center bg-black rounded-xl p-5">
                <div className="flex flex-row gap-5">
                    {socialLinks.map(({ id, title, href, icon }) => (
                        <Tooltip
                            key={id}
                            showArrow
                            className="bg-white px-2 py-0.5 rounded-sm text-black font-semibold"
                            content={title}
                        >
                            <FontAwesomeIcon icon={icon} className="text-white text-3xl cursor-pointer transition-all duration-300 ease-in-out hover:-rotate-12 hover:scale-105" />
                        </Tooltip>
                    ))}
                </div>

                <hr className="mt-4 bg-cus-white-transparent w-full h-[1px] opacity-60" />

                <p className="text-white text-lg text-center tracking-wider mt-4">Copyright © 2025 HireUp All Rights Reserved.</p>
            </div>
        </section>
    )
}

export default Footer;