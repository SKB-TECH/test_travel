//@ts-nocheck
"use client";
import React, { useEffect } from "react";
import { CardLast } from "@/components/index";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/settings/store";
import { apiService } from "@/settings/services/api.service";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardLastSkleton from "@/components/sous_components/CardLastSkleton";
const LastSection = () => {
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
                "flex flex-col justify-center items-center gap-10  w-full px-5 padding-container"
            }
        >
            {statusApi3.isLoading ? (
                <div
                    className={
                        "w-full flex flex-wrap items-center justify-center gap-5 p-5"
                    }
                >
                    {[
                        1, 2, 34, 5, 6, 7, 8, 9, 0, 22, 33, 44, 55, 66, 77, 77,
                        88, 19, 97, 300,
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
                                    "flex flex-col lg:flex-row items-center justify-center  gap-15 w-full h-full lg:ml-16"
                                }
                                key={index}
                            >
                                <div className="flex flex-row lg:flex-col justify-between items-start w-full lg:w-36 h-72">
                                    <h1 className="bold-16 text-black">
                                        {item.media?.length > 0 && item?.title}
                                    </h1>

                                    <div className="flex   gap-5 ">
                                        <a className={"text-2xl"}>{"<"}</a>
                                        <a className={"text-2xl"}>{">"}</a>
                                    </div>
                                </div>
                                <div
                                    className={
                                        "carousel flex  items-center justify-center w-full gap-5"
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
                                </div>
                            </div>
                        )
                )
            )}
        </section>
    );
};

export default LastSection;
