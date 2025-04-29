import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Button = ({ name, icon, href, containerClass, frontClasses, backClasses }) => {
    return (
        <NavLink to={href} className={`cus-btn-con ${containerClass}`}>
            <button className={`cus-btn-front ${frontClasses} clip-custom cursor-pointer`}>
                {icon && <FontAwesomeIcon icon={icon} className="text-lg mr-3.5" />}
                {name}
            </button>
            <button className={`cus-btn-back ${backClasses} clip-custom cursor-pointer`}></button>
        </NavLink>
    )
}

export default Button;