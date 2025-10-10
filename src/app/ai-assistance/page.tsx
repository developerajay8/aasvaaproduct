"use client";
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { GrAttachment } from "react-icons/gr";
import Aiassestence from "../components/aiassestence";
import Upgrade from "../components/upgrade";
import Link from "next/link";
import Header from '../components/header';
const Page = () => {
        const [query, setQuery] = useState("");

    
    return (
        <div>
            <div className="">
 <div className="w-full h-screen overflow-hidden">
            <div className="flex">
                <div className='w-[7%] bg-[#1E1E1E] py-[24px] px-[24.5px] flex flex-col justify-between overflow-y-auto h-screen '>
                <Header/>
                </div>
             
                        <div className='bg-[#F9F9F9] w-full pt-[30px] h-screen flex flex-col'>
                            <Upgrade/>

                            <div className="min-h-[80vh] flex items-center justify-center">
                                <div className="w-full max-w-[1049px] mx-auto px-4 py-10">
                                    <h2 className="text-3xl md:text-5xl italic font-semibold flex items-center justify-center gap-2 mb-6">
                                        <span className="text-xl"><img src="/Vector.jpg" alt="" /></span> AI Assistance
                                    </h2>

                                    <div className="max-w-[993px] mx-auto">
                                        <div className="bg-[#E3E3E3] border-[1px] border-[#d7d7d7] rounded-[12px] px-4 mx-[48px] py-2">
                                            <div className="pb-8">
                                                <input
                                                    type="text"
                                                    value={query}
                                                    onChange={(e) => setQuery(e.target.value)}
                                                    placeholder="Ask a question..."
                                                    className="flex-1 bg-transparent outline-none text-sm md:text-base text-black placeholder-gray-500"
                                                />
                                            </div>

                                            <div className="flex items-center justify-between w-full">
                                                <div className="flex items-center gap-2">
                                                    <div className="hover:bg-[#D5D5D5] p-2.5 rounded-[4px] cursor-pointer">
                                                        <GrAttachment className="text-[17px]" />
                                                    </div>

                                                    <div className="flex items-center gap-2 hover:bg-[#D5D5D5] px-4 py-2.5 rounded-full text-gray-700 bg-[#D5D5D5] whitespace-nowrap">
                                                        <button className="text-sm">Jurisdiction: Filter</button>
                                                        <IoIosArrowDown />
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <button className="cursor-pointer"><img src="/Frame 3385264.svg" alt="" /></button>
                                                    <button className="cursor-pointer"><img src="/Frame 30.svg" alt="" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4 flex justify-center gap-2">
                                        <span className="py-[12px] rounded-full px-[16px] text-[#515151] text-[14px] bg-[#E3E3E3]">Lorem Ipsum is simply dummy text of the printing and.</span>
                                        <span className="py-[12px] rounded-full px-[16px] text-[#515151] text-[14px] bg-[#E3E3E3]">Generate a draft :</span>
                                        <span className="py-[12px] rounded-full px-[16px] text-[#515151] text-[14px] bg-[#E3E3E3]">Summarize a case :</span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center flex gap-2 items-center justify-center pb-[48px] text-gray-700 text-[16px]">
                                <div className="font-bold text-[#8A8A8A] text-[16px]">Includes:</div>
                                <div className="flex gap-3.5">
                                    <span className="cursor-pointer text-[#8A8A8A] text-[14px] hover:text-black">Case Law</span>
                                    <span className="cursor-pointer text-[#8A8A8A] text-[14px] hover:text-black">Codes, Rules & Constitutions</span>
                                    <span className="cursor-pointer text-[#8A8A8A] text-[14px] hover:text-black">Practical Guidance</span>
                                    <span className="cursor-pointer text-[#8A8A8A] text-[14px] hover:text-black">Treatises</span>
                                </div>
                            </div>
                        </div>
             

                   
                </div>
                </div>
                </div>
        </div>
    );
}

export default Page;
