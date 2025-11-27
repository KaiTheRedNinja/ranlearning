'use client';

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useLanguage } from "@/lib/localisation";

export default function TitleBar() {
  const { language, setLanguage, t } = useLanguage();

  const langSwitcher = (
    // TODO: Make this a real language switcher
    <Button variant="secondary" onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}>
      {language === 'zh' ? '🇬🇧 EN' : '🇨🇳 ZH'}
    </Button>
  )

  const sectionHorizontalNavigator = (
    <div className="flex items-center gap-6">
      <Button variant="link">{t.sectionTitles.home}</Button>
      <Button variant="link">{t.sectionTitles.aboutUs}</Button>
      <Button variant="link">{t.sectionTitles.programmesAndCourses}</Button>
      <Button variant="link">{t.sectionTitles.testimonials}</Button>
      <Button variant="link">{t.sectionTitles.blog}</Button>
      <Button variant="link">{t.sectionTitles.contactUs}</Button>
      <Button variant="link">{t.sectionTitles.faq}</Button>
      <Button variant="default">{t.registerNow}</Button>
    </div>
  )

  const sectionMenuNavigator = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline"><Menu className="w-6 h-6 text-gray-700" /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Home
          </DropdownMenuItem>
          <DropdownMenuItem>
            About Us
          </DropdownMenuItem>
          <DropdownMenuItem>
            Programmes and Courses
          </DropdownMenuItem>
          <DropdownMenuItem>
            Testimonials
          </DropdownMenuItem>
          <DropdownMenuItem>
            Blog
          </DropdownMenuItem>
          <DropdownMenuItem>
            Contact Us
          </DropdownMenuItem>
          <DropdownMenuItem>
            FAQ
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Register
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
        <h1 className="text-2xl font-semibold text-gray-800">Ran Learning</h1>
      </div>

      {/* Middle: Horizontal Navigator, but only for large screens */}
      <div className="hidden lg:flex">
        {sectionHorizontalNavigator}
      </div>
      
      {/* Right side: Flag + Hamburger */}
      <div className="flex items-center gap-4">
        {langSwitcher}

        <div className="lg:hidden">
          {sectionMenuNavigator}
        </div>
      </div>
    </div>
  );
}