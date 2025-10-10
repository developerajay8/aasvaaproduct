"use client";
import React, { useEffect, useRef, useState } from 'react';
import { FiSearch, FiMic, FiSettings, FiChevronDown } from "react-icons/fi";
import Upgrade from './upgrade';
import Header from './header';
import { FaCheck } from 'react-icons/fa';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';

type Option = {
    id: number;
    name: string;
    icon: string;
    link: string;
};

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


    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('Keyword Search');
    const dropdownRef = useRef<HTMLDivElement>(null);


    const options: Option[] = [
        { id: 1, name: 'Keyword Search', icon: '≡', link: '/keyword-search' },
        { id: 2, name: 'Citation Search', icon: '"', link: '/citation-search' },
        { id: 3, name: 'Advance Search', icon: '⚙', link: '/advance-search' }
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const handleSelect = (option: Option): void => {
        setSelectedOption(option.name);
        setIsOpen(false);
    };

    const ArrowDown: React.FC = () => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );





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



                                                    <button className="flex items-center gap-2 cursor-pointer hover:bg-[#D5D5D5] px-4 py-2.5 rounded-full text-gray-700 bg-[#D5D5D5] whitespace-nowrap">
                                                        <span className='text-sm'>All Word</span>
                                                        <IoIosArrowDown />
                                                    </button>
                                                </div>

                                                {/* Right Actions */}
                                                <div className="flex items-center gap-4">
                                                    <div className="relative" ref={dropdownRef}>
                                                        <div
                                                            onClick={() => setIsOpen(!isOpen)}
                                                            className="flex items-center gap-2 hover:bg-[#D5D5D5] px-4 py-2.5 rounded-[12px] text-gray-700 bg-[#D5D5D5] whitespace-nowrap cursor-pointer transition-colors"
                                                        >
                                                            <img src="/carbon_chip.jpg" alt="" className="w-5 h-5" />
                                                            <button className="text-sm">Model</button>
                                                            <ArrowDown />
                                                        </div>

                                                        {isOpen && (
                                                            <div className="absolute top-full mt-2 left-0 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 animate-fadeIn">
                                                                {options.map((option) => (
                                                                    <Link
                                                                        key={option.id}
                                                                        href={option.link}
                                                                        onClick={() => handleSelect(option)}
                                                                    >
                                                                        <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
                                                                            <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg text-gray-700 font-medium text-lg">
                                                                                {option.icon}
                                                                            </div>
                                                                            <span className="text-sm text-gray-700 flex-1">{option.name}</span>
                                                                            <div
                                                                                className={`w-5 h-5 flex items-center justify-center rounded-full border-2 transition-all ${selectedOption === option.name
                                                                                    ? "bg-black border-black"
                                                                                    : "border-gray-400"
                                                                                    }`}
                                                                            >
                                                                                {selectedOption === option.name && (
                                                                                    <FaCheck className="text-white text-[12px]" />
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>

                                                    <style jsx>{`
                            @keyframes fadeIn {
                              from {
                                opacity: 0;
                                transform: translateY(-4px);
                              }
                              to {
                                opacity: 1;
                                transform: translateY(0);
                              }
                            }
                            .animate-fadeIn {
                              animation: fadeIn 0.15s ease-out;
                            }
                          `}</style>
                                                    <button className="cursor-pointer">
                                                        <img src="/Frame 3385264.svg" alt="" />
                                                    </button>
                                                    <button className="cursor-pointer">
                                                        <img src="/Frame 30.svg" alt="" />
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
