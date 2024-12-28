import Jason from "../assets/imgs/jason.png";
import Facebook from "../assets/svg/facebook.svg";
import Twitter from "../assets/svg/twitter.svg";
import Instagram from "../assets/svg/instagram.svg";
import Youtube from "../assets/svg/youtube.svg";
import Cards from "../Components/Cards";

const AuthorPage = () => {
    return (
        <>

            <div className="max-w-pageMaxWidth w-full mx-auto bg-[#F6F6F7] rounded-xl p-12 font-workSans">
                <div className="max-w-[670px] w-full mx-auto">
                    <div className="flex gap-4 justify-center items-center mb-7">
                        <img src={Jason} alt="Jonathan" />
                        <div className="">
                            <h2 className="font-medium text-xl text-[#181A2A]">Jonathan Doe</h2>
                            <p className="text-sm font-normal text-[#696A75]">Collaborator & Editor</p>
                        </div>
                    </div>

                    <p id="description" className="w-full text-center font-normal text-sm md:text-lg text-[#3B3C4A]">
                        Meet Jonathan Doe, a passionate writer and blogger with a love
                        for technology and travel. Jonathan holds a degree in Computer Science and
                        has spent years working in the tech industry, gaining
                        a deep understanding of the impact technology has on our lives.
                    </p>
                    <ul className="flex justify-center items-center gap-2 mt-7">
                        <li><a href="#" target="_blank"><img src={Facebook} alt="facebook" /></a></li>
                        <li><a href="#" target="_blank"><img src={Twitter} alt="twitter" /></a></li>
                        <li><a href="#" target="_blank"><img src={Instagram} alt="instagram" /></a></li>
                        <li><a href="#" target="_blank"><img src={Youtube} alt="youtube" /></a></li>
                    </ul>
                </div>
            </div>


            <div className="max-w-pageMaxWidth w-full mx-auto mt-14 font-workSans px-5">
                <h2 className="font-bold text-base md:text-2xl text-[#181A2A]">Latest Post</h2>

                <div className="mt-10">
                    <Cards />
                </div>
            </div>

        </>
    )
}

export default AuthorPage;