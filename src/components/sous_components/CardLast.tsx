import React from "react";
import Image from "next/image";
import { GiReturnArrow } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { getLike } from "@/helprs";

interface contentCard {
    title?: string;
    seq?: number;
    isFree?: boolean;
    price?: number;
    img?: string;
    lieu?: string;
}
const CardLast = ({ title, seq, img, price }: contentCard) => {
    return (
        <div
            className={
                "relative carousel-item flex flex-col w-[98%] lg:w-52 lg:h-80 bg-white  cursor-pointer gap-3 h-full"
            }
        >
            <div className={" h-[50%] rounded-lg"}>
                <Image
                    src={img ? img : ""}
                    alt={"광고 이미지 "}
                    width={300}
                    height={400}
                    className={"rounded-lg  h-full w-full object-fill"}
                />
            </div>
            <div className={"p-2 flex flex-col h-[50%] gap-3"}>
                <div
                    className={"w-full flex items-center justify-between gap-3"}
                >
                    <h4 className={"text-black text-[16px]"}>
                        {title?.split(".")}
                    </h4>
                </div>
                <div className={"w-full flex items-center gap-1"}>
                    <h6 className={"txet-[16px] text-red-500"}>{seq}%</h6>
                    <span className={"txet-[16px] text-black"}>{price}원</span>
                </div>
                <div className="flex items-center gap-1 text-[#363636]">
                    <FaStar />
                    <span>{getLike(3, 5)}</span>
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
