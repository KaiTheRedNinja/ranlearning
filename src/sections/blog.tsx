'use client';

import Card from "@/components/card";
import { useLanguage } from "@/lib/localisation";

export default function Blog() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-6" style={{ backgroundColor: '#fff' }}>
      <div className="px-6 mt-8">
        <h2 className="text-3xl font-bold">{t.sectionTitles.blog}</h2>
      </div>

      <div className="px-6 gap-4 flex flex-col mb-8">
        {t.blogSection.blogItems.map((item, index) => (
          <div key={index}>
          <Card
            title={item.title}
            trailingIcon="open-in-new.svg"
            description={item.shortDescription}
            showMore={true}
            onClick={() => { console.log("Blog item pressed!") }}
            backgroundColor="#ECB34F"
            titleColor="#523211"
          />
          </div>
        ))}
      </div>
    </div>
  );
}