import React from "react";
import { Skeleton } from "antd";

const CardSeconSection = () => {
    return (
        <Skeleton
            className={
                "cursor-pointer bg-bgGray h-24 w-32 hover:shadow-lg rounded-lg border flex  flex-col justify-center items-center gap-1"
            }
        ></Skeleton>
    );
};
export default CardSeconSection;
