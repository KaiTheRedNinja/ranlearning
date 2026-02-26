'use client';
import ImageCarousel from "@/components/imageCarousel";
import { useLanguage } from "@/lib/localisation";
import { useColors } from "@/lib/colorContext";

export default function Home() {
  const { t } = useLanguage();
  const colors = useColors();

  return (
    <div style={{ backgroundColor: colors.secondaryBackground }}>

      {/* Mobile: stacked. Desktop: full-bleed left carousel + right content */}
      <div className="flex flex-col md:flex-row">

        {/* Carousel — full width on mobile, left 50% bleeding to edge on desktop */}
        <div className="md:w-1/2 md:flex-shrink-0">
          <ImageCarousel />
        </div>

        {/* Right content — constrained and padded */}
        <div className="md:w-1/2 md:flex-shrink-0">
          <div className="md:max-w-lg md:px-10 md:py-8">

            {/* Logo */}
            <div className="px-4 md:px-0">
              <img
                src="logo and name.jpg"
                alt="Ran Laoshi Chinese Enrichment"
                className="mx-auto my-8 md:my-0 md:mb-6 rounded-3xl"
                style={{ width: '100%' }}
              />
            </div>

            {/* Intro + features */}
            <div className="px-6 md:px-0 mb-8">
              <p className="text-lg whitespace-pre-line">
                {t.homeSection.briefIntroduction}
              </p>
              {t.homeSection.schoolFeatures.map((feature, index) => (
                <h3 key={index} className="text-2xl font-semibold mt-8 mb-4">
                  ✨ {feature}
                </h3>
              ))}
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}