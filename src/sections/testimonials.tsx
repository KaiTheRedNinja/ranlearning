import Card from "@/components/card";
import ScrollingReviews from "@/components/scrollingReviews";
import { useLanguage } from "@/lib/localisation";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-6" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="px-6 mt-8">
        <h2 className="text-3xl font-bold">{t.sectionTitles.testimonials}</h2>
      </div>

      <ScrollingReviews reviews={t.testimonialsSection.shortReviews} />

      {t.testimonialsSection.longReviews.map((review, index) => (
        <div key={index} className="px-6 flex flex-row items-center md:items-start gap-6">
          {review.imageOnLeft ? (<></>) : (
            <div>
              <h3 className="text-2xl font-semibold mb-2">{review.title}</h3>
              <p className="text-md">
                {review.description}
              </p>
            </div>
          )}
          <div
            className="flex-shrink-0 overflow-hidden max-w-[30%]"
            style={{
              width: '150px',
              height: '150px',
            }}
          >
            <img
              src={review.image}
              alt={review.title}
              className="w-full h-full object-cover"
            />
          </div>
          {!review.imageOnLeft ? (<></>) : (
            <div>
              <h3 className="text-2xl font-semibold mb-2">{review.title}</h3>
              <p className="text-md">
                {review.description}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}