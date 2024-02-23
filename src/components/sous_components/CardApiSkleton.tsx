import { Skeleton } from "antd";

const CardDetail = () => {
    return (
        <Skeleton
            className={
                "relative flex flex-row w-[100%]  2xl:w-96 lg:w-[550px] h-56 bg-white rounded-lg border items-center  justify-around shadow hover:shadow-2xl cursor-pointer gap-5 px-5 bg-center bg-no-repeat bg-cover"
            }
        ></Skeleton>
    );
};
export default CardDetail;
