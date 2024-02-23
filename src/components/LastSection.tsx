//@ts-nocheck
"use client";
import React, { useEffect } from "react";
import { CardLast } from "@/components/index";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/settings/store";
import { apiService } from "@/settings/services/api.service";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardLastSkleton from "@/components/sous_components/CardLastSkleton";
const LastSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        gap: 100,
        slidesToShow: 4,
        slidesToScroll: 4,
        // autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
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
    const dispatch = useDispatch<AppDispatch>();
    const { statusApi3, api3_data } = useSelector(
        (state: RootState) => state.api3
    );

    useEffect(() => {
        let isSend = true;
        if (isSend) {
            dispatch(apiService.api3());
        }
        return () => {
            isSend = false;
        };
    }, [dispatch]);
    return (
        <section
            className={
                "flex flex-col justify-center 2xl:items-center gap-4 gap-y-20 w-full px-5 2xl:padding-container"
            }
        >
            {statusApi3.isLoading ? (
                <div
                    className={
                        "w-full flex flex-wrap items-center justify-center gap-5 p-5"
                    }
                >
                    { [
                        1,
                        2,
                        34,
                        5,
                        6,
                        7,
                        8,
                        9,
                        0,
                        22,
                        33,
                        44,
                        55,
                        66,
                        77,
                        77,
                        88,
                        19,
                        97,
                        300,
                    ].map((ite) => (
                        <CardLastSkleton key={ite} />
                    ))}
                </div>
            ) : (
                api3_data?.items?.map(
                    (item, index: number) =>
                        item.media?.length > 0 && (
                            <div
                                className={
                                    "flex flex-wrap xl:flex-nowrap  gap-15 w-full"
                                }
                                key={index}
                            >
                                <h1 className="flex-none bold-16">
                                    {item.media?.length > 0 && item?.title}
                                </h1>
                                <Slider
                                    {...settings}
                                    className={
                                        "flex flex-grow items-center justify-center w-full"
                                    }
                                >
                                    {statusApi3.isLoading
                                        ? [1, 2, 3, 4].map((it) => (
                                              <CardLastSkleton key={it} />
                                          ))
                                        : item?.media?.map(
                                              (item, index: number) => (
                                                  <CardLast
                                                      key={index}
                                                      title={item.type}
                                                      img={item?.uri}
                                                      date={item?.collectionId}
                                                      heure={item.seq}
                                                  />
                                              )
                                          )}
                                </Slider>
                            </div>
                        )
                )
            )}
        </section>
    );
};

export default LastSection;
