'use client';
import Card from "@/components/card";
import { useLanguage } from "@/lib/localisation";
import { useColors } from "@/lib/colorContext";

export default function Blog() {
  const { t } = useLanguage();
  const colors = useColors();

  return (
    <div className="flex flex-col gap-6" style={{ backgroundColor: colors.secondaryBackground }}>
      <div className="w-full md:w-2/3 md:mx-auto flex flex-col gap-6">
      {/* Blog Section */}
      <div className="px-6 mt-8">
        <h2 className="text-3xl font-bold">{t.sectionTitles.blog}</h2>
      </div>
      <div className="px-6 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {t.blogSection.blogItems.map((item, index) => (
          <div key={index}>
            <Card
              title={item.title}
              trailingIcon="open-in-new.svg"
              description={item.shortDescription}
              showMore={true}
              onClick={() => { console.log("Blog item pressed!") }}
              backgroundColor={colors.emphasizedBackground}
              titleColor={colors.titleText}
            />
          </div>
        ))}
      </div>

      {/* Sample Materials Section */}
      <div className="px-6">
        <h2 className="text-3xl font-bold">{t.sectionTitles.sampleMaterials}</h2>
      </div>
      <div className="px-6 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {t.blogSection.sampleMaterials.map((item, index) => (
          <div key={index}>
            <Card
              title={item.title.replace('.pdf', '').replace(/_/g, ' ')}
              trailingIcon="open-in-new.svg"
              onClick={() => { 
                window.open(`/samples/${item.pdfName}`, '_blank');
              }}
              backgroundColor={colors.emphasizedBackground}
              titleColor={colors.titleText}
            />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}