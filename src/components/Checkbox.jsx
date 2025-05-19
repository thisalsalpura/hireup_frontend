import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Checkbox = ({ name }) => {
    return (
        <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="peer hidden" id="customCheckbox" />

            <div className="w-5 h-5 rounded border-2 border-white flex items-center justify-center peer-checked:bg-blue-700 peer-checked:border-white transition-colors duration-200">
                <FontAwesomeIcon
                    icon={faCheck}
                    className="text-xs text-white hidden peer-checked:block"
                />
            </div>

            <span className="text-white text-sm sm:text-base">{name}</span>
        </label>
    );
};

export default Checkbox;