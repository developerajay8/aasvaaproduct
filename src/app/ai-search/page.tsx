"use client";
import React, { useState } from 'react';
import Upgrade from '../components/upgrade';
import Header from '../components/header';
import { IoIosArrowDown } from 'react-icons/io';

const Page = () => {
    const [query, setQuery] = useState("");

    return (
        <div className="w-full h-screen overflow-hidden">
            <div className="flex">
                <div className="w-[7%] bg-[#1E1E1E] py-[24px] px-[24.5px] flex flex-col justify-between overflow-y-auto h-screen">
                    <Header />
                </div>


                <div className="bg-[#F9F9F9] w-full pt-[30px] overflow-y-auto h-screen flex flex-col ">
                    <Upgrade />
                    <div
                        className="w-full bg-cover bg-center "
                        style={{ backgroundImage: "url('/Frame 3385254.svg')" }}
                    >

                        <div className="min-h-[80vh] flex items-center justify-center">
                            <div className="w-full max-w-[1049px] mx-auto px-4 py-10">
                                <h2 className="text-3xl md:text-5xl italic font-semibold flex items-center mb-2 justify-center gap-2 ">
                                    <span className="text-xl"><img src="/Vector (2).jpg" alt="" /></span> Search

                                </h2>
                                <h5 className='text-center mb-6 text-[#343434] text-[24px]'>Find cases, laws, with filters.</h5>

                                <div className="max-w-[993px] mx-auto">
                                    <div className="bg-[#E3E3E3] border-[1px] border-[#d7d7d7] rounded-[12px] px-4 mx-[48px] py-2 flex items-center justify-between">
                                        <div className="w-full py-6">
                                            <input
                                                type="text"
                                                value={query}
                                                onChange={(e) => setQuery(e.target.value)}
                                                placeholder="Ask a question..."
                                                className="w-full bg-transparent border-none outline-none text-[18px] text-[#A8A8A8] placeholder-[#A8A8A8] px-4 py-2"
                                            />
                                        </div>

                                        <div className="flex items-center gap-3">

                                            <button className="cursor-pointer"><img src="/Frame 3385264.svg" alt="" /></button>
                                            <button className="cursor-pointer"><img src="/Frame 30.svg" alt="" /></button>
                                        </div>
                                    </div>
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
    );
}

export default Page;
