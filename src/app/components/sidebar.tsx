"use client";
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

    return (
        <div>
            {/* Left Sidebar (AI Assistance) */}
                    <div
                      className={`bg-[#F1F1F1] border-r border-gray-200 relative h-full flex flex-col transition-all duration-500 ease-in-out ${
                        showSidebar ? "w-[250px]" : "w-0 p-0 overflow-hidden"
                      }`}
                    >
                      {showSidebar && (
                        <div className="py-6 px-4  ">
                          <h2 className="text-[16px] font-medium text-[#1E1E1E] mb-2">
                            AI Assistance
                          </h2>
                          <hr className="border-[#A8A8A8] mb-4" />
            
                          <button className="w-full bg-[#1B1B1B] text-white text-[16px] font-medium py-3 rounded-[10px] mb-5">
                            New Chat
                          </button>
            
                          <div className="text-[16px] text-gray-800 space-y-4 overflow-y-auto">
                            <div>
                              <p className="text-gray-500 text-[14px] mb-1">Today</p>
                              <p>Lorem Ipsum</p>
                              <p>Lorem Ipsum</p>
                            </div>
            
                            <div>
                              <p className="text-gray-500 text-[14px] mb-1">Yesterday</p>
                              <p>Lorem Ipsum</p>
                              <p>Lorem Ipsum</p>
                            </div>
            
                            <div>
                              <p className="text-gray-500 text-[14px] mb-1">Previous 7 Days</p>
                              <p>Lorem Ipsum</p>
                              <p>Lorem Ipsum</p>
                            </div>
            
                            <div>
                              <p className="text-gray-500 text-[14px] mb-1">Previous 30 Days</p>
                              <p>Lorem Ipsum</p>
                              <p>Lorem Ipsum</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
            
                    {/* Floating Arrow Button */}
                    <button
                      onClick={() => setShowSidebar(!showSidebar)}
                      className={`absolute top-[5%] left-[-15px] transform -translate-y-1/2 transition-all duration-500 ease-in-out
                      bg-gray-50 text-black p-2 rounded-full shadow-lg z-10 ${
                        showSidebar ? "left-[250px]" : "left-[-15px]"
                      }`}
                    >
                      {showSidebar ? (
                        <IoIosArrowBack className="text-[20px]" />
                      ) : (
                        <IoIosArrowForward className="text-[20px]" />
                      )}
                    </button>
        </div>
    );
}

export default Sidebar;
