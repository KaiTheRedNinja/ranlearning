'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import TitleBar from "@/sections/titleBar";
import Home from "@/sections/home";
import About from "@/sections/about";
import Courses from "@/sections/courses";
import Testimonials from "@/sections/testimonials";
import Blog from "@/sections/blog";
import Contact from "@/sections/contact";
import FAQ from "@/sections/faq";
import { LanguageProvider } from "@/lib/localisation";
import { ColorProvider, DEFAULT_COLORS, ColorScheme } from "@/lib/colorContext";

function AppContent() {
  const searchParams = useSearchParams();
  
  // Parse color parameters from URL
  const colors: Partial<ColorScheme> = {
    primaryBackground: searchParams.get('pb') || undefined,
    secondaryBackground: searchParams.get('sb') || undefined,
    bodyText: searchParams.get('bt') || undefined,
    titleText: searchParams.get('tt') || undefined,
    emphasizedBackground: searchParams.get('eb') || undefined,
  };
  
  // Remove undefined values
  Object.keys(colors).forEach((key) => {
    if (colors[key as keyof ColorScheme] === undefined) {
      delete colors[key as keyof ColorScheme];
    }
  });

  return (
    <ColorProvider colors={colors}>
      <div className="flex flex-col gap-0" style={{ backgroundColor: DEFAULT_COLORS.secondaryBackground, minHeight: '100vh' }}>
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
    </ColorProvider>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <AppContent />
      </Suspense>
    </LanguageProvider>
  );
}
