"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const topups = [
    { id: 1, Rp: "10.000", coin: "100", img: "/coin.png" },
    { id: 2, Rp: "50.000", coin: "500", img: "/coin2.png" },
    { id: 3, Rp: "100.000", coin: "1.000", img: "/coin2.png" },
    { id: 4, Rp: "180.000", coin: "2.000", img: "/coin2.png" },
    { id: 5, Rp: "200.000", coin: "2.500", img: "/coin2.png", badge: "/badge.png"},
    { id: 6, Rp: "505.000", coin: "6.000", img: "/coin3.png" },
    { id: 7, Rp: "900.000", coin: "10.000", img: "/coin3.png", badge: "/badge.png"},
    { id: 8, Rp: "1.400.000", coin: "15.000", img: "/coin3.png" },
    { id: 9, Rp: "1.900.000", coin: "20.000", img: "/coin3.png" },
    { id: 10, Rp: "4.000.000", coin: "50.000", img: "/coin4.png" },
    { id: 11, Rp: "9.000.000", coin: "100.000", img: "/coin4.png"},
    { id: 12, Rp: "40.000.000", coin: "500.000", img: "/coin5.png",},
  ];

  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url(/bg.png)]">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <Image src="/rlogo.png" alt="Left Logo" width={150} height={150} />
        <Image src="/llogo.png" alt="Right Logo" width={150} height={150} />
      </header>

      {/* Content */}
      <main className="p-4 max-w-4xl mx-auto">
        {/* ID Input */}
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-1">
            ID Label
          </label>
          <input
            type="number"
            className="w-full lg:w-96 p-2 rounded-lg border border-[#b4c3ff] focus:outline-none focus:border-[#b4c3ff] bg-white bg-opacity-0 text-white placeholder-grey-900"
            placeholder="Enter your ID Rise"
          />
        </div>

        {/* Small Heading */}
        <h2 className="text-white text-sm font-semibold mb-4">Top Up Amount</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {topups.map((topup) => (
            <div
              key={topup.id}
              className={`relative p-2 rounded-lg flex flex-col items-center justify-center border border-[#b4c3ff] ${
                selected === topup.id
                  ? "bg-[#ffd40038] border-[#ffd400]"
                  : "border-[#b4c3ff] hover:bg-[#ffd40038] hover:border-[#ffd400]"
              } cursor-pointer aspect-square`}
              onClick={() => setSelected(topup.id)}
            >
              {/* Badge as Image */}
              {topup.badge && (
                <img
                  src={topup.badge}
                  alt="badge"
                  className="absolute top-1 left-1 w-12 h-6 md:w-16 md:h-8 lg:w-12 lg:h-8 object-contain"
                />
              )}

              {/* Main Image */}
              <img
                src={topup.img}
                alt="coins"
                className="w-8 h-8 md:w-12 md:h-12 lg:w-12 lg:h-12 object-cover rounded-lg mt-4 lg:mt-3"
              />

              {/* Points */}
              <p className="text-white font-bold text-xs mt-2 lg:text-sm whitespace-nowrap">{topup.coin} Coins</p>

              {/* Amount */}
              <p className="text-white text-xs lg:text-sm whitespace-nowrap">Rp. {topup.Rp}</p>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div className="mt-6 text-center">
          <button className="w-full bg-gradient-to-tr from-[#4749D4] to-[#1D2F93] font-bold text-white py-2 rounded-lg">
            Next
          </button>
        </div>
      </main>

      {/* Footer */}
      <div className="flex justify-center items-center lg:pt-32 pb-8">
        <footer className="border rounded-lg border-[#b4c3ff] bg-white/10 w-[90%] lg:w-[20%] text-center p-2 flex flex-col items-center justify-center">
          <p className="text-white">Interested in becoming host? Join us</p>
          <Image
            src="/rlogo.png"
            alt="Footer Logo"
            width={150}
            height={150}
            className="mt-2"
          />
        </footer>
      </div>
    </div>
  );
}
