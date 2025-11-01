'use client';

import TitleBar from "@/sections/titleBar";
import Home from "@/sections/home";

export default function App() {
  return (
    <div className="" style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Floating Title Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <TitleBar />
      </div>
      <div className="opacity-0">
        <TitleBar />
      </div>
      <Home />
    </div>
  );
}
