import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({ name, dropdownBtnClass, dropdownMenuClass, dropdownMenuItemClass }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen((previousOpen) => !previousOpen)
    }

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener("mousedown", handleClickOutside);
        } else {
            window.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const [selectedItem, setSelectedItem] = useState({ name: name, value: "default" });

    const handleSelect = (itemName, itemValue) => {
        setSelectedItem({ name: itemName, value: itemValue });
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <div onClick={toggleDropdown} className={`${dropdownBtnClass} h-10 flex flex-row items-center justify-between bg-blur py-0.5 px-2.5 rounded-md cursor-pointer`}>
                <p className="text-white text-base">{selectedItem.name}</p>
                <FontAwesomeIcon icon={isOpen ? faCircleChevronUp : faCircleChevronDown} className="text-white text-base font-bold text-right" />
            </div>

            <div className={`${dropdownMenuClass} absolute right-0 h-auto w-auto min-w-2xs origin-top-right rounded-md outline-0 shadow-lg z-10 ${isOpen ? "mt-2 opacity-100" : "mt-10 opacity-0"} transition-all duration-300 ease-in-out`}>
                <div className="flex flex-col gap-2 py-2 px-4">
                    <p onClick={() => handleSelect('Account', 1)} className="w-full bg-transparent flex items-center justify-end border-b border-b-gray-300 cursor-pointer hover:border-b-black hover:bg-black rounded-md group transition-all duration-300 ease-in-out">
                        <span className={`${dropdownMenuItemClass} px-4 py-2 text-base text-black group-hover:text-white`}>Account</span>
                    </p>
                    <p onClick={() => handleSelect('Support', 2)} className="w-full bg-transparent flex items-center justify-end border-b border-b-gray-300 cursor-pointer hover:border-b-black hover:bg-black rounded-md group transition-all duration-300 ease-in-out">
                        <span className={`${dropdownMenuItemClass} px-4 py-2 text-base text-black group-hover:text-white`}>Support</span>
                    </p>
                    <p onClick={() => handleSelect('License', 3)} className="w-full bg-transparent flex items-center justify-end border-b border-b-gray-300 cursor-pointer hover:border-b-black hover:bg-black rounded-md group transition-all duration-300 ease-in-out">
                        <span className={`${dropdownMenuItemClass} px-4 py-2 text-base text-black group-hover:text-white`}>License</span>
                    </p>
                    <p onClick={() => handleSelect('Settings', 4)} className="w-full bg-transparent flex items-center justify-end border-b border-b-gray-300 cursor-pointer hover:border-b-black hover:bg-black rounded-md group transition-all duration-300 ease-in-out">
                        <span className={`${dropdownMenuItemClass} px-4 py-2 text-base text-black group-hover:text-white`}>Settings</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;