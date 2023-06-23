"use client";

import React, { useState, useCallback } from "react";
import { classNames } from "@/utils/classNames";
import { landingpage } from "@/types/LandingPage";
import { PortableText } from "@portabletext/react";

import { HiChevronUp, HiChevronDown } from "react-icons/hi2";

interface pageProps {
  data: landingpage;
}

const Faqs: React.FC<pageProps> = ({ data }) => {
  const [open, setOpen] = useState<number | null>(null);

  const select = useCallback(
    (i: number) => {
      if (open === i) return setOpen(null);
      setOpen(i);
    },
    [open]
  );

  return (
    <div
      className="bg-transparent flex flex-wrap md:flex-nowrap mx-auto flex-row max-w-7xl items-center justify-between p-6 lg:px-6 md:gap-x-32 gap-y-10 md:gap-y-0 mb-10 md:mb-20"
      id="faqs"
    >
      <div className="flex flex-col md:basis-2/5 text-left md:gap-y-5 order-1">
        <div className="text-lemon-green text-xl font-bold">{data.faqs}</div>
        <div className="text-gray-950 text-4xl md:text-6xl font-bold leading-tight mb-5 md:mb-0">
          <PortableText value={data.faqsheadliner} />
        </div>
        <div className="text-base">
          <PortableText value={data.faqsdescription} />
        </div>
      </div>

      <div className="order-2 md:basis-3/5">
        <div className="flex flex-col items-center justify-center text-black bg-transparent dark:text-white w-full">
          {data.faqsanswers.map((item, i) => (
            <div className="flex flex-col" key={i}>
              <div
                className="text-xl flex items-center justify-between cursor-pointer p-2 text-gray-950"
                onClick={() => select(i)}
              >
                <span>{item.question}</span>
                <span>{open === i ? <HiChevronUp /> : <HiChevronDown />}</span>
              </div>
              <div
                className={classNames(
                  "transition-all duration-100 ease-in-out font-light text-gray-700 overflow-hidden",
                  open === i ? "p-2" : "p-0"
                )}
                style={{ maxHeight: open === i ? "" : 0 }}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
