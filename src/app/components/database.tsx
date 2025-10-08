"use client";
import React from "react";
import Upgrade from "./upgrade";
import Header from "./header";
import Link from "next/link";

const Database = () => {
  const cardData = [
    {
      id: 1,
      title: "Prosecution Page",
      description:
        "Quickly access critical prosecution case details and updates to simplify research and strengthen your legal strategies.",
      image: "/Frame 3384803.jpg",
    },
    {
      id: 2,
      title: "Central Laws ",
      description:
        "Explore an extensive database of all Indian central laws with clear and precise information for effective research.",
      image: "/Frame 3384803.jpg",
    },
    {
      id: 3,
      title: "Central Laws (Hindi) ",
      description:
        "Access Indian central laws in Hindi for easy understanding and improved accessibility for regional legal professionals.",
      image: "/Frame 3384803.jpg",
    },
    {
      id: 4,
      title: "State Laws ",
      description:
        "Effortlessly find detailed state-specific laws across India to ensure complete legal research and preparation.",
      image: "/Frame 3384803.jpg",
    },
    {
      id: 5,
      title: "Overruled Cases ",
      description:
        "Discover overruled judgments to avoid reliance on outdated case law and enhance the accuracy of your arguments.",
      image: "/Frame 3384803.jpg",
    },
    {
      id: 6,
      title: "Assembly Debates ",
      description:
        "Analyze detailed legislative debates to gain insights into the intent and context behind laws for informed case preparation.",
      image: "/Frame 3384803.jpg",
    },
    {
      id: 7,
      title: "Law Comm. Reports ",
      description:
        "Access comprehensive reports by the Law Commission of India to stay updated on law reforms and recommendations.",
      image: "/Frame 3384803.jpg",
    },
    {
      id: 8,
      title: "Bills in Parliament ",
      description:
        "Track and understand the progress of bills introduced in Parliament for better legal and policy insights.",
      image: "/Frame 3384803.jpg",
    },
    {
      id: 9,
      title: "Legal Dictionary ",
      description:
        "Simplify complex legal jargon with a clear, easy-to-use dictionary designed for professionals and students.",
      image: "/Frame 3384803.jpg",
    },
  ];

  return (
    <>
      <div className="w-full h-screen overflow-hidden">
        <div className="flex">
          {/* Left Sidebar */}
          <div className="w-[7%] bg-[#1E1E1E] py-[24px] px-[24.5px] flex flex-col justify-between overflow-y-auto h-screen">
            <Header />
          </div>

          {/* Right Content */}
          <div className="bg-[#F9F9F9] w-full pt-[30px] overflow-y-auto h-screen flex flex-col">
            <Upgrade />
            <div className="m-8">
              <div className="grid grid-cols-3 gap-5">
                {cardData.map((card) => (
                  <Link
                    href="/databaselist" // ✅ same page for all cards
                    key={card.id}
                    className="p-6 bg-[#F1F1F1] rounded-[12px] shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  >
                    <div className="pb-6">
                      <img src={card.image} alt={card.title} />
                    </div>
                    <h5 className="text-[#1B1B1B] pb-2 text-[24px] font-bold">
                      {card.title}
                    </h5>
                    <p className="text-[#343434] text-[16px]">
                      {card.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Database;
