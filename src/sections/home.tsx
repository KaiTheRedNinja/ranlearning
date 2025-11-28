'use client';

import ImageCarousel from "@/components/imageCarousel";
import { Star } from "lucide-react";
import { useLanguage } from "@/lib/localisation";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="" style={{ backgroundColor: '#fff' }}>
      {/* image, ratio of 1.6 */}
      <ImageCarousel />

      <div className="px-4">
        <img src="logo and name.jpg" alt="Ran Laoshi Chinese Enrichment" className="mx-auto my-8 rounded-3xl" style={{ width: '100%' }} />
      </div>

      <div className="px-6 mb-8">
        <p className="text-lg whitespace-pre-line">
          {t.homeSection.briefIntroduction}
        </p>

        {t.homeSection.schoolFeatures.map((feature, index) => (
          <h3 key={index} className="text-2xl font-semibold mt-8 mb-4">✨ {feature}</h3>
        ))}
      </div>
    </div>
  );
}