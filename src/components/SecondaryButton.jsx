import React from "react";

const SecondaryButton = ({ name, containerClass }) => {
    return (
        <button className={`secondary-btn ${containerClass}`}>
            <span className="relative flex h-4 w-4 bg-cus-light-yellow-high rounded-full">
                <span className="secondary-btn-ping" />
                <span className="secondary-btn-ping_dot" />
            </span>
            {name}
        </button>
    )
}

export default SecondaryButton;