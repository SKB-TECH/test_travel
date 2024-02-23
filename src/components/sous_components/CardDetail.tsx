import React from "react";
export interface contentCard {
    title?: string;
    date?: string;
    isFree?: boolean;
    heure?: string;

    imageUrl?: string;
    lieu?: string;
}
const CardDetail = ({ title, imageUrl }: contentCard) => {
    return (
        <div
            className={
                "relative flex flex-row w-[100%]  2xl:w-[700px] lg:w-[550px] h-72 bg-white rounded-lg border items-center  justify-around shadow hover:shadow-2xl cursor-pointer gap-5 px-5 bg-center bg-no-repeat bg-cover"
            }
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className={"p-3"}>
                <div
                    className={"w-full flex items-center justify-between gap-3"}
                >
                    <h3 className={"bold-32"}>{title}</h3>
                </div>
            </div>
        </div>
    );
};
export default CardDetail;
