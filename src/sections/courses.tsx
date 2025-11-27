'use client'

import Card from "@/components/card"
import { useLanguage } from "@/lib/localisation"


export default function Courses() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-6" style={{ backgroundColor: '#fff' }}>
      <div className="px-6 mt-8">
        <h2 className="text-3xl font-bold">{t.sectionTitles.programmesAndCourses}</h2>
      </div>
      
      <div className="px-6 gap-4 flex flex-col">
        <p className="text-md">
          {t.coursesSection.courseSummary}
        </p>
      </div>

      <div className="mx-auto w-full flex flex-col items-center">
        <hr className="my-0 border-t border-black w-[100px]" />
      </div>

      <div className="px-6">
        <h2 className="text-3xl font-bold">{t.coursesSection.specialProgrameTitle}</h2>
      </div>

      {/* Horizontal scroll view */}
      <div className="">
        <div className="overflow-x-auto">
          <div className="flex gap-4 px-6 pb-4" style={{ width: 'max-content' }}>
            {t.coursesSection.specialProgrammes.map((programme, index) => (
              <div key={index} style={{ width: "400px", maxWidth: '66.666vw' }}>
                <Card
                  title={programme.title}
                  description={programme.description}
                  backgroundColor={programme.backgroundColor}
                  titleColor={programme.titleColor}
                  bodyColor={programme.bodyColor}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full flex flex-col items-center mb-8">
        <div
          className="flex-shrink-0 overflow-hidden rounded-full"
          style={{
            backgroundColor: '#ECB34F',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          }}
        >
          <p className="py-4 px-8 text-center font-bold text-xl">
            {t.registerNow}
          </p>
        </div>
      </div>
    </div>
  );
}