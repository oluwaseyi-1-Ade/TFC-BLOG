
const Blog = () => {
    return (
        <div className=" px-5">
            <div className="max-w-pageMaxWidth w-full mx-auto mb-[200px] md:mb-[700px] rounded-xl mt-8 lg:mt-[120px] md:bg-heroImage bg-cover md:h-[550px]">

                <div className="max-w-[700px] w-full mx-auto z-50 md:pt-[400px]">
                    <form className=" rounded-t-lg p-8 lg:p-16 bg-[#FAFAFC] z-50">
                        <h2 className="font-semibold font-Archivo text-lg text-[#32264D] pb-5 border-b border-b-[#E6E6F0]">Blog Form</h2>

                        <div className="font-Poppins">
                            <div className="mt-4">
                                <label htmlFor="title" className="font-normal text-sm text-[#4E4958]">Title</label>
                                <input type="text" className="w-full h-[40px] bg-transparent mt-3 rounded-lg border border-[#E6E6F0] outline-none px-4 text-[#4E4958]" />
                            </div>

                            <div className="mt-4 w-full">
                                <label htmlFor="title" className="font-normal text-sm text-[#4E4958]">Description</label><br />
                                <textarea className="w-full h-[200px] mt-2 bg-transparent rounded-lg border border-[#E6E6F0] px-4 outline-none text-[#4E4958]"></textarea>
                            </div>

                            <button className="bg-blueBackground w-full px-10 py-[15px] rounded-lg text-white text-base font-semibold mt-12">
                                Submit
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Blog