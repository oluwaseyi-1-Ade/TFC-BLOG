function BlogLogin() {
    return (
        <div
            className="relative max-w-7xl mx-auto my-44 h-[37.5rem] rounded-xl bg-cover"
            style={{ backgroundImage: "url('/image.png')" }}
        >
            {/*form section*/}
            <form className="absolute left-1/2 -translate-x-1/2 -bottom-1/4 bg-white w-[42rem] rounded-t-lg p-16">
                <h3 className="text-xl font-semibold mb-4 text-center md:text-left">
                    BLOG FORM
                </h3>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-medium">
                        Title
                    </label>
                    <input
                        type="name"
                        id="title"
                        name="title"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-medium">
                        Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>
                <input
                    type="submit"
                    defaultValue="submit"
                    className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-600"
                />
            </form>
        </div>
    );
}

export default BlogLogin;
