import React, { useState, useMemo } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';

const DropdownComponent = ({ name, dropdownBtnClass, dropdownMenuClass, dropdownMenuItemClass }) => {
    const [selectedKeys, setSelectedKeys] = useState(new Set([name]));
    const [isOpen, setIsOpen] = useState(false);

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
        [selectedKeys],
    );

    return (
        <Dropdown onOpenChange={(open) => setIsOpen(open)}>
            <DropdownTrigger className={`${dropdownBtnClass} h-10 flex flex-row items-center justify-between bg-blur py-0.5 px-2.5 rounded-md cursor-pointer`}>
                <Button className="capitalize" variant="bordered">
                    <p className="text-white text-base">{selectedValue}</p>
                    <FontAwesomeIcon icon={isOpen ? faCircleChevronUp : faCircleChevronDown} className="text-white text-base font-bold text-right" />
                </Button>
            </DropdownTrigger>
            <DropdownMenu className={`${dropdownMenuClass} h-auto w-full min-w-2xs rounded-md shadow-2xl p-2.5`} disallowEmptySelection aria-label="Single selection example" selectedKeys={selectedKeys} selectionMode="single" variant="flat" onSelectionChange={setSelectedKeys}>
                <DropdownItem className={`w-full bg-transparent flex items-center justify-end border-b border-b-gray-300 cursor-pointer hover:border-b-black hover:bg-black rounded-md transition-all duration-300 ease-in-out ${dropdownMenuItemClass} px-4 py-2 text-base text-black hover:text-white`} key="text">Text</DropdownItem>
                <DropdownItem className={`w-full bg-transparent flex items-center justify-end border-b border-b-gray-300 cursor-pointer hover:border-b-black hover:bg-black rounded-md transition-all duration-300 ease-in-out ${dropdownMenuItemClass} px-4 py-2 text-base text-black hover:text-white`} key="number">Number</DropdownItem>
                <DropdownItem className={`w-full bg-transparent flex items-center justify-end border-b border-b-gray-300 cursor-pointer hover:border-b-black hover:bg-black rounded-md transition-all duration-300 ease-in-out ${dropdownMenuItemClass} px-4 py-2 text-base text-black hover:text-white`} key="date">Date</DropdownItem>
                <DropdownItem className={`w-full bg-transparent flex items-center justify-end border-b border-b-gray-300 cursor-pointer hover:border-b-black hover:bg-black rounded-md transition-all duration-300 ease-in-out ${dropdownMenuItemClass} px-4 py-2 text-base text-black hover:text-white`} key="single_date">Single Date</DropdownItem>
                <DropdownItem className={`w-full bg-transparent flex items-center justify-end border-b border-b-gray-300 cursor-pointer hover:border-b-black hover:bg-black rounded-md transition-all duration-300 ease-in-out ${dropdownMenuItemClass} px-4 py-2 text-base text-black hover:text-white`} key="iteration">Iteration</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default DropdownComponent;
