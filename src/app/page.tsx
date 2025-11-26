'use client';

import TitleBar from "@/sections/titleBar";
import Home from "@/sections/home";
import About from "@/sections/about";
import Courses from "@/sections/courses";
import Testimonials from "@/sections/testimonials";
import Blog from "@/sections/blog";
import Contact from "@/sections/contact";
import FAQ from "@/sections/faq";

export default function App() {
  return (
    <div className="flex flex-col gap-0" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Floating Title Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <TitleBar />
      </div>
      <div className="opacity-0">
        <TitleBar />
      </div>
      <Home />
      <hr className="my-0 border-t border-gray-300" />
      <About />
      <hr className="my-0 border-t border-gray-300" />
      <Courses />
      <hr className="my-0 border-t border-gray-300" />
      <Testimonials />
      <hr className="my-0 border-t border-gray-300" />
      <Blog />
      <hr className="my-0 border-t border-gray-300" />
      <Contact />
      <hr className="my-0 border-t border-gray-300" />
      <FAQ />
    </div>
  );
}
