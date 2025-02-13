import Logo from "../assets/svg/Logo.svg";
import SearchIcon from "../assets/svg/search-icon.svg";
import Switch from "../assets/imgs/Switch.png";
import DarkBtn from "../assets/svg/dark-mode.svg";
import Menu from "../assets/svg/menu.svg";
import closeBtn from "../assets/svg/closeBtn.svg"
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [menu, setMenu] = useState("hidden");
    const [darkMode, setDarkMode] = useState("hidden")

    const handleClick = () => setMenu("hidden");

    // const toggleDarkMode = () => {
    //     // document.documentElement.classList.toggle("dark");
    // }

    return (
        <div className="relative">
            <div className="max-w-maxScreen w-full py-[32px] mx-auto font-workSans bg-white fixed top-0 left-0 right-0 z-50">
                <nav className="max-w-pageMaxWidth mx-auto  w-full flex justify-between items-center px-5">
                    <a href="#" id="logo" className="">
                        <img src={Logo} alt="Blog logo" />
                    </a>

                    <div className="flex items-center gap-[21px]">

                        <div className="md:flex items-center px-[40px] gap-10 hidden">
                            <NavLink
                                end
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "font-medium text-lg text-[#181A2A]"
                                        : "font-normal text-base text-[#3B3C4A]"
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/blog-form"
                                className={({ isActive }) =>
                                    isActive
                                        ? "font-medium text-lg text-[#181A2A]"
                                        : "font-normal text-base text-[#3B3C4A]"
                                }
                            >
                                Blog
                            </NavLink>
                            <NavLink
                                to="/single-post"
                                className={({ isActive }) =>
                                    isActive
                                        ? "font-medium text-lg text-[#181A2A]"
                                        : "font-normal text-base text-[#3B3C4A]"
                                }
                            >
                                Single Post
                            </NavLink>
                            <NavLink
                                to="/pages"
                                className={({ isActive }) =>
                                    isActive
                                        ? "font-medium text-lg text-[#181A2A]"
                                        : "font-normal text-base text-[#3B3C4A]"
                                }
                            >
                                Pages
                            </NavLink>
                            <NavLink
                                to="/author-page"
                                className={({ isActive }) =>
                                    isActive
                                        ? "font-medium text-lg text-[#181A2A]"
                                        : "font-normal text-base text-[#3B3C4A]"
                                }
                            >
                                Contact
                            </NavLink>
                        </div>


                    </div>

                    <div className="lg:flex items-center gap-10 ">
                        <div className="lg:flex hidden rounded-[5px] p-[8px] pl-[16px] bg-[#F4F4F5] gap-3">
                            <input
                                type="search"
                                placeholder="Search"
                                className="max-w-[110px] w-full border-none outline-none bg-transparent font-inter text-sm"
                            />
                            <img src={SearchIcon} alt="Search-icon" />
                        </div>
                        <div className="hidden md:flex">
                            <img src={Switch} id="light" alt="Switch" className={`h-[30px] cursor-pointer`}
                                onClick={
                                    () => {
                                        document.documentElement.classList.add("dark");
                                        document.getElementById("light")?.classList.add("hidden")
                                        setDarkMode("flex");
                                    }
                                }
                            />
                            <img src={DarkBtn} alt="Switch" className={`h-[35px] w-[49.64px] ${darkMode} cursor-pointer`}
                                onClick={
                                    () => {
                                        document.documentElement.classList.remove("dark");
                                        document.getElementById("light")?.classList.remove("hidden")
                                        setDarkMode("hidden");
                                    }
                                }
                            />
                        </div>
                    </div>

                    <div
                        id="menu" className="flex gap-6 h-[35px] p-1 md:hidden">

                        <div>
                            <img src={Switch} id="slight" alt="Switch" className={`h-[30px] cursor-pointer`}
                                onClick={
                                    () => {
                                        document.documentElement.classList.add("dark");
                                        document.getElementById("slight")?.classList.add("hidden")
                                        setDarkMode("flex");
                                    }
                                }
                            />
                            <img src={DarkBtn} alt="Switch" className={`h-[30px] ${darkMode} cursor-pointer`}
                                onClick={
                                    () => {
                                        document.documentElement.classList.remove("dark");
                                        document.getElementById("slight")?.classList.remove("hidden")
                                        setDarkMode("hidden");
                                    }
                                }
                            />
                        </div>


                        <img src={Menu} alt="menu"
                            onClick={() => setMenu("block")
                            }
                            className=" cursor-pointer"
                        />
                    </div>
                </nav>

                <div className={`${menu}
                    absolute right-0 left-0 h-[100vh] top-0 flex flex-col gap-2 bg-black bg-opacity-80 items-center justify-center`}>

                    <div onClick={handleClick} >
                        <img src={closeBtn} alt="cancel" className="h-[36px]" />
                    </div>
                    <NavLink
                        end
                        to="/"
                        className="text-white py-3 text-[20px]"
                        onClick={() => handleClick()}>
                        Home
                    </NavLink>
                    <NavLink
                        to="/blog-form"
                        className="text-white py-3 text-[20px]"
                        onClick={() => handleClick()}
                    >
                        Blog
                    </NavLink>
                    <NavLink
                        to="/single-post"
                        className="text-white py-3 text-[20px]"
                        onClick={() => handleClick()}
                    >
                        Single Post
                    </NavLink>
                    <NavLink
                        to="/pages"
                        className="text-white py-3 text-[20px]"
                        onClick={() => handleClick()}
                    >
                        Pages
                    </NavLink>
                    <NavLink
                        to="/author-page"
                        className="text-white py-3 text-[20px]"
                        onClick={() => handleClick()}
                    >
                        Contact
                    </NavLink>
                </div>

            </div>
        </div >
    );
};

export default Navbar;
