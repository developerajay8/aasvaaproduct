"use client";
import { useState } from "react";
import {
    FiSearch,
    FiDatabase,
    FiCompass,
    FiUser,
    FiInfo,
    FiBell,
} from "react-icons/fi";

import { MdOutlineSearch } from "react-icons/md";
import Image from "next/image";


import { useRouter } from "next/navigation";
import Rightview from "./rightview";
import Link from "next/link";

const Header = () => {
   

    const menuItems = [
  { id: "ai-assistance", label: "AI Assistance", href: "/ai-assistance", icon: <FiSearch size={30} /> },
  { id: "ai-search", label: "AI Search", href: "/ai-search", icon: <FiSearch size={30} /> },
  { id: "advance-search", label: "Advance Search", href: "/keyword-search", icon: <MdOutlineSearch size={30} /> },
  { id: "database", label: "Database", href: "/database", icon: <FiDatabase size={30} /> },
  { id: "discover", label: "Discover", href: "/discover", icon: <FiCompass size={30} /> },
  { id: "virtual-assistance", label: "Virtual Assistance", href: "/virtual-assistance", icon: <FiUser size={30} /> },
];


    const bottomItems = [
        { id: "info", label: "", icon: <FiInfo size={30} /> },
        { id: "notification", label: "", icon: <FiBell size={30} /> },
    ];

   

      const router = useRouter();

    return (
        
            <div className="">
                {/* Sidebar */}
                <div className="">
                    {/* Logo */}
                    <div
                        className="mb-6 cursor-pointer"
                    >
                    <Link href={"/"}>
                        <Image
                            src="/Frame 3385255.jpg"
                            alt="Logo"
                            className="rounded-[12px] mx-auto"
                            width={50}
                            height={50}
                        />
                        </Link>
                        
                    </div>

                    {/* Menu */}
                    <div className="flex flex-col gap-6 pb-[77px] items-center flex-1">
      {menuItems.map((item) => (
        <div
          key={item.id}
          onClick={() => router.push(item.href)} // ✅ URL change
          className="flex flex-col items-center cursor-pointer group"
        >
          <div className="w-12 h-12 flex items-center justify-center hover:text-[#F1F1F1] text-[#C7C7C7] rounded-lg hover:bg-[#515151] transition">
            {item.icon}
          </div>
          {item.label && (
            <span className="text-xs mt-1 text-[#C7C7C7] group-hover:text-[#f1f1f1] opacity-80 group-hover:opacity-100 transition text-center">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </div>

                    {/* Bottom Items */}
                    <div className="flex flex-col gap-6 items-center">
                        {bottomItems.map((item) => (
                            <div
                                key={item.id}
                                className="w-12 h-12 flex items-center justify-center hover:text-[#F1F1F1] text-[#C7C7C7] rounded-lg hover:bg-[#515151] transition cursor-pointer"
                            >
                                {item.icon}
                            </div>
                        ))}
                        <div className="w-12 h-12 mx-auto mt-[12px] ">
                            <img src="/Rectangle 246.png" alt="" />
                        </div>
                    </div>
                </div>

                

                
            </div>
        
    );
};

export default Header;
