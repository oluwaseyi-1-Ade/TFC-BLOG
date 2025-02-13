import User from "../assets/imgs/user2.png";
import singlePost1 from "../assets/imgs/singlePost1.png";
import singlePost2 from "../assets/imgs/singlePost2.png";
import Advertisement from "../Components/Advertisement";

const SinglePost = () => {
    return (
        <div className="max-w-[820px] w-full mx-auto px-5">
            <div id="headers" className="w-full">
                <h3 className="w-[105px] mb-5 font-medium text-sm text-white rounded-md px-[10px] py-1 bg-blueBackground">Technology</h3>
                <h2 className="font-semibold text-lg md:text-2xl lg:text-4xl text-[#181A2A] dark:text-white mb-3">
                    The Impact of Technology on the Workplace: How Technology is Changing
                </h2>
                <div className="flex items-center gap-5 text-[#696A75] dark:text-white text-base mt-5">
                    <p className="flex items-center gap-3">
                        <img src={User} alt="user" className="w-[28px]" />
                        <span className="font-medium">Tracey Wilson</span>
                    </p>
                    <p className="font-normal">
                        August 20, 2022
                    </p>
                </div>
            </div>


            <div className="w-full mt-8">
                <img src={singlePost1} alt="travelling experience" className="w-full h-[300px] lg:h-[450px]" />
                <div className="font-SourceSerif text-sm md:text-base lg:text-lg/6 font-normal text-[#3B3C4A] dark:text-[#fff]">
                    <p className="mt-5">
                        Traveling is an enriching experience that opens up new horizons, exposes us to different cultures,
                        and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming,
                        especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for
                        a memorable journey and how to make the most of your travels.
                    </p>

                    <p className="mt-10 ">
                        Traveling is an enriching experience that opens up new horizons, exposes us to different cultures,
                        and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming,
                        especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for
                        a memorable journey and how to make the most of your travels.
                    </p>
                </div>

            </div>

            <div className="w-full mt-8 ">
                <h3 className="font-semibold font-workSans text-base sm:text-lg md:text-2xl/7 text-[#181A2A] dark:text-white">Research Your Destination</h3>

                <div className="font-SourceSerif text-sm md:text-base lg:text-lg/6 font-normal text-[#3B3C4A] dark:text-white">
                    <p className="mt-3">
                        Before embarking on your journey, take the time to research your destination. This includes understanding
                        the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations.
                        Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.
                    </p>

                    <p className="mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor.
                        Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
                        elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus
                    </p>
                </div>

            </div>

            <div className="w-full mt-8">
                <h3 className="font-semibold font-workSans text-base sm:text-lg md:text-2xl/7 text-[#181A2A] dark:text-white">Plan Your Itinerary</h3>

                <div className="font-SourceSerif text-sm md:text-base lg:text-lg/6 font-normal text-[#3B3C4A] dark:text-white">
                    <p className="mt-3">
                        While it's essential to leave room for spontaneity and unexpected adventures, having
                        a rough itinerary can help you make the most of your time and budget.
                        Identify the must-see sights and experiences and prioritize them according to
                        your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.
                    </p>

                    <p className="mt-10">
                        Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper
                        sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
                    </p>
                </div>

            </div>

            <div className="w-full mt-6">
                <div className="w-full font-SourceSerif rounded-xl border-l-4 border-l-[#E8E8EA] p-4 lg:p-8 bg-[#F6F6F7] italic text-xl font-normal text-[#181A2A]">
                    “ Traveling can expose you to new environments and potential health
                    risks, so it's crucial to take precautions to stay safe and healthy. ”
                </div>
                <img src={singlePost2} alt="Travelling" className="w-full h-[300px] lg:h-[450px] mt-7" />

                <div className="mt-7">
                    <Advertisement />
                </div>
            </div>

            <div className="w-full mt-6">
                <h3 className="font-semibold font-workSans text-base sm:text-lg md:text-2xl/7 text-[#181A2A] dark:text-white">Pack Lightly and Smartly</h3>

                <p className="mt-3 font-SourceSerif text-sm md:text-base lg:text-lg/6 font-normal text-[#3B3C4A] dark:text-white">
                    Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently.
                    Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed
                    and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.
                </p>
            </div>

            <div className="w-full mt-8">
                <h3 className="font-semibold font-workSans text-base sm:text-lg md:text-2xl/7 text-[#181A2A] dark:text-white">Stay Safe and Healthy</h3>

                <p className="mt-3 text-sm md:text-base font-SourceSerif lg:text-lg/6 font-normal text-[#3B3C4A] dark:text-white">
                    Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions
                    to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated,
                    washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your
                    valuables safe and secure and to be aware of your surroundings at all times.
                </p>
            </div>

            <div className="w-full mt-8">
                <h3 className="font-semibold font-workSans text-base sm:text-lg md:text-2xl/7 text-[#181A2A] dark:text-white">Immerse Yourself in the Local Culture</h3>

                <p className="mt-3 text-sm font-SourceSerif md:text-base lg:text-lg/6 font-normal text-[#3B3C4A] dark:text-white">
                    One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs.
                    This includes trying local cuisine, attending cultural events and festivals, and interacting with locals.
                    Learning a few phrases in the local language can also go a long way in making connections and showing respect.
                </p>
            </div>

            <div className="w-full mt-8">
                <h3 className="font-semibold font-workSans text-base sm:text-lg md:text-2xl/7 text-[#181A2A] dark:text-white">Capture Memories</h3>

                <p className="mt-3 text-sm font-SourceSerif md:text-base lg:text-lg/6 font-normal text-[#3B3C4A] dark:text-white">
                    Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs,
                    preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential
                    to be present in the moment and not let technology distract you from the beauty of your surroundings.
                </p>
            </div>

            <div className="w-full mt-8">
                <h3 className="font-semibold font-workSans text-base sm:text-lg md:text-2xl/7 text-[#181A2A] dark:text-white">Conclusion:</h3>

                <p className="mt-3 text-sm font-SourceSerif md:text-base lg:text-lg/6 font-normal text-[#3B3C4A] dark:text-white">
                    Traveling is an art form that requires a blend of planning, preparation, and spontaneity.
                    By following these tips and tricks, you can make the most of your journey and create
                    memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride.
                </p>
            </div>
        </div>
    )
}

export default SinglePost