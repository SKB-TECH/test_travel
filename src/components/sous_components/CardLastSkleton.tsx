import React from "react";
import { Skeleton } from "antd";

const CardLast = () => {
    return (
        <Skeleton
            className={
                "relative flex flex-col w-[98%]  2xl:w-60 lg:w-56 lg:h-72 bg-white rounded-lg border shadow hover:shadow-2xl cursor-pointer gap-3 p-5"
            }
        ></Skeleton>
    );
};
export default CardLast;
