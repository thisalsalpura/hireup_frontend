import React from "react";

const SecondaryButton = ({ name, href, containerClass }) => {
    return (
        <a href={href} className={`secondary-btn ${containerClass}`}>
            <span className="relative flex h-4 w-4 bg-cus-light-yellow-high rounded-full">
                <span className="secondary-btn-ping" />
                <span className="secondary-btn-ping_dot" />
            </span>
            {name}
        </a>
    )
}

export default SecondaryButton;