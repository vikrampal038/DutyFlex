import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MyAccordion = () => {
  const AccordionData = [
    {
      title: "What is the best way to create a saas business today?",

      description:
        "Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.",

      description1:
        "Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.",
    },

    {
      title: "What is the best way to create a saas business today?",

      description:
        "Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.",

      description1:
        "Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.",
    },

    {
      title: "What is the best way to create a saas business today?",

      description:
        "Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.",

      description1:
        "Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.",
    },

    {
      title: "What is the best way to create a saas business today?",

      description:
        "Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.",

      description1:
        "Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.",
    },

    {
      title: "What is the best way to create a saas business today?",

      description:
        "Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.",

      description1:
        "Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Accordion
        type="single"
        collapsible
        className="w-[65%] text-center flex flex-col justify-center items-center gap-3"
        defaultValue="item-1"
      >
        {AccordionData.map((item, index) => (
          <AccordionItem
            key={index}
            className="w-full mb-5 "
            value={`item-${index + 1}`}
          >
            <AccordionTrigger className=" border border-black bg-[#ffff] text-black data-[state=open]:bg-[#3c3679] data-[state=open]:text-white transition-all duration-1000 font-Jakarta font-semibold text-[16px] px-10 tracking-wider">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-6 py-5 text-center px-10 bg-white">
              <p className="text-[16px] font-normal font-Jakarta text-[#131126] leading-6 text-start">
                {item.description}
              </p>
              <p className="text-[16px] font-normal font-Jakarta text-[#131126] leading-5 text-start">
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
