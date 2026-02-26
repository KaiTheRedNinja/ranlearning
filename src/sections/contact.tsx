'use client';
import { useLanguage } from "@/lib/localisation";
import { useColors } from "@/lib/colorContext";

export default function Contact() {
  const { t } = useLanguage();
  const colors = useColors();

  return (
    <div className="flex flex-col gap-6" style={{ backgroundColor: colors.primaryBackground }}>
      <div className="w-full md:w-2/3 md:mx-auto flex flex-col gap-6">

        <div className="px-6 mt-8">
          <h2 className="text-3xl font-bold">{t.sectionTitles.contactUs}</h2>
        </div>

        <div className="px-12 gap-4 flex flex-col">
          <div
            className="flex-shrink-0 overflow-hidden"
            style={{
              backgroundColor: colors.emphasizedBackground,
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              cursor: 'pointer',
            }}
          >
            <h1
              className="font-bold flex-1 p-6 text-center"
              style={{ fontSize: '36px', color: colors.titleText, lineHeight: '1.2' }}
            >
              {t.registerNow}
            </h1>
          </div>
        </div>

        <div className="mx-auto w-full flex flex-col items-center">
          <hr className="my-0 border-t border-black w-[100px]" />
        </div>

        <div className="px-6 mb-8">
          {/* Mobile: original stacked paragraphs */}
          <div className="flex flex-col gap-3 md:hidden">
            {t.contactSection.contactItems.map((item, index) => (
              <p key={index} className="text-xl whitespace-pre-line">
                <b>{item.icon} {item.contactMethod}</b>: <br/> {item.detail}
              </p>
            ))}
          </div>

          {/* Desktop: aligned table */}
          <table className="hidden md:table text-xl" style={{ borderSpacing: '0 8px', borderCollapse: 'separate' }}>
            <tbody>
              {t.contactSection.contactItems.map((item, index) => (
                <tr key={index} className="align-top">
                  <td className="pr-4 font-bold whitespace-nowrap">
                    {item.icon} {item.contactMethod + ":"}
                  </td>
                  <td className="whitespace-pre-line">{item.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}