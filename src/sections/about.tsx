import Card from "@/components/card";
import { useLanguage } from "@/lib/localisation";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-6" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="px-6 mt-8">
        <h2 className="text-3xl font-bold">{t.sectionTitles.aboutUs}</h2>
      </div>

      <div className="px-6 gap-4 flex flex-col">
        {t.aboutSection.approaches.map((approach, index) => (
          <Card
            title={approach.name}
            icon={approach.icon}
            description={approach.description}
            backgroundColor="#ECB34F"
            titleColor="#523211"
          />
        ))}
      </div>

      <div className="mx-auto w-full flex flex-col items-center">
        <hr className="my-0 border-t border-black w-[100px]" />
      </div>

      <div className="px-6">
        <h2 className="text-3xl font-bold">{t.aboutSection.teachingTeamTitle}</h2>
      </div>

      <div className="px-6 gap-4 flex flex-col mb-8">
        <p className="text-md">
          {t.aboutSection.teachingTeam}
        </p>
      </div>
    </div>
  );
}