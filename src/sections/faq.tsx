'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useLanguage } from "@/lib/localisation";

export default function FAQ() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-6" style={{ backgroundColor: '#fff' }}>
      <div className="px-6 mt-8">
        <h2 className="text-3xl font-bold">{t.sectionTitles.faq}</h2>
      </div>

      <div className="px-6 gap-4 flex flex-col mb-8">
        <Accordion type="single" collapsible>
          {t.faqSection.questionsAndAnswers.map((qa, index) => (
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>{qa.question}</AccordionTrigger>
              <AccordionContent>
                {qa.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}