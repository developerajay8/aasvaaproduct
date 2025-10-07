"use client";
import React, { useEffect, useRef, useState } from 'react';
import { FiSearch, FiMic, FiSettings } from "react-icons/fi";
import Upgrade from './upgrade';

const Database = () => {
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
        <div className="overflow-hidden">
            <div className="flex overflow-hidden gap-5">
                <div className="w-[7%] bg-black text-white">
                                    hehbdhedbfb fbrbfhrbfhfrfh
                                </div>


                <div className="">
                    <Upgrade />
                    <div className="m-8">
                        <div className="grid grid-cols-3 gap-5">
                            <div className="p-6 bg-[#F1F1F1] rounded-[12px] shadow">
                                <div className="pb-6">
                                    <img src="/Frame 3384803.jpg" alt="" />
                                </div>
                                <h5 className='text-[#1B1B1B] pb-2 text-[24px] font-bold'>Prosecution Page</h5>
                                <p className='text-[#343434] text-[16px]'>Quickly access critical prosecution case details and updates to simplify research and strengthen your legal strategies.</p>

                            </div>

                            <div className="p-6 bg-[#F1F1F1] rounded-[12px] shadow">
                                <div className="pb-6">
                                    <img src="/Frame 3384803.jpg" alt="" />
                                </div>
                                <h5 className='text-[#1B1B1B] pb-2 text-[24px] font-bold'>Prosecution Page</h5>
                                <p className='text-[#343434] text-[16px]'>Quickly access critical prosecution case details and updates to simplify research and strengthen your legal strategies.</p>

                            </div>

                            <div className="p-6 bg-[#F1F1F1] rounded-[12px] shadow">
                                <div className="pb-6">
                                    <img src="/Frame 3384803.jpg" alt="" />
                                </div>
                                <h5 className='text-[#1B1B1B] pb-2 text-[24px] font-bold'>Prosecution Page</h5>
                                <p className='text-[#343434] text-[16px]'>Quickly access critical prosecution case details and updates to simplify research and strengthen your legal strategies.</p>

                            </div>

                            <div className="p-6 bg-[#F1F1F1] rounded-[12px] shadow">
                                <div className="pb-6">
                                    <img src="/Frame 3384803.jpg" alt="" />
                                </div>
                                <h5 className='text-[#1B1B1B] pb-2 text-[24px] font-bold'>Prosecution Page</h5>
                                <p className='text-[#343434] text-[16px]'>Quickly access critical prosecution case details and updates to simplify research and strengthen your legal strategies.</p>

                            </div>

                            <div className="p-6 bg-[#F1F1F1] rounded-[12px] shadow">
                                <div className="pb-6">
                                    <img src="/Frame 3384803.jpg" alt="" />
                                </div>
                                <h5 className='text-[#1B1B1B] pb-2 text-[24px] font-bold'>Prosecution Page</h5>
                                <p className='text-[#343434] text-[16px]'>Quickly access critical prosecution case details and updates to simplify research and strengthen your legal strategies.</p>

                            </div>

                            <div className="p-6 bg-[#F1F1F1] rounded-[12px] shadow">
                                <div className="pb-6">
                                    <img src="/Frame 3384803.jpg" alt="" />
                                </div>
                                <h5 className='text-[#1B1B1B] pb-2 text-[24px] font-bold'>Prosecution Page</h5>
                                <p className='text-[#343434] text-[16px]'>Quickly access critical prosecution case details and updates to simplify research and strengthen your legal strategies.</p>

                            </div>

                            <div className="p-6 bg-[#F1F1F1] rounded-[12px] shadow">
                                <div className="pb-6">
                                    <img src="/Frame 3384803.jpg" alt="" />
                                </div>
                                <h5 className='text-[#1B1B1B] pb-2 text-[24px] font-bold'>Prosecution Page</h5>
                                <p className='text-[#343434] text-[16px]'>Quickly access critical prosecution case details and updates to simplify research and strengthen your legal strategies.</p>

                            </div>

                            <div className="p-6 bg-[#F1F1F1] rounded-[12px] shadow">
                                <div className="pb-6">
                                    <img src="/Frame 3384803.jpg" alt="" />
                                </div>
                                <h5 className='text-[#1B1B1B] pb-2 text-[24px] font-bold'>Prosecution Page</h5>
                                <p className='text-[#343434] text-[16px]'>Quickly access critical prosecution case details and updates to simplify research and strengthen your legal strategies.</p>

                            </div>

                            <div className="p-6 bg-[#F1F1F1] rounded-[12px] shadow">
                                <div className="pb-6">
                                    <img src="/Frame 3384803.jpg" alt="" />
                                </div>
                                <h5 className='text-[#1B1B1B] pb-2 text-[24px] font-bold'>Prosecution Page</h5>
                                <p className='text-[#343434] text-[16px]'>Quickly access critical prosecution case details and updates to simplify research and strengthen your legal strategies.</p>

                            </div>

                            <div className="p-6 bg-[#F1F1F1] rounded-[12px] shadow">
                                <div className="pb-6">
                                    <img src="/Frame 3384803.jpg" alt="" />
                                </div>
                                <h5 className='text-[#1B1B1B] pb-2 text-[24px] font-bold'>Prosecution Page</h5>
                                <p className='text-[#343434] text-[16px]'>Quickly access critical prosecution case details and updates to simplify research and strengthen your legal strategies.</p>

                            </div>

                            <div className="p-6 bg-[#F1F1F1] rounded-[12px] shadow">
                                <div className="pb-6">
                                    <img src="/Frame 3384803.jpg" alt="" />
                                </div>
                                <h5 className='text-[#1B1B1B] pb-2 text-[24px] font-bold'>Prosecution Page</h5>
                                <p className='text-[#343434] text-[16px]'>Quickly access critical prosecution case details and updates to simplify research and strengthen your legal strategies.</p>

                            </div>

                            <div className="p-6 bg-[#F1F1F1] rounded-[12px] shadow">
                                <div className="pb-6">
                                    <img src="/Frame 3384803.jpg" alt="" />
                                </div>
                                <h5 className='text-[#1B1B1B] pb-2 text-[24px] font-bold'>Prosecution Page</h5>
                                <p className='text-[#343434] text-[16px]'>Quickly access critical prosecution case details and updates to simplify research and strengthen your legal strategies.</p>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Database;
