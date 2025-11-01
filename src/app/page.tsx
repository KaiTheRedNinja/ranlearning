'use client';

import Card from "../components/card";
import TitleBar from "@/sections/titleBar";

export default function Home() {
  return (
    <div className="" style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Floating Title Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <TitleBar />
      </div>
    </div>
  );
}
