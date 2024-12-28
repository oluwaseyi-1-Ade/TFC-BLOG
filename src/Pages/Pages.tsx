import { NavLink } from "react-router-dom";
import User from "../assets/imgs/user.png"
import Cards from "../Components/Cards";

const Pages = () => {
    return (
        <>

            {/* page-nav */}
            <div id="pages-nav" className="max-w-pageMaxWidth w-full mx-auto bg-white font-workSans py-4 px-5 fixed top-[100px] right-0 left-0 z-10">
                <h2 className="font-semibold text-3xl text-center text-[#181A2A]">Page Title</h2>
                <div className="flex justify-center items-center gap-3 mt-4 text-base/5">
                    <NavLink end to="/pages" className={({ isActive }) => (
                        isActive ? "font-normal text-[#3B3C4A]" : "font-normal text-[#696A75]"
                    )}>Home</NavLink>
                    <NavLink to="#" className={({ isActive }) => (
                        isActive ? "font-normal pl-3 border-l border-l-[#E8E8EA] text-[#3B3C4A]" : "font-normal pl-3 border-l border-l-[#3B3C4A] text-[#696A75]"
                    )}>Link One</NavLink>
                </div>
            </div>

            {/* hero  */}
            <div className="max-w-pageMaxWidth w-full mx-auto mt-32 h-[450px] px-5">
                <div id="pages-hero" className="relative w-full h-full rounded-xl p-10 bg-heroImage bg-cover bg-no-repeat">
                    <div className="md:absolute bottom-10 left-10 w-full font-workSans bg-transparent">
                        <h3 className="w-[105px] font-medium text-sm text-white rounded-md px-[10px] py-1 bg-blueBackground">Technology</h3>
                        <h2 className="max-w-[750px] w-full font-semibold text-xl sm:text-2xl md:text-4xl text-white mt-5">
                            The Impact of Technology on the Workplace: How Technology is Changing
                        </h2>
                        <div className="flex items-center gap-5  text-white text-base mt-5">
                            <p className="flex items-center gap-3">
                                <img src={User} alt="user" className="w-[36px]" />
                                <span className="font-medium">Tracey Wilson</span>
                            </p>
                            <p className="font-normal">
                                August 20, 2022
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Cards */}
            <div className="max-w-pageMaxWidth w-full mx-auto px-5 mt-12">
                <Cards />
            </div>

            <div className="mt-10 mb-10 md:mb-14 lg:mb-20 w-full flex justify-center">
                <button className="rounded-md border border-[#696A753D] py-3 px-5 text-[#696A75] font-medium text-base hover:bg-[#777] hover:text-[#fff]">
                    Load More
                </button>
            </div>

            {/* advertisement */}
            <div className="max-w-[770px] mx-auto w-full px-5 font-workSans">
                <div className="w-full rounded-xl bg-[#E8E8EA] text-center text-[#696A75] py-5">
                    <p className="font-normal text-sm">Advertisement</p>
                    <h3 className="py-[8px] font-semibold text-xl/6">
                        You can place ads
                    </h3>
                    <p className="font-normal text-lg/[26px]">750x100</p>
                </div>
            </div>

        </>
    )
}

export default Pages