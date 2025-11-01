'use client';

import { Flag, Menu } from "lucide-react";

export default function TitleBar() {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      {/* Left side: Circle + Title */}
      <div className="flex items-center gap-5">
        <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
        <h1 className="text-2xl font-semibold text-gray-800">Ran Learning</h1>
      </div>
      
      {/* Right side: Flag + Hamburger */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Flag className="w-6 h-6 text-gray-700" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
}