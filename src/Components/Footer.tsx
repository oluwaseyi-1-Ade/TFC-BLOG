import Mail from "../assets/svg/mail.svg";
import BlogLogo from "../assets/imgs/Logo.png"


const Footer = () => {
    return (
        <div className="max-w-maxScreen w-full mt-24 bg-[#F6F6F7] dark:bg-[#181A2A] mx-auto border-t border-t-[#E8E8EA]">
            <div className="max-w-pageMaxWidth w-full mx-auto px-5">

                {/* footer1 */}
                <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] py-[30px] md:py-[64px]">
                    <div id="about" className="font-PlusJakartaSans max-w-[245px] mx-auto lg:mx-0 w-full">
                        <h3 className="font-semibold text-lg text-[#181A2A] dark:text-white pb-3">About</h3>
                        <p className="text-base font-normal text-[#696A75] dark:text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <div className="mt-5 dark:text-white">
                            <p className="text-base font-normal"><span className="font-semibold">Email:</span>info@jstemplate.net</p>
                            <p className="text-base font-normal"><span className="font-semibold">Phone: </span>880 123 456 789</p>
                        </div>
                    </div>

                    <div className="flex justify-center gap-[50px] lg:gap-[90px] font-PlusJakartaSans">
                        <div id="quick-link">
                            <h3 className="font-semibold text-lg text-[#181A2A]">Quick Link</h3>
                            <ul className="mt-5">
                                <li className="py-1"><a href="#" className="font-normal text-base text-[#3B3C4A] dark:text-white">Home</a></li>
                                <li className="py-1"><a href="#" className="font-normal text-base text-[#3B3C4A] dark:text-white">About</a></li>
                                <li className="py-1"><a href="#" className="font-normal text-base text-[#3B3C4A] dark:text-white">Blog</a></li>
                                <li className="py-1"><a href="#" className="font-normal text-base text-[#3B3C4A] dark:text-white">Archived</a></li>
                                <li className="py-1"><a href="#" className="font-normal text-base text-[#3B3C4A] dark:text-white">Author</a></li>
                                <li className="py-1"><a href="#" className="font-normal text-base text-[#3B3C4A] dark:text-white">Contact</a></li>
                            </ul>
                        </div>
                        <div id="category">
                            <h3 className="font-semibold text-lg text-[#181A2A]">Category</h3>
                            <ul className="mt-5">
                                <li className="py-1"><a href="#" className="font-normal text-base text-[#3B3C4A] dark:text-white">Lifestyle</a></li>
                                <li className="py-1"><a href="#" className="font-normal text-base text-[#3B3C4A] dark:text-white">Technology</a></li>
                                <li className="py-1"><a href="#" className="font-normal text-base text-[#3B3C4A] dark:text-white">Travel</a></li>
                                <li className="py-1"><a href="#" className="font-normal text-base text-[#3B3C4A] dark:text-white">Business</a></li>
                                <li className="py-1"><a href="#" className="font-normal text-base text-[#3B3C4A] dark:text-white">Economy</a></li>
                                <li className="py-1"><a href="#" className="font-normal text-base text-[#3B3C4A] dark:text-white">Sports</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="rounded-xl md:col-span-2 lg:col-span-1 p-8 bg-white font-workSans max-w-[400px] w-full mx-auto">
                        <h2 className="font-semibold text-xl text-center text-[#181A2A] mb-2">Weekly Newsletter</h2>
                        <p className="font-normal text-base text-center text-[#696A75] mb-8">Get blog articles and offers via email</p>
                        <form action="">
                            <div className="rounded-md border border-[#DCDDDF] py-3 px-4 flex items-center justify-between mb-2">
                                <input type="email" placeholder="Your Email" className="max-w-[258px] w-full text-base font-normal text-[#97989F] border-none outline-none" />
                                <img src={Mail} alt="mail" />
                            </div>
                            <button className="rounded-md w-full py-3 px-5 text-white text-base font-medium bg-blueBackground">Subscribe</button>
                        </form>
                    </div>

                </div>

                {/* footer2 */}
                <div className="w-fit lg:w-full mx-auto border-t border-t-[#DCDDDF] py-8 lg:flex lg:justify-between lg:items-center">
                    <div className="flex gap-[10px] items-center mb-5 ">
                        <img src={BlogLogo} alt="blog-logo" className="h-[48px] dark:h-[56px] dark:p-1 dark:bg-white" />
                        <div>
                            <p className="font-normal text-xl text-[#141624] dark:text-white">Meta<span className="font-extrabold">Blog</span></p>
                            <p className="text-[#3B3C4A] dark:text-white text-base font-normal">© JS Template 2023. All Rights Reserved.</p>
                        </div>
                    </div>
                    <ul className="flex gap-5 w-fit mx-auto lg:mx-0">
                        <li><a href="" className="font-normal text-base text-[#3B3C4A] dark:text-white">Terms of Use</a></li>
                        <li><a href="" className="font-normal text-base text-[#3B3C4A] dark:text-white">Privacy Policy</a></li>
                        <li><a href="" className="font-normal text-base text-[#3B3C4A] dark:text-white">Cookie Policy</a></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer