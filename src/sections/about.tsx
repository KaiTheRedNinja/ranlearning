import Card from "@/components/card";
import { useLanguage } from "@/lib/localisation";
import { useColors } from "@/lib/colorContext";

export default function About() {
  const { t } = useLanguage();
  const colors = useColors();

  return (
    <div className="flex flex-col gap-6" style={{ backgroundColor: colors.primaryBackground }}>
      <div className="w-full md:w-2/3 md:mx-auto">

        <div className="px-6 mt-8">
          <h2 className="text-3xl font-bold">{t.sectionTitles.aboutUs}</h2>
        </div>

        <div className="px-6 gap-4 flex flex-col mt-6">
          {t.aboutSection.approaches.map((approach, index) => (
            <div key={index}>
              <Card
                title={approach.name}
                icon={approach.icon}
                backgroundColor={colors.emphasizedBackground}
                titleColor={colors.titleText}
              />
            </div>
          ))}
        </div>

        <div className="mx-auto w-full flex flex-col items-center">
          <hr className="my-4 border-t border-black w-[100px]" />
        </div>

        <div className="px-6">
          <h2 className="text-3xl font-bold">{t.aboutSection.teachingTeamTitle}</h2>
        </div>

        <div className="px-6 gap-4 flex flex-col mb-8 mt-4">
          <p className="text-md">{t.aboutSection.teachingTeam}</p>
        </div>

      </div>
    </div>
  );
}