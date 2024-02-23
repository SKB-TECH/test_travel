"use client";

import React, { useState } from "react";
import logo from "../assets/lo.png";
import logol from "../assets/gauchel.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
    const [active, setActive] = useState(false);
    return (
        <div
            className={`flex flex-row items-center justify-center padding-container fixed w-full h-16 lg:h-20  top-0 left-0 right-0 z-50  bg-white border-b-2
            `}
        >
            <div className="flex flex-row items-center justify-between  w-full h-full p-6">
                <div className="lg:w-[20%] flex flex-row h-full  items-center cursor-pointer lg:-mt-0 -mt-3">
                    <Image
                        src={logo}
                        alt="Picture of the author"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="md:flex-1 text-xl mr-2 ml-20 md:hidden">
                    <AiOutlineMenu
                        size={45}
                        className="cursor-pointer z-1000"
                        onClick={() => setActive(!active)}
                    />
                </div>
                <div className="hidden w-[90%] lg:flex flex-row  items-center  justify-around lg:justify-around gap-14">
                    <div
                        className={
                            "flex flex-row items-center justify-center text-gray-500 text-[16px] w-full gap-10"
                        }
                    >
                        <div
                            className={
                                "flex items-center gap-5 w-[50%] p-2 border "
                            }
                        >
                            <div
                                className={
                                    "flex items-center gap-2 w-62 h-full"
                                }
                            >
                                <IoIosSearch size={20} />
                                <input
                                    className={
                                        "outline-none border-none w-24 lg:w-72 border border-gray-300"
                                    }
                                    placeholder={"在网络上搜索您想要的文章"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-row  items-center  gap-5">
                        <div
                            className={
                                "flex flex-row gap-14 items-center justify-around "
                            }
                        >
                            <div className=" flex flex-row h-full  items-center cursor-pointer lg:-mt-0 -mt-3">
                                <Image
                                    src={logol}
                                    alt="Picture of the author"
                                    width={250}
                                    height={250}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={
                    active ? "md:fixed top-0 left-0 w-full h-screen  z-10" : ""
                }
            >
                <div
                    className={
                        active
                            ? "fixed top-0 left-0 w-[75%] md:w-[45%] h-screen bg-white p-4 ease-in duration-500"
                            : "fixed left-[-100%] top-0 p-10 ease-in duration-500 z-0"
                    }
                >
                    <div className="flex items-center justify-between z-[1000]">
                        <div className="">
                            <Image
                                src={logo}
                                alt="Picture of the author"
                                width={120}
                                height={120}
                            />
                        </div>
                        <button
                            onClick={() => setActive(!active)}
                            className="p-2 mr-2 rounded-full shadow-lg cursor-pointer shadow-gray-400"
                        >
                            <AiOutlineClose />
                        </button>
                    </div>
                    <div className="my-4 border-b border-gray-300"></div>
                    <div className="flex flex-col py-4 gap-10 cursor-pointer">
                        <select
                            className={
                                "outline-none border-none w-56 h-10 bg-inherit text-color-text text-lg"
                            }
                        >
                            <option className={"bold-16"}>
                                Trouver un evenemnet
                            </option>
                        </select>
                        <div>
                            <ul
                                className={
                                    "flex flex-col  text-gray-500 text-[16px] w-full gap-10"
                                }
                            >
                                <li
                                    className={
                                        "cursor-pointer hover:text-color-text text-[16px]"
                                    }
                                >
                                    Home
                                </li>
                                <li
                                    className={
                                        "cursor-pointer hover:text-color-text text-[16px]"
                                    }
                                >
                                    Product
                                </li>
                                <li
                                    className={
                                        "cursor-pointer hover:text-color-text text-[16px]"
                                    }
                                >
                                    Contact us
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
