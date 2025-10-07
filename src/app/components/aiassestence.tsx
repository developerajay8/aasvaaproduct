"use client";
import React, { useEffect, useRef, useState } from 'react';
import { GrAttachment } from 'react-icons/gr';
import { IoIosArrowDown } from 'react-icons/io';
import Upgrade from './upgrade';
import Header from './header';

const Aiassestence = () => {
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
    return (
        <>
        <div className="">
           
            <div className="">
            <Upgrade />

            <div className="min-h-[80vh] flex items-center justify-center">
                <div className="w-full max-w-[1049px] mx-auto px-4 py-10">
                    <h2 className="text-3xl md:text-5xl italic font-semibold flex items-center mb-2 justify-center gap-2 ">
                        <span className="text-xl"><img src="/Vector (2).jpg" alt="" /></span> Search

                    </h2>
                    <h5 className='text-center mb-6 text-[#343434] text-[24px]'>Find cases, laws, with filters.</h5>

                    <div className="max-w-[993px] mx-auto">
                        <div className="bg-[#E3E3E3] border-[1px] border-[#d7d7d7] rounded-[12px] px-4 mx-[48px] py-2">
                            <div className="pb-8">
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Ask a question..."
                                    className="w-full bg-transparent border-none  mb-6 flex-1  outline-none text-[18px] text-[#A8A8A8] placeholder-[#A8A8A8]  "
                                /> 
                            </div>

                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-4 relative">
                                    {/* Sort Dropdown */}
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

                                    {/* Court Dropdown */}
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
                                                {/* Select All + Clear All */}
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

                                                {/* Court Options */}
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
        </>
    );
}

export default Aiassestence;
