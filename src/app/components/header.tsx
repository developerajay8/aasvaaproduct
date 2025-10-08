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
    const [query, setQuery] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState("default");

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

    const chatHistory = [
        { category: "Today", items: ["Lorem Ipsum", "Lorem Ipsum"] },
        { category: "Yesterday", items: ["Lorem Ipsum", "Lorem Ipsum"] },
        { category: "Previous 7 Days", items: ["Lorem Ipsum", "Lorem Ipsum"] },
        { category: "Previous 30 Days", items: ["Lorem Ipsum", "Lorem Ipsum"] },
    ];

      const router = useRouter();

    return (
        
            <div className="">
                {/* Sidebar */}
                <div className="">
                    {/* Logo */}
                    <div
                        onClick={() => {
                            setSidebarOpen(!sidebarOpen);
                            setSelectedMenu("default");
                        }}
                        className="mb-6 cursor-pointer"
                    >
                        <Image
                            src="/Frame 3385255.jpg"
                            alt="Logo"
                            className="rounded-[12px] mx-auto"
                            width={50}
                            height={50}
                        />
                        
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
                        <div className="w-12 h-12 mx-auto mt-[12px] bg-gray-300 rounded-full"></div>
                    </div>
                </div>

                {/* Sidebar Panel (left) */}
                <div
                    className={`bg-[#F1F1F1] transition-all duration-1000 overflow-y-auto h-screen ${
                        sidebarOpen ? "w-[280px]" : "w-0"
                    }`}
                    style={{ display: sidebarOpen ? "block" : "none" }}
                >
                    <div className="p-6">
                        <h3 className="text-lg font-semibold mb-4 text-black">AI Assistance</h3>

                        <button className="w-full bg-black text-white rounded-lg py-3 mb-6 hover:bg-gray-800 transition">
                            New Chat
                        </button>

                        <div className="space-y-6">
                            {chatHistory.map((section, idx) => (
                                <div key={idx}>
                                    <p className="text-xs text-gray-500 mb-2 font-semibold">{section.category}</p>
                                    <div className="space-y-2">
                                        {section.items.map((item, itemIdx) => (
                                            <div
                                                key={itemIdx}
                                                className="text-sm text-gray-700 hover:bg-gray-200 p-2 rounded cursor-pointer transition"
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                
            </div>
        
    );
};

export default Header;
