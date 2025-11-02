'use client';

import ImageCarousel from "@/components/imageCarousel";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <div className="" style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      {/* image, ratio of 1.6 */}
      <ImageCarousel />

      <div className="px-4">
        <img src="logo and name.jpg" alt="Ran Laoshi Chinese Enrichment" className="mx-auto my-8 rounded-3xl" style={{ width: '100%' }} />
      </div>

      <div className="px-6">
        <p className="text-md">
          Brief introduction goes here, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra. Orci eu 
          lobortis elementum nibh tellus molestie. Vulputate dignissim suspendisse in est. Vel pharetra vel turpis 
          nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit tellus mauris. Posuere morbi leo urna 
          molestie at elementum eu. Urna duis convallis convallis tellus. Urna molestie at elementum eu. Nunc sed 
          blandit libero volutpat.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">✨ [学校特色/优势]</h3>
        <h3 className="text-2xl font-semibold mt-8 mb-4">✨ [学校特色/优势]</h3>
        <h3 className="text-2xl font-semibold mt-8 mb-4">✨ [学校特色/优势]</h3>
      </div>
    </div>
  );
}