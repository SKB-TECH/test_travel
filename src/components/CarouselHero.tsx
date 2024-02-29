//@ts-nocheck

"use client";

import React, { useEffect, useState, useRef } from "react";

import { Skeleton } from "@/components/index";
import { AppDispatch, RootState } from "@/settings/store";
import { useDispatch, useSelector } from "react-redux";
import { apiService } from "@/settings/services/api.service";

const CarouselHero = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { statusApi1, api1_data } = useSelector(
        (state: RootState) => state.api1
    );
    const [currentIndex, setCurrentIndex] = useState(1);

    const handleAutoplay = () => {
        const newIndex = currentIndex + 1;
        setCurrentIndex(5);
        console.log(newIndex);
    };
    const handlePrevClick = () => {
        const newIndex =
            currentIndex === 0 ? api1_data?.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        intervalRef.current = setInterval(handleAutoplay, 3000);
    };

    const handleNextClick = () => {
        const newIndex =
            currentIndex === api1_data?.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        intervalRef.current = setInterval(handleAutoplay, 3000);
    };

    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(handleAutoplay, 3000); // Adjust interval as needed
        return () => clearInterval(intervalRef.current);
    }, []); // Re-run useEffect on items change, ensuring carousel updates

    useEffect(() => {
        let isSend = true;
        if (isSend) {
            dispatch(apiService.api1());
        }
        return () => {
            isSend = false;
        };
    }, [dispatch]);

    const [isScroll, setIsScroll] = useState(false);

    const listenScrollEvent = () => {
        window.scrollY >= 85 ? setIsScroll(true) : setIsScroll(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <div
            className={
                "relative carousel carousel-center w-full space-x-4  h-96  mt-12"
            }
        >
            {statusApi1?.isLoading
                ? [12, 23, 27].map((item) => <Skeleton key={item} />)
                : api1_data?.map((items: contentCard, index: number) => (
                      <div
                          id={`slide${index}`}
                          className="carousel-item w-[1000px] cursor-pointer  bg-center bg-no-repeat bg-cover"
                          key={index}
                          style={{
                              backgroundImage: `url(${items?.pcImageUrl})`,
                          }}
                      ></div>
                  ))}

            {!statusApi1?.isLoading && (
                <div
                    className={`${!isScroll & !statusApi1.isLoading && "fixed "} w-[85%] lg:w-[400px] flex items-center justify-center lg:gap-96 transform  -translate-y-1/2 lg:left-1/2 right-5 top-52 gap-56`}
                >
                    <a
                        href={`#slide${currentIndex}`}
                        className="lg:-ml-96 btn rounded-full bg-[#9c9c9c] border-none text-white hover:bg-[#9c9c9c] font-bold"
                        onClick={handlePrevClick}
                    >
                        ❮
                    </a>
                    <a
                        href={`#slide${currentIndex}`}
                        className="lg:ml-44 btn rounded-full bg-[#9c9c9c] border-none text-white hover:bg-[#9c9c9c] font-bold"
                        onClick={handleNextClick}
                    >
                        ❯
                    </a>
                </div>
            )}
        </div>
    );
};

export default CarouselHero;
