import React from "react";

const Button = ({ name, containerClass, frontClasses, backClasses }) => {
    return (
        <a href="/" className={`cus-btn-con ${containerClass}`}>
            <button className={`cus-btn-front ${frontClasses} clip-custom cursor-pointer`}>{name}</button>
            <button className={`cus-btn-back ${backClasses} clip-custom cursor-pointer`}></button>
        </a>
    )
}

export default Button;