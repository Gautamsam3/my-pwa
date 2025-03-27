"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ApplyPage() {
  const router = useRouter();

  const benefits = [
    {
      id: 1,
      img: "/img_benefit_1.png",
      title: "Host Network",
      desc: "Join us to access a vast host network and new opportunities. Connect, collaborate, and grow your reach",
    },
    {
      id: 2,
      img: "/img_benefit_3.png",
      title: "Great Host Compensation",
      desc: "Join us for great host pay as a RiseLive partner. Earn big and get perks while you thrive.",
    },
    {
      id: 3,
      img: "/img_benefit_2.png",
      title: "Become Better Host",
      desc: "Join us and get talent management guidance to excel as a host. Refine skills and boost your host performance.",
    },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url(/bg.png)]">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <Image src="/rlogo.png" alt="Left Logo" width={150} height={150} />
        <Image src="/llogo.png" alt="Right Logo" width={150} height={150} />
      </header>

      {/* Main Section */}
      <main className="p-4 max-w-5xl mx-auto">
        {/* Hero Section - Mobile Image First, Desktop Text First */}
        <div className="flex flex-col lg:flex-row-reverse items-center lg:gap-4">
          {/* Image - Comes First on Mobile, Second on Desktop */}
          <div className="w-full lg:w-[48%]">
            <Image
              src="/host-image.png"
              alt="Host Image"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>

          {/* Text - Comes Second on Mobile, First on Desktop */}
          <div className="text-center lg:text-left w-full lg:w-[48%] space-y-4">
            <h1 className="text-white text-xl lg:text-3xl font-bold">
              Be the next top-up host in
            </h1>
            <Image src="/img_logo_riselive.png" alt="Host Logo" width={200} height={200} className="mx-auto lg:mx-0" />
            <button
              className="bg-gradient-to-tr from-[#4749D4] to-[#1D2F93] text-white font-semibold py-1 px-4 rounded-sm w-48 mt-1"
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Why Join Us Section */}
        <h2 className="text-white text-center text-xl lg:text-3xl font-bold mt-8">
          Why Join Garry Management?
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="text-center p-4 rounded-lg cursor-pointer"
              onClick={() => {
                if (benefit.id === 2) {
                  router.push("/topup");
                }
              }}
            >
              <Image src={benefit.img} alt={benefit.title} width={100} height={100} className="mx-auto" />
              <h3 className="text-white font-bold mt-2">{benefit.title}</h3>
              <p className="text-white text-sm mt-1">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Apply Now Button */}
        <div className="text-center mt-8">
          <button className="bg-gradient-to-tr from-[#4749D4] to-[#1D2F93] text-white font-semibold py-2 px-24 rounded-sm">
            Apply Now
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-white py-4 mt-32 opacity-75">
        Copyright © Gary Management
      </footer>
    </div>
  );
}
