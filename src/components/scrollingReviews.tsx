import React from 'react';

export default function ScrollingReviews({ reviews }: { reviews: string[] }) {
  const reviewsPerRow = 3;
  const rows = Math.ceil(reviews.length / reviewsPerRow);

  return (
    <><div className="space-y-6">
      {[...Array(rows)].map((_, rowIndex) => {
        const rowReviews = reviews.slice(
          rowIndex * reviewsPerRow,
          (rowIndex + 1) * reviewsPerRow
        );
        const duplicatedReviews = [...rowReviews, ...rowReviews];
        
        return (
          <div key={rowIndex} className="overflow-x-clip overflow-y-visible">
            <div 
              className="flex gap-4 w-fit"
              style={{
                animation: `scroll${rowIndex % 2 === 0 ? '' : '-reverse'} 40s linear infinite`
              }}
            >
              {duplicatedReviews.map((review, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl px-5 py-3 shadow-lg flex-shrink-0 max-w-xs"
                >
                  <div className="absolute bottom-0 left-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white transform translate-y-full"></div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {review}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>

    <style jsx>{`
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      
      @keyframes scroll-reverse {
        0% {
          transform: translateX(-50%);
        }
        100% {
          transform: translateX(0);
        }
      }
    `}</style></>
  );
}