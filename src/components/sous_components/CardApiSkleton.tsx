import { Skeleton } from "antd";

const CardDetail = () => {
    return (
        <Skeleton
            className={
                "flex flex-row w-[100%] mt-12 lg:w-[960px] h-96 bg-white rounded-lg border items-center  justify-around shadow hover:shadow-2xl cursor-pointer gap-5 px-5 bg-center bg-no-repeat bg-cover"
            }
        ></Skeleton>
    );
};
export default CardDetail;
