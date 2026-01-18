'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useLanguage } from "@/lib/localisation";
import { useColors } from "@/lib/colorContext";

export default function FAQ() {
  const { t } = useLanguage();
  const colors = useColors();

  return (
    <div className="flex flex-col gap-6" style={{ backgroundColor: colors.secondaryBackground }}>
      <div className="px-6 mt-8">
        <h2 className="text-3xl font-bold">{t.sectionTitles.faq}</h2>
      </div>

      <div className="px-6 gap-4 flex flex-col mb-8">
        {t.faqSection.subsections.map((subsection, subIndex) => (
          <div key={subIndex} className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">{subsection.title}</h3>
            <Accordion type="single" collapsible>
              {subsection.questionsAndAnswers.map((qa, index) => (
                <AccordionItem key={index} value={`item-${subIndex}-${index}`}>
                  <AccordionTrigger>{qa.question}</AccordionTrigger>
                  <AccordionContent>
                    {qa.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}