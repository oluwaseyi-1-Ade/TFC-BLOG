import Logo from "../assets/svg/Logo.svg";
import SearchIcon from "../assets/svg/search-icon.svg";
import Switch from "../assets/imgs/Switch.png";
import Menu from "../assets/svg/menu.svg";
import closeBtn from "../assets/svg/closeBtn.svg"
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [menu, setMenu] = useState("hidden");

    const handleClick = () => setMenu("hidden")

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
                        <img
                            src={Switch}
                            alt="Switch"
                            className="h-[30px] hidden md:flex"
                        />
                    </div>

                    <div
                        onClick={() => setMenu("block")}
                        id="menu" className="flex gap-6 h-[35px] p-1 md:hidden cursor-pointer">
                        <img src={Switch} alt="Switch" className="h-[30px]" />
                        <img src={Menu} alt="menu" />
                    </div>
                </nav>

                <div className={`${menu}
                    absolute right-0 left-0 h-[100vh] top-0 flex flex-col gap-2 bg-black bg-opacity-80 items-center justify-center`}>

                    <div onClick={handleClick} >
                        <img src={closeBtn} alt="cancel" className="h-[45px]" />
                    </div>
                    <NavLink
                        end
                        to="/"
                        className="text-white py-3 text-[25px]"
                        onClick={() => handleClick()}>
                        Home
                    </NavLink>
                    <NavLink
                        to="/blog-form"
                        className="text-white py-3 text-[25px]"
                        onClick={() => handleClick()}
                    >
                        Blog
                    </NavLink>
                    <NavLink
                        to="/single-post"
                        className="text-white py-3 text-[25px]"
                        onClick={() => handleClick()}
                    >
                        Single Post
                    </NavLink>
                    <NavLink
                        to="/pages"
                        className="text-white py-3 text-[25px]"
                        onClick={() => handleClick()}
                    >
                        Pages
                    </NavLink>
                    <NavLink
                        to="/author-page"
                        className="text-white py-3 text-[25px]"
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
