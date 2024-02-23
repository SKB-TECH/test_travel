import React from "react";
import Image from "next/image";

export interface contentCard {
    title?: string;
    imageUrl?: string;
}
const CardSeconSection = ({ title, imageUrl }: contentCard) => {
    return (
        <div
            className={
                "cursor-pointer  h-24 w-24 rounded-lg flex  flex-col justify-center items-center gap-1"
            }
        >
            <Image
                src={imageUrl ? imageUrl : ""}
                alt={"Image"}
                width={60}
                height={60}
            />
            <h3 className={"bold-16"}>{title}</h3>
        </div>
    );
};
export default CardSeconSection;
