"use client";
import React, { useEffect, useRef, useState } from 'react';
import { FiSearch, FiMic, FiSettings } from "react-icons/fi";
import Upgrade from './upgrade';
import Header from './header';

const Advancesearch = () => {
    const [query, setQuery] = useState("");
    const [sortOpen, setSortOpen] = useState(false);
    const [courtOpen, setCourtOpen] = useState(false);

    const [selectedSort, setSelectedSort] = useState("Most Relevant");
    const [selectedCourts, setSelectedCourts] = useState<string[]>(["Supreme Court"]);

    const sortRef = useRef<HTMLDivElement>(null);
    const courtRef = useRef<HTMLDivElement>(null);

    const sortOptions = ["Most Relevant", "Most Recent", "Least Recent", "Most Referred"];
    const courtOptions = ["Supreme Court", "A.P.", "Allahabad", "Assam", "Assam & Nagaland"];

    // ✅ Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                sortRef.current &&
                !sortRef.current.contains(event.target as Node) &&
                courtRef.current &&
                !courtRef.current.contains(event.target as Node)
            ) {
                setSortOpen(false);
                setCourtOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Select All
    const handleSelectAll = () => setSelectedCourts(courtOptions);

    // Clear All
    const handleClearAll = () => setSelectedCourts([]);

    // Toggle single checkbox
    const toggleCourt = (court: string) => {
        setSelectedCourts((prev) =>
            prev.includes(court) ? prev.filter((c) => c !== court) : [...prev, court]
        );
    };

    const [form, setForm] = useState({
        appellant: "",
        respondent: "",
        judge: "",
        advocate: "",
        caseNo: "",
        question: "",
    });


    return (
        <>
            <div className="">
                <div className="w-full h-screen overflow-hidden">
                    <div className="flex  ">
                        {/* Left Sidebar */}
                        <div className='w-[7%] bg-[#1E1E1E] py-[24px] px-[24.5px] flex flex-col justify-between overflow-y-auto h-screen '>
                            <Header />
                        </div>
                        <div className="w-full pt-[30px]">
                            <Upgrade />

                            <div className="min-h-[80vh] flex items-center justify-center">
                                <div className="w-full max-w-[1049px] mx-auto px-4 py-10">
                                    <h2 className="text-3xl md:text-5xl italic font-semibold flex items-center mb-2 justify-center gap-2 ">
                                        <span className="text-xl"><img src="/Vector (2).jpg" alt="" /></span> Advance Search

                                    </h2>
                                    <h5 className='text-center mb-6 text-[#343434] text-[24px]'>Filter and find exactly what you need, faster.</h5>

                                    {/* <div className="max-w-[993px] mx-auto">
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
                                <div className="flex items-center gap-4 relative">
                                    <div className="relative" ref={sortRef}>
                                        <div
                                            onClick={() => {
                                                setSortOpen(!sortOpen);
                                                setCourtOpen(false);
                                            }}
                                            className="flex items-center gap-2 cursor-pointer hover:bg-[#D5D5D5] px-4 py-2.5 rounded-full text-gray-700 bg-[#D5D5D5] whitespace-nowrap"
                                        >
                                            <span className="text-sm">{selectedSort}</span>
                                            <IoIosArrowDown />
                                        </div>
                                        {sortOpen && (
                                            <div className="absolute mt-2 w-56 bg-[#F5F5F5] shadow-md rounded-lg p-2 z-10">
                                                {sortOptions.map((option) => (
                                                    <label
                                                        key={option}
                                                        className="flex items-center gap-3 py-2 px-3 rounded-md cursor-pointer hover:bg-gray-200"
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="sort"
                                                            checked={selectedSort === option}
                                                            onChange={() => setSelectedSort(option)}
                                                            className="w-4 h-4"
                                                        />
                                                        <span className="text-sm text-gray-800">{option}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="relative" ref={courtRef}>
                                        <div
                                            onClick={() => {
                                                setCourtOpen(!courtOpen);
                                                setSortOpen(false);
                                            }}
                                            className="flex items-center gap-2 cursor-pointer hover:bg-[#D5D5D5] px-4 py-2.5 rounded-full text-gray-700 bg-[#D5D5D5] whitespace-nowrap"
                                        >
                                            <span className="text-sm">
                                                {selectedCourts.length === courtOptions.length
                                                    ? "All Court Selected"
                                                    : `${selectedCourts.length} Selected`}
                                            </span>
                                            <IoIosArrowDown />
                                        </div>
                                        {courtOpen && (
                                            <div className="absolute mt-2 w-64 bg-[#F5F5F5] shadow-md rounded-lg p-2 z-10">
                                                <div className="flex justify-between items-center px-3 py-2 border-b border-gray-300">
                                                    <button
                                                        onClick={handleSelectAll}
                                                        className="text-sm text-blue-600 hover:underline"
                                                    >
                                                        Select All
                                                    </button>
                                                    <button
                                                        onClick={handleClearAll}
                                                        className="text-sm text-red-500 hover:underline"
                                                    >
                                                        Clear All
                                                    </button>
                                                </div>

                                                {courtOptions.map((court, index) => (
                                                    <label
                                                        key={court}
                                                        className={`flex items-center gap-3 py-2 px-3 rounded-md cursor-pointer hover:bg-gray-200 ${index === 0 ? "mt-2" : ""
                                                            }`}
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedCourts.includes(court)}
                                                            onChange={() => toggleCourt(court)}
                                                            className="w-4 h-4"
                                                        />
                                                        <span className="text-sm text-gray-800">{court}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2 hover:bg-[#D5D5D5] px-4 py-2.5 rounded-[12px] text-gray-700 bg-[#D5D5D5] whitespace-nowrap">
                                                        <div className=""><img src="/carbon_chip.jpg" alt="" /></div>
                                                        <button className="text-sm">Model</button>
                                                        <IoIosArrowDown />
                                                    </div>
                                    <button className="cursor-pointer"><img src="/Frame 3385264.svg" alt="" /></button>
                                    <button className="cursor-pointer"><img src="/Frame 30.svg" alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </div> */}


                                    <div className="max-w-[993px] mx-auto ">
                                        <div className="bg-[#E3E3E3] border-[1px] border-[#d7d7d7] rounded-[12px] px-4 mx-[48px] py-2">
                                            {/* Ask a question */}
                                            <input
                                                type="text"
                                                placeholder="Ask a question..."
                                                value={form.question}
                                                onChange={(e) => setForm({ ...form, question: e.target.value })}
                                                className="w-full bg-transparent border-none outline-none text-gray-800 text-lg placeholder-gray-500 mb-6"
                                            />

                                            {/* Form Fields */}
                                            <div className="grid grid-cols-2 gap-6 mb-6">
                                                <input
                                                    type="text"
                                                    placeholder="Appellant"
                                                    value={form.appellant}
                                                    onChange={(e) => setForm({ ...form, appellant: e.target.value })}
                                                    className="w-full  bg-transparent border-b border-[#515151] outline-none py-1"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Respondent"
                                                    value={form.respondent}
                                                    onChange={(e) => setForm({ ...form, respondent: e.target.value })}
                                                    className="w-full bg-transparent border-b border-[#515151] outline-none py-1"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Judge"
                                                    value={form.judge}
                                                    onChange={(e) => setForm({ ...form, judge: e.target.value })}
                                                    className="w-full bg-transparent border-b border-[#515151] outline-none py-1"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Advocate"
                                                    value={form.advocate}
                                                    onChange={(e) => setForm({ ...form, advocate: e.target.value })}
                                                    className="w-full bg-transparent border-b border-[#515151] outline-none py-1"
                                                />
                                            </div>

                                            {/* Case No */}
                                            <input
                                                type="text"
                                                placeholder="Case No."
                                                value={form.caseNo}
                                                onChange={(e) => setForm({ ...form, caseNo: e.target.value })}
                                                className="w-full bg-transparent border-b border-[#515151] outline-none py-1 mb-6"
                                            />

                                            {/* Filters + Actions */}
                                            <div className="flex items-center justify-between flex-wrap gap-3">
                                                {/* Left Filters */}
                                                <div className="flex gap-3 flex-wrap">
                                                    <select className="px-4 py-2 bg-gray-300 rounded-md text-sm">
                                                        <option>Most Relevant</option>
                                                        <option>Newest</option>
                                                        <option>Oldest</option>
                                                    </select>
                                                    <select className="px-4 py-2 bg-gray-300 rounded-md text-sm">
                                                        <option>All Court Selected</option>
                                                        <option>Supreme Court</option>
                                                        <option>High Court</option>
                                                    </select>
                                                    <select className="px-4 py-2 bg-gray-300 rounded-md text-sm">
                                                        <option>All Word</option>
                                                        <option>Exact Match</option>
                                                        <option>Any Word</option>
                                                    </select>
                                                </div>

                                                {/* Right Actions */}
                                                <div className="flex items-center gap-3">
                                                    <select className="px-4 py-2 bg-gray-300 rounded-md text-sm flex items-center gap-2">
                                                        <option>Model</option>
                                                        <option>GPT</option>
                                                        <option>BERT</option>
                                                    </select>
                                                    <button className="p-3 rounded-md bg-gray-300">
                                                        <FiMic size={20} />
                                                    </button>
                                                    <button className="p-3 rounded-md bg-black text-white">
                                                        <FiSearch size={20} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="text-center flex gap-2 items-center justify-center pb-[48px] text-gray-700 text-[16px]">
                                <div className=" ">
                                    <span className="cursor-pointer transition duration-700 text-[#8A8A8A] text-[14px] hover:text-black">Making legal search easy for you or Simplifying legal search for you</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Advancesearch;
