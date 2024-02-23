import React from "react";
import Image from "next/image";
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
                "relative flex flex-col w-[98%]  2xl:w-60 lg:w-56 lg:h-72 bg-white rounded-lg border shadow hover:shadow-2xl cursor-pointer gap-3 h-full"
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
                    <h3 className={"bold-16"}>{title}</h3>
                </div>
                <div
                    className={"w-full flex items-center justify-between gap-1"}
                >
                    <h6 className={"bold-16"}>{date}</h6>
                    <div className={"border border-l-2 border-black  h-full"} />
                    <span className={"bold-16"}>{heure}%</span>
                </div>
            </div>
        </div>
    );
};
export default CardLast;
