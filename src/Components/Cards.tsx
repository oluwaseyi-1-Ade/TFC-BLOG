import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../assets/svg/spinner-solid.svg";

interface Post {
    _id: string;
    author: string;
    date: string;
    icon: string;
    image: string;
    post: string;
    title: string
}

const Cards = () => {
    const [posts, setposts] = useState([] as Post[]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://blog-project-pn4z.onrender.com/api/blog/blog-post")
            .then((response) => {
                setposts(response.data)
                setIsLoading(false)
            }).catch(err => console.log(err))
    }, [])


    if (isLoading === true) return (
        <div className="w-fit mx-auto">
            <img src={Spinner} alt="spinner" className="w-12 mx-auto mb-3 animate-spin" />
            <p className="text-[#181A2A] dark:text-white text-lg font-semibold">Loading Posts <span className="animate-ping text-2xl font-extrabold">...</span></p>
        </div>
    )
    return (
        <div className="max-w-pageMaxWidth w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-white dark:bg-[#181A2A]">

            {
                posts.map((card) => (
                    <div key={card._id} className="max-w-[394px] w-full mx-auto lg::mx-0 rounded-xl border border-[#E8E8EA] p-4 font-workSans">
                        <img src={card.image} alt={card.author} className="max-w-[360px] w-full h-[200px] md:h-[240px] rounded-md" />

                        <div className="mt-4 p-2">
                            <p className="w-fit rounded-md py-1 px-[10px] bg-[#4B6BFB0D] text-[#4B6BFB] font-normal text-sm">
                                Technology
                            </p>

                            <h2 className="max-w-[344px] font-semibold text-xl md:text-2xl text-[#181A2A] dark:text-white mt-5">
                                {card.title}
                            </h2>
                            <div className="flex items-center gap-2 md:gap-5  text-[#97989F] text-base mt-5">
                                <p className="flex items-center gap-3">
                                    <img src={card.icon} alt="jason" className="w-[36px]" />
                                    <span className="font-normal md:font-medium text-sm md:text-base">{card.author}</span>
                                </p>
                                <p className="font-normal md:font-light text-xs md:text-base">
                                    {card.date}
                                </p>
                            </div>
                        </div>

                    </div>
                ))
            }

        </div>
    )
}

export default Cards;