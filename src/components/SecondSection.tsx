//@ts-nocheck
"use client";

import React, { useEffect } from "react";
import CardSeconSection from "@/components/sous_components/CardSeconSection";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/settings/store";
import { apiService } from "@/settings/services/api.service";
import { SkletonSecond } from "@/components/index";

const SecondSection = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { statusApi2, api2_data } = useSelector(
        (state: RootState) => state.api2
    );

    useEffect(() => {
        let isSend = true;
        if (isSend) {
            dispatch(apiService.api2());
        }
        return () => {
            isSend = false;
        };
    }, [dispatch]);
    console.log(api2_data);
    return (
        <section
            className={"flex flex-col padding-container  gap-5 w-full h-full"}
        >
            <div
                className={
                    "flex flex-row flex-wrap items-center justify-center w-full gap-2 lg:gap-10 h-full"
                }
            >
                {statusApi2.isLoading
                    ? [1, 2, 3, 5, 6, 7].map((item) => (
                          <SkletonSecond key={item} />
                      ))
                    : api2_data?.map((item: [], index: number) => (
                          <CardSeconSection
                              key={index}
                              imageUrl={item?.imageUrl}
                              title={item?.title}
                          />
                      ))}
            </div>
        </section>
    );
};
export default SecondSection;
