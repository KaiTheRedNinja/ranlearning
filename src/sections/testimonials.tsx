import Card from "@/components/card";
import { useLanguage } from "@/lib/localisation";
import { useColors } from "@/lib/colorContext";

export default function Testimonials() {
  const { t } = useLanguage();
  const colors = useColors();

  return (
    <div className="py-12 px-4 md:px-8 lg:px-16" style={{ backgroundColor: colors.primaryBackground }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
          {t.sectionTitles.testimonials}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {t.testimonialsSection.reviews.map((review, index) => {
            const authorSection = review.author && (
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200 mt-4">
                {review.image ? (
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                    <img
                      src={review.image}
                      alt={review.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {review.author.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900 text-sm md:text-base">
                    {review.author}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">
                    Ran Learning Student
                  </p>
                </div>
              </div>
            );

            return (
              <Card
                key={index}
                description={
                  <>
                    <span className="italic text-gray-700">"{review.content}"</span>
                    {/* if the review is machine translated, show a note */}
                    {review.machineTranslated && (
                      <p className="text-xs md:text-sm text-gray-500 mt-2 italic">
                        (Translated from original language)
                      </p>
                    )}

                    {authorSection}
                  </>
                }
                backgroundColor="#ffffff"
                bodyColor="#374151"
                expandable={true}
                lineClamp={5}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}