'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Search, Mic, X, ChevronDown, ArrowDown } from 'lucide-react';
import Header from '../components/header';
import Upgrade from '../components/upgrade';
import { FaCheck } from 'react-icons/fa';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';

type Option = {
    id: number;
    name: string;
    icon: string;
    link: string;
};

export default function CitationSearch() {
    const [journalName, setJournalName] = useState('');
    const [year, setYear] = useState('');
    const [volume, setVolume] = useState('');
    const [page, setPage] = useState('');


    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (dropdown: string) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    const selectOption = (dropdown: string, value: string) => {
        switch (dropdown) {
            case 'journal':
                setJournalName(value);
                break;
            case 'year':
                setYear(value);
                break;
            case 'volume':
                setVolume(value);
                break;
            case 'page':
                setPage(value);
                break;
        }
        setOpenDropdown(null);
    };

    const [courtOpen, setCourtOpen] = useState(false);
    const [selectedCourts, setSelectedCourts] = useState<string[]>(["Supreme Court"]);
    const courtRef = useRef<HTMLDivElement>(null);
    const sortRef = useRef<HTMLDivElement>(null);
    const [sortOpen, setSortOpen] = useState(false);


    const courtOptions = ["Supreme Court", "A.P.", "Allahabad", "Assam", "Assam & Nagaland"];

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

    const handleSelectAll = () => setSelectedCourts(courtOptions);
    const handleClearAll = () => setSelectedCourts([]);
    const toggleCourt = (court: string) => {
        setSelectedCourts((prev) =>
            prev.includes(court) ? prev.filter((c) => c !== court) : [...prev, court]
        );
    };


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
        <div className="w-full h-screen overflow-hidden">
            <div className="flex">
                {/* Left Sidebar */}
                <div className="w-[7%] bg-[#1E1E1E] py-[24px] px-[24.5px] flex flex-col justify-between overflow-y-auto h-screen">
                    <Header />
                </div>

                {/* Right Section */}
                <div className="w-full pt-[30px]">
                    <Upgrade />

                    <div className="min-h-[80vh] flex items-center justify-center">

                        <div className="w-full max-w-[1049px] mx-auto px-4 py-10">
                            {/* Title Section */}
                            <h2 className="text-3xl md:text-5xl italic font-semibold flex items-center mb-2 justify-center gap-2 ">
                                        <span className="text-xl"><img src="/Vector (2).jpg" alt="" /></span> Citation Search

                                    </h2>
                                    <h5 className='text-center mb-6 text-[#343434] text-[24px]'>Enter a citation and instantly retrieve the full case, summaries, and related precedents.</h5>

                            {/* Search Form */}
                            <div className="max-w-[993px] mx-auto ">
                                <div className="bg-[#E3E3E3] border-[1px] border-[#d7d7d7] rounded-[12px] px-4 mx-[48px] py-2 ">

                                    {/* First Row */}
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        {/* Journal Name Dropdown */}
                                        <div className="relative">
                                            <button
                                                onClick={() => toggleDropdown('journal')}
                                                className="w-full px-4 py-3   text-gray-700 text-sm  flex items-center justify-between  transition border-b border-[#515151]"
                                            >
                                                <span className={journalName ? 'text-gray-900' : 'text-gray-500'}>
                                                    {journalName || 'Journal Name'}
                                                </span>
                                                <ChevronDown size={18} className={`transition-transform ${openDropdown === 'journal' ? 'rotate-180' : ''}`} />
                                            </button>
                                            {openDropdown === 'journal' && (
                                                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                                                    <div onClick={() => selectOption('journal', 'Supreme Court Reporter')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700">Supreme Court Reporter</div>
                                                    <div onClick={() => selectOption('journal', 'Law Journal')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700">Law Journal</div>
                                                    <div onClick={() => selectOption('journal', 'Federal Reporter')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700">Federal Reporter</div>
                                                    <div onClick={() => selectOption('journal', 'Indian Law Reports')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700">Indian Law Reports</div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Year Dropdown */}
                                        <div className="relative">
                                            <button
                                                onClick={() => toggleDropdown('year')}
                                                className="w-full px-4 py-3   text-gray-700 text-sm  flex items-center justify-between  transition border-b border-[#515151]"
                                            >
                                                <span className={year ? 'text-gray-900' : 'text-gray-500'}>
                                                    {year || 'Year'}
                                                </span>
                                                <ChevronDown size={18} className={`transition-transform ${openDropdown === 'year' ? 'rotate-180' : ''}`} />
                                            </button>
                                            {openDropdown === 'year' && (
                                                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                                                    <div onClick={() => selectOption('year', '2024')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700">2024</div>
                                                    <div onClick={() => selectOption('year', '2023')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700">2023</div>
                                                    <div onClick={() => selectOption('year', '2022')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700">2022</div>
                                                    <div onClick={() => selectOption('year', '2021')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700">2021</div>
                                                    <div onClick={() => selectOption('year', '2020')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700">2020</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Second Row */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        {/* Volume Dropdown */}
                                        <div className="relative">
                                            <button
                                                onClick={() => toggleDropdown('volume')}
                                                className="w-full px-4 py-3   text-gray-700 text-sm  flex items-center justify-between  transition border-b border-[#515151]"
                                            >
                                                <span className={volume ? 'text-gray-900' : 'text-gray-500'}>
                                                    {volume || 'Volume'}
                                                </span>
                                                <ChevronDown size={18} className={`transition-transform ${openDropdown === 'volume' ? 'rotate-180' : ''}`} />
                                            </button>
                                            {openDropdown === 'volume' && (
                                                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                                                    <div onClick={() => selectOption('volume', 'Volume 1')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700">Volume 1</div>
                                                    <div onClick={() => selectOption('volume', 'Volume 2')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700">Volume 2</div>
                                                    <div onClick={() => selectOption('volume', 'Volume 3')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700">Volume 3</div>
                                                    <div onClick={() => selectOption('volume', 'Volume 4')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700">Volume 4</div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Page Dropdown */}
                                        <div className="relative">
                                            <button
                                                onClick={() => toggleDropdown('page')}
                                                className="w-full px-4 py-3   text-gray-700 text-sm  flex items-center justify-between  transition border-b border-[#515151]"
                                            >
                                                <span className={page ? 'text-gray-900' : 'text-gray-500'}>
                                                    {page || 'Page'}
                                                </span>
                                                <ChevronDown size={18} className={`transition-transform ${openDropdown === 'page' ? 'rotate-180' : ''}`} />
                                            </button>
                                            {openDropdown === 'page' && (
                                                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                                                    <div onClick={() => selectOption('page', 'Page 1')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700">Page 1</div>
                                                    <div onClick={() => selectOption('page', 'Page 10')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700">Page 10</div>
                                                    <div onClick={() => selectOption('page', 'Page 50')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700">Page 50</div>
                                                    <div onClick={() => selectOption('page', 'Page 100')} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700">Page 100</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>



                                    {/* Search Bar */}
                                    {/* ✅ Dropdown updated with Link */}
                                    <div className="flex items-center justify-between gap-3">

                                        <div className="">
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
                                        </div>


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
                        <div className="font-bold text-[#8A8A8A] text-[16px]">Includes:</div>
                        <div className="flex gap-3.5">
                            <span className="cursor-pointer text-[#8A8A8A] text-[14px] hover:text-black">
                                Case Law
                            </span>
                            <span className="cursor-pointer text-[#8A8A8A] text-[14px] hover:text-black">
                                Codes, Rules & Constitutions
                            </span>
                            <span className="cursor-pointer text-[#8A8A8A] text-[14px] hover:text-black">
                                Practical Guidance
                            </span>
                            <span className="cursor-pointer text-[#8A8A8A] text-[14px] hover:text-black">
                                Treatises
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}