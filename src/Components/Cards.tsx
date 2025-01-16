import Img1 from "../assets/imgs/cardImages/img1.png";
import Img2 from "../assets/imgs/cardImages/img2.png";
import Img3 from "../assets/imgs/cardImages/img3.png";
import Img4 from "../assets/imgs/cardImages/img4.png";
import Img5 from "../assets/imgs/cardImages/img5.png";
import Img6 from "../assets/imgs/cardImages/img6.png";
import Img7 from "../assets/imgs/cardImages/img7.png";
import Img8 from "../assets/imgs/cardImages/img8.png";
import Img9 from "../assets/imgs/cardImages/img9.png";

import User16 from "../assets/imgs/cardImages/user1-6.png";
import User27 from "../assets/imgs/cardImages/user2-7.png";
import User38 from "../assets/imgs/cardImages/user3-8.png";
import User49 from "../assets/imgs/cardImages/user4-9.png";
import User5 from "../assets/imgs/cardImages/user5.png";

const Cards = () => {
    return (
        <div className="max-w-pageMaxWidth w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-white dark:bg-black">

            {
                cards.map((card) => (
                    <div key={card.id} className="max-w-[394px] w-full mx-auto lg::mx-0 rounded-xl border border-[#E8E8EA] p-4 font-workSans">
                        <img src={card.image} alt={card.name} className="max-w-[360px] w-full h-[200px] md:h-[240px] rounded-md" />

                        <div className="mt-4 p-2">
                            <p className="w-fit rounded-md py-1 px-[10px] bg-[#4B6BFB0D] text-[#4B6BFB] font-normal text-sm">
                                Technology
                            </p>

                            <h2 className="max-w-[344px] font-semibold text-xl md:text-2xl text-[#181A2A] dark:text-white mt-5">
                                {card.title}
                            </h2>
                            <div className="flex items-center gap-2 md:gap-5  text-[#97989F] text-base mt-5">
                                <p className="flex items-center gap-3">
                                    <img src={card.userImg} alt="jason" className="w-[36px]" />
                                    <span className="font-normal md:font-medium text-sm md:text-base">{card.name}</span>
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

const cards = [
    {
        id: 1,
        image: Img1,
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        userImg: User16,
        name: "Tracey Wilson",
        date: "August 20, 2022"
    },
    {
        id: 2,
        image: Img2,
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        userImg: User27,
        name: "Jason Francisco",
        date: "August 20, 2022"
    },
    {
        id: 3,
        image: Img3,
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        userImg: User38,
        name: "Elizabeth Slavin",
        date: "August 20, 2022"
    },
    {
        id: 4,
        image: Img4,
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        userImg: User49,
        name: "Ernie Smith",
        date: "August 20, 2022"
    },
    {
        id: 5,
        image: Img5,
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        userImg: User5,
        name: "Ernie Smith",
        date: "August 20, 2022"
    },
    {
        id: 6,
        image: Img6,
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        userImg: User16,
        name: "Tracey Wilson",
        date: "August 20, 2022"
    },
    {
        id: 7,
        image: Img7,
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        userImg: User27,
        name: "Jason Francisco",
        date: "August 20, 2022"
    },
    {
        id: 8,
        image: Img8,
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        userImg: User38,
        name: "Elizabeth Slavin",
        date: "August 20, 2022"
    },
    {
        id: 9,
        image: Img9,
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        userImg: User49,
        name: "Ernie Smith",
        date: "August 20, 2022"
    },
]