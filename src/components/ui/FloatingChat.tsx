"use client";

import { useState } from "react";
import Image from "next/image";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      {/* Chat Box (Increased Size, Gradient + Image Background) */}
      {isOpen && (
        <div
        className="shadow-lg rounded-lg w-full h-full lg:w-80 lg:h-96 p-4 border border-gray-300 fixed inset-0 lg:relative bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(to bottom, #010102, #010102), url('/img_bg_chat.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-white font-semibold">Christina</h2>

            {/* Close Button with Image */}
            <button onClick={() => setIsOpen(false)}>
              <Image src="/ic_minimize.png" alt="Close" width={24} height={24} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto mt-3 space-y-2 pb-16 lg:pb-3">
            <div className="bg-gray-100 p-2 rounded-lg text-sm text-gray-700">Hello! How can I help you?</div>
          </div>

          {/* Chat Input & Send Button */}
          <div className="absolute bottom-0 left-0 w-full bg-[#010102] p-3 flex items-center space-x-2 lg:relative lg:bg-transparent">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
            />

            {/* Send Button with Image */}
            <button>
              <Image src="/ic_send.png" alt="Send" width={32} height={32} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Chat Button with Border & Image */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full shadow-lg flex items-center justify-center border-2 border-blue-500 bg-white hover:bg-gray-200 transition"
      >
        <Image src="/img_avatar_chatbot.png" alt="Chat" width={52} height={52} />
      </button>
    </div>
  );
}
