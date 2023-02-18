import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { useState } from 'react';
import { menuItems } from "../../constants/constants";
import { MenuItem } from "../../types/types";

const Sidebar = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="flex">
            <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-60" : "w-20"} duration-300 relative`}>
                <BsArrowLeftShort
                    className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 shadow-lg ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className={`flex items-center rounded-md bg-light-white mt-12 ${!open ? "px-2.5" : "px-4"} py-2`}>
                    <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`}/>
                    <input type="search" placeholder="Search" className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`}/>
                </div>
                <ul className="pt-2">
                    {menuItems.map((item: MenuItem, index: number) => (
                        <>
                            <li
                                key={index} 
                                className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
                                <span className="text-2xl block float-left">{item.icon}</span>
                                <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{item.title}</span>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
            <div className="p-7">
                <h1 className="text-2xl font-semibold">Welcome EKallens! 👋</h1>
            </div>
        </div>
    );
}

export default Sidebar;
