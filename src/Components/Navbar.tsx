import Logo from "../assets/svg/Logo.svg";
import SearchIcon from "../assets/svg/search-icon.svg";
import Switch from "../assets/imgs/Switch.png";
import Menu from "../assets/svg/menu.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="max-w-maxScreen w-full py-[32px] mx-auto font-workSans bg-white fixed top-0 left-0 right-0 z-50">
            <nav className="max-w-pageMaxWidth mx-auto w-full flex justify-between items-center px-5 xl:px-0">
                <a href="#" id="logo" className="">
                    <img src={Logo} alt="Blog logo" />
                </a>

                <div className="flex items-center gap-[21px]">

                    <div className="lg:flex items-center px-[75px] gap-10 hidden">
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

                    <div className="md:flex items-center gap-10 hidden">
                        <div className="flex rounded-[5px] p-[8px] pl-[16px] bg-[#F4F4F5] gap-3">
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
                            className="h-[30px] hidden lg:flex"
                        />
                    </div>
                </div>
                <div id="menu" className="flex gap-6 h-[35px] p-1 lg:hidden ">
                    <img src={Switch} alt="Switch" className="h-[30px]" />
                    <img src={Menu} alt="menu" />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
