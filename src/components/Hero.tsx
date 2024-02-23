//@ts-nocheck

"use client";

import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CardDetail, Skeleton } from "@/components/index";
import { AppDispatch, RootState } from "@/settings/store";
import { useDispatch, useSelector } from "react-redux";
import { apiService } from "@/settings/services/api.service";
import { contentCard } from "@/components/sous_components/CardDetail";
const Hero = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { statusApi1, api1_data } = useSelector(
        (state: RootState) => state.api1
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        gap: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    useEffect(() => {
        let isSend = true;
        if (isSend) {
            dispatch(apiService.api1());
        }
        return () => {
            isSend = false;
        };
    }, [dispatch]);

    return (
        <Slider
            {...settings}
            className={
                "flex items-center justify-center lg:w-[95%] w-[100%] lg:mt-24  mt-14"
            }
        >
            {statusApi1?.isLoading
                ? [12, 23, 4, 5, 56, 6, 7].map((item) => (
                      <Skeleton key={item} />
                  ))
                : api1_data?.map((items: contentCard, index: number) => (
                      <CardDetail imageUrl={items?.pcImageUrl} key={index} />
                  ))}
        </Slider>
    );
};
export default Hero;
