import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Button = ({ name, icon, href, containerClass, frontClasses, backClasses, onClick }) => {
    if (href) {
        return (
            <NavLink to={href} className={`cus-btn-con ${containerClass}`}>
                <div className={`cus-btn-front ${frontClasses} clip-custom cursor-pointer`}>
                    {icon && <FontAwesomeIcon icon={icon} className="text-lg mr-3.5" />}
                    {name}
                </div>
                <div className={`cus-btn-back ${backClasses} clip-custom cursor-pointer`}></div>
            </NavLink>
        )
    } else {
        return (
            <button onClick={onClick} className={`cus-btn-con ${containerClass}`}>
                <div className={`cus-btn-front ${frontClasses} clip-custom cursor-pointer`}>
                    {icon && <FontAwesomeIcon icon={icon} className="text-lg mr-3.5" />}
                    {name}
                </div>
                <div className={`cus-btn-back ${backClasses} clip-custom cursor-pointer`}></div>
            </button>
        )
    }
}

export default Button;