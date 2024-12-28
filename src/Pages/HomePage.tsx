import Jason from "../assets/imgs/jason.png"
import Cards from "../Components/Cards";

const HomePage = () => {
    return (
        <>
            {/* herosection */}
            <div className="max-w-pageMaxWidth mx-auto px-5">
                <div className="relative w-full mx-auto md:h-[550px] rounded-xl md:border border-[#E8E8EA] md:bg-heroImage bg-cover bg-no-repeat">

                    <div className="md:absolute bottom-[-65px] drop-shadow-lg left-5 lg:mx-0 md:left-14 z-10 md:max-w-[600px] w-full p-5 md:p-10 rounded-xl bg-white border border-[#E8E8EA] font-workSans">
                        <h3 className="w-[105px] font-medium text-sm text-white rounded-md px-[10px] py-1 bg-blueBackground">Technology</h3>
                        <h2 className="max-w-[550px] font-semibold text-xl sm:text-2xl md:text-4xl text-[#181A2A] mt-5">
                            The Impact of Technology on the Workplace: How Technology is Changing
                        </h2>
                        <div className="flex items-center gap-5  text-[#97989F] text-base mt-5">
                            <p className="flex items-center gap-3">
                                <img src={Jason} alt="jason" className="w-[36px]" />
                                <span className="font-medium">Jason Francisco</span>
                            </p>
                            <p className="font-normal">
                                August 20, 2022
                            </p>
                        </div>
                    </div>

                </div>
            </div>


            {/* posts */}
            <div className="mt-[120px] font-workSans max-w-pageMaxWidth px-5 mx-auto w-full">
                <div className="flex w-full justify-between items-center">
                    <h2 className="font-bold text-xl md:text-2xl text-[#181A2A]">Latest Post</h2>
                    <button className="rounded-lg px-[26px] py-[10px] text-black text-sm md:text-base font-medium bg-[#E8E8EA]">Add Blog</button>
                </div>

                <div className="mt-12">
                    <Cards />
                </div>

                <div className="mt-16 mb-[100px] md:mb-[150px] lg:mb-[400px] w-full flex justify-center">
                    <button className="rounded-md border border-[#696A753D] py-3 px-5 text-[#696A75] font-medium text-base hover:bg-[#777] hover:text-[#fff]">
                        View All Post
                    </button>
                </div>

            </div>
        </>

    )
}

export default HomePage;