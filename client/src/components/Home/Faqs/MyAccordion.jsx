import React from "react";
import { AccordionData } from "../../../data/AccrodionData";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MyAccordion = () => {

  return (
    <div className=" pt-14 w-full flex flex-col justify-center items-center">
      <Accordion
        type="single"
        collapsible
        className="w-full xl:w-[85%]  text-center flex flex-col justify-center items-center gap-3"
        defaultValue="item-1"
      >
        {AccordionData.map((item, index) => (
          <AccordionItem
            key={index}
            className="w-full mb-5"
            value={`item-${index + 1}`}
          >
            <AccordionTrigger className=" border border-black bg-[#ffff] text-black hover:bg-[#6962b8] data-[state=open]:bg-[#3c3679] data-[state=open]:text-white transition-all duration-2000 font-Jakarta font-semibold text-[14px] sm:text-[16px] md:text-[18px] px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-4 md:py-4 tracking-wider">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-6 py-5 text-center px-10 bg-white">
              <p className="text-[12px] sm:text-[14px] md:text-[16px] font-medium font-Jakarta text-[#131126] tracking-wider leading-6 text-start">
                {item.description}
              </p>
              <p className="text-[12px] sm:text-[14px] md:text-[16px] font-medium font-Jakarta text-[#131126] tracking-wider leading-6 text-start">
                {item.description1}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default MyAccordion;
