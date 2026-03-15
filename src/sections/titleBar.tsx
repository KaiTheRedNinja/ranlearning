'use client';

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useLanguage } from "@/lib/localisation";

export default function TitleBar() {
  const { language, setLanguage, t } = useLanguage();

  const registerNow = (
    <Button variant="default">
      {t.registerNow}
    </Button>
  )

  const langSwitcher = (
    // TODO: Make this a real language switcher
    <Button variant="secondary" onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}>
      {language === 'zh' ? '🇬🇧 EN' : '🇨🇳 ZH'}
    </Button>
  )

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    global.window.history.pushState(null, '', `#${id}`);
  }

  const sectionHorizontalNavigator = (
    <div className="flex items-center gap-1 lg:gap-6 whitespace-nowrap">
      <Button variant="link" onClick={() => { scrollToSection("home") }}>
        {t.sectionTitles.home}
      </Button>
      <Button variant="link" onClick={() => { scrollToSection("about") }}>
        {t.sectionTitles.aboutUs}
      </Button>
      <Button variant="link" onClick={() => { scrollToSection("courses") }}>
        {t.sectionTitles.programmesAndCourses}
      </Button>
      <Button variant="link" onClick={() => { scrollToSection("testimonials") }}>
        {t.sectionTitles.testimonials}
      </Button>
      <Button variant="link" onClick={() => { scrollToSection("blog") }}>
        {t.sectionTitles.blog}
      </Button>
      <Button variant="link" onClick={() => { scrollToSection("contact") }}>
        {t.sectionTitles.contactUs}
      </Button>
      <Button variant="link" onClick={() => { scrollToSection("faq") }}>
        {t.sectionTitles.faq}
      </Button>
    </div>
  )

  const sectionMenuNavigator = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline"><Menu className="w-6 h-6 text-gray-700" /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => { scrollToSection('home') }} data-slot="dropdown-menu-item">
            {t.sectionTitles.home}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => { scrollToSection('about') }} data-slot="dropdown-menu-item">
            {t.sectionTitles.aboutUs}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => { scrollToSection('courses') }} data-slot="dropdown-menu-item">
            {t.sectionTitles.programmesAndCourses}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => { scrollToSection('testimonials') }} data-slot="dropdown-menu-item">
            {t.sectionTitles.testimonials}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => { scrollToSection('blog') }} data-slot="dropdown-menu-item">
            {t.sectionTitles.blog}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => { scrollToSection('contact') }} data-slot="dropdown-menu-item">
            {t.sectionTitles.contactUs}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => { scrollToSection('faq') }} data-slot="dropdown-menu-item">
            {t.sectionTitles.faq}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            {t.registerNow}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <div className="flex items-center justify-between px-4 py-3">
      {/* Left side: Circle + Title */}
      <div className="flex items-center gap-5">
        <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
        <h1 className="text-2xl font-semibold text-gray-800 whitespace-nowrap">
          {t.ranlearning}
        </h1>
      </div>

      {/* Middle: Horizontal Navigator, but only for non-small screens */}
      <div className="hidden md:flex min-w-0 flex-1 justify-center px-6 relative">
        <div className="pointer-events-none absolute left-3 top-0 h-full w-8 bg-gradient-to-r from-white to-transparent"/>
        <div className="pointer-events-none absolute right-3 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent"/>

        <div className="w-full overflow-x-auto scrollbar-none flex items-center justify-center">
          {sectionHorizontalNavigator}
        </div>
      </div>
      
      {/* Right side: Flag + Hamburger */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex">
          {registerNow}
        </div>

        {langSwitcher}

        <div className="lg:hidden">
          {sectionMenuNavigator}
        </div>
      </div>
    </div>
  );
}