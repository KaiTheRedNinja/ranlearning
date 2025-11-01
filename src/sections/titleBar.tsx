'use client';

import { Flag, Menu } from "lucide-react";

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

export default function TitleBar() {
  const sectionNavigator = (
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
      
      {/* Right side: Flag + Hamburger */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Flag className="w-6 h-6 text-gray-700" />
        </button>
        {sectionNavigator}
      </div>
    </div>
  );
}