"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const userId = searchParams.get("userId");
  const coin = searchParams.get("coin");
  const amount = searchParams.get("amount");
  const img = searchParams.get("img") || "/coin.png";

  useEffect(() => {
    if (!userId || !coin || !amount) {
      router.push("/");
    }
  }, [userId, coin, amount, router]);

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url(/bg.png)]">
      <header className="flex justify-between items-center p-4">
        <Image src="/rlogo.png" alt="Left Logo" width={150} height={150} priority/>
        <Image src="/llogo.png" alt="Right Logo" width={150} height={150} priority/>
      </header>

      <main className="p-4 max-w-4xl mx-auto">
        <div className="flex items-center space-x-10 lg:space-x-12">
          <img src="/sample.png" alt="User" className="rounded-lg border border-white" width={150} height={150} />
          <div>
            <h2 className="text-white font-bold text-sm">ID Rise</h2>
            <p className="text-white text-sm">{userId}</p>
            <h3 className="text-white font-bold text-sm mt-2">User Name</h3>
            <p className="text-white text-sm">John Doe</p>
          </div>
        </div>

        <h2 className="text-white font-semibold mt-6">Top Up Amount</h2>

        <div className="mt-4 py-2 flex flex-col items-center rounded-lg bg-[#ffd40038] border border-[#ffd400]">
          <Image src={img} alt="Selected Coins" width={40} height={40} />
          <p className="text-[#ffda03] text-sm font-bold">{coin} Coins</p>
          <p className="text-[#ffda03] text-sm font-semibold">Rp. {amount}</p>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <button className="p-24 lg:px-52 py-2 bg-gradient-to-tr from-[#4749D4] to-[#1D2F93] text-white font-semibold rounded-lg">Success</button>
        </div>
      </main>
    </div>
  );
}
