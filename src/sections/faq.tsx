'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <div className="flex flex-col gap-6" style={{ backgroundColor: '#fff' }}>
      <div className="px-6 mt-8">
        <h2 className="text-3xl font-bold">FAQ</h2>
      </div>

      <div className="px-6 gap-4 flex flex-col mb-8">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>课程如何安排？</AccordionTrigger>
            <AccordionContent>
              ANSWER GOES HERE
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>学费怎么支付？</AccordionTrigger>
            <AccordionContent>
              ANSWER GOES HERE
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>可以试听吗？</AccordionTrigger>
            <AccordionContent>
              ANSWER GOES HERE
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>如果缺课怎么办？</AccordionTrigger>
            <AccordionContent>
              ANSWER GOES HERE
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}