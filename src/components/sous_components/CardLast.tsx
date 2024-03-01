import React from "react";
import Image from "next/image";
import { GiReturnArrow } from "react-icons/gi";

interface contentCard {
    title?: string;
    date?: string;
    isFree?: boolean;
    heure?: string;
    img?: string;
    lieu?: string;
}
const CardLast = ({ title, heure, img, date }: contentCard) => {
    return (
        <div
            className={
                "relative carousel-item flex flex-col w-[98%] lg:w-52 lg:h-72 bg-white rounded-lg border shadow hover:shadow-2xl cursor-pointer gap-3 h-full"
            }
        >
            <div className={" h-[50%] rounded-tr-lg rounded-tl-lg"}>
                <Image
                    src={img ? img : ""}
                    alt={"Affiche de l'evenement"}
                    width={300}
                    height={400}
                    className={
                        "rounded-tr-lg rounded-tl-lg h-full w-full object-fill"
                    }
                />
            </div>
            <div className={"p-2"}>
                <div
                    className={"w-full flex items-center justify-between gap-3"}
                >
                    <h4 className={"text-black text-[12px]"}>
                        {title?.split(".")}
                    </h4>
                </div>
                <div
                    className={"w-full flex items-center justify-between gap-1"}
                >
                    <h6 className={"bold-16"}>{date}</h6>
                    <div className={"border border-l-2 border-black  h-full"} />
                    <span className={"bold-16"}>{heure}%</span>
                </div>
                <div className="absolute top-28 mb-3 rounded flex items-center justify-center gap-1 p-2 w-24 text-white h-3 bg-[#3f9f8a]">
                    <GiReturnArrow size={10} color="#ffffff" />{" "}
                    <p className="text-sm">복귀 가능</p>
                </div>
            </div>
        </div>
    );
};
export default CardLast;
