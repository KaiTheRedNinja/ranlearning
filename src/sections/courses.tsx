'use client'
import Card from "@/components/card"
import { useLanguage, MD, ProgrammeInfo } from "@/lib/localisation"
import { useColors } from "@/lib/colorContext"
import { useEffect, useState } from "react";
import { PopoverSheet } from "@/components/ui/PopoverSheet";

export default function Courses() {
  const { t } = useLanguage();
  const colors = useColors();

  const [selectedItem, setSelectedItem] = useState<ProgrammeInfo | null>(null);

  useEffect(() => {
    const handleUrlChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#')) {
        const itemId = hash.substring(1);
        const item = t.coursesSection.regularProgrammes.find(item => String(item.id) === itemId);
        if (item) {
          setSelectedItem(item);
        }
      } else {
        setSelectedItem(null);
      }
    };
    
    handleUrlChange();
    window.addEventListener('hashchange', handleUrlChange);
    return () => window.removeEventListener('hashchange', handleUrlChange);
  }, []);

  const handleItemClick = (item: ProgrammeInfo) => {
    setSelectedItem(item);
    window.location.hash = item.id;
  };

  const handleClose = () => {
    setSelectedItem(null);
    global.window.history.pushState("", document.title, window.location.pathname);
  };

  return (
    <section id="courses" className="flex flex-col gap-6" style={{ backgroundColor: colors.secondaryBackground }}>

      {/* Constrained header content */}
      <div className="w-full md:w-2/3 md:mx-auto flex flex-col gap-6">
        <div className="px-6 mt-8">
          <h2 className="text-3xl font-bold">{t.sectionTitles.programmesAndCourses}</h2>
        </div>
        <div className="px-6 gap-4 flex flex-col">
          <MD>{t.coursesSection.courseSummary}</MD>
        </div>
        <div className="px-6">
          <h2 className="text-3xl font-bold">{t.coursesSection.regularProgrammeTitle}</h2>
        </div>

        {/* Regular programmes — auto-growing grid */}
        <div
          className="grid gap-4 px-6"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          }}
        >
          {t.coursesSection.regularProgrammes.map((programme, index) => (
            <Card
              key={index}
              title={programme.title}
              backgroundColor={programme.backgroundColor}
              titleColor={programme.titleColor}
              bodyColor={programme.bodyColor}
              showMore={false}
              image={programme.fullImage ? `${programme.fullImage}` : undefined}
              onClick={() => handleItemClick(programme)}
            />
          ))}
        </div>
      </div>

      <div className="w-full md:w-2/3 md:mx-auto flex flex-col gap-6">
        <div className="mx-auto w-full flex flex-col items-center">
          <hr className="my-0 border-t border-black w-[100px]" />
        </div>
        <div className="px-6">
          <h2 className="text-3xl font-bold">{t.coursesSection.specialProgrameTitle}</h2>
        </div>
      </div>

      {/* Full-width horizontal scroll with matching left indent */}
      <div className="overflow-x-auto">
        {/* Small screens */}
        <div
          className="flex gap-4 pb-4 md:hidden px-6"
          style={{ width: 'max-content' }}
        >
          {t.coursesSection.specialProgrammes.map((programme, index) => (
            <div key={index} style={{ width: "400px", maxWidth: '66.666vw' }}>
              <Card
                title={programme.title}
                description={<MD>{programme.description}</MD>}
                backgroundColor={programme.backgroundColor}
                titleColor={programme.titleColor}
                bodyColor={programme.bodyColor}
                showMore={true}
                image={programme.fullImage ? `${programme.fullImage}` : undefined}
                onClick={() => handleItemClick(programme)}
              />
            </div>
          ))}
        </div>

        {/* Medium+ screens */}
        <div
          className="hidden md:flex gap-4 pb-4 px-6 md:px-0"
          style={{
            width: 'max-content',
            paddingLeft: 'max(1.5rem, calc((100vw - (100vw * 2/3)) / 2 + 1.5rem))',
            paddingRight: 'max(1.5rem, calc((100vw - (100vw * 2/3)) / 2 + 1.5rem))',
          }}
        >
          {t.coursesSection.specialProgrammes.map((programme, index) => (
            <div key={index} style={{ width: "400px", maxWidth: '66.666vw' }}>
              <Card
                title={programme.title}
                description={<MD>{programme.description}</MD>}
                backgroundColor={programme.backgroundColor}
                titleColor={programme.titleColor}
                bodyColor={programme.bodyColor}
                showMore={true}
                image={programme.fullImage ? `${programme.fullImage}` : undefined}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Constrained footer content */}
      <div className="w-full md:w-2/3 md:mx-auto flex flex-col gap-6">
        <div className="mx-auto w-full flex flex-col items-center mb-8">
          <div
            className="flex-shrink-0 overflow-hidden rounded-full"
            style={{
              backgroundColor: colors.emphasizedBackground,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
          >
            <p className="py-4 px-8 text-center font-bold text-xl">
              {t.registerNow}
            </p>
          </div>
        </div>
      </div>
      <PopoverSheet
        externalData={selectedItem}
        onClose={handleClose}
      />
    </section>
  );
}