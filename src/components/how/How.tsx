"use client";

import React from "react";
import { landingpage } from "@/types/LandingPage";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

//temporary
import Step1 from "../../../public/step1.svg";

interface pageProps {
  data: landingpage;
}

const How: React.FC<pageProps> = ({ data }) => {
  return (
    <div className="bg-transparent flex flex-wrap md:flex-nowrap mx-auto flex-row max-w-7xl items-center justify-between p-6 lg:px-6 md:gap-x-32 gap-y-10 md:gap-y-0 mb-10 md:mb-20">
      <div className="flex flex-col md:basis-2/5 text-left md:gap-y-5 md:order-2 order-1">
        <div className="text-lemon-green text-xl font-bold">
          {data.howitworks}
        </div>
        <div className="text-gray-950 text-4xl md:text-6xl font-bold leading-tight mb-5 md:mb-0">
          <PortableText value={data.howitworkheadliner} />
        </div>
        <div className="text-base">
          <PortableText value={data.howitworkcontent} />
        </div>
      </div>

      <div className="order-2 md:order-1 md:basis-3/5 flex flex-col gap-y-5">
        {data.steps.map((step) => (
          <div key={step._id} className="flex flex-row">
            <div>
              {step.stepicon ? (
                <>
                  <Image src={step.stepicon} alt={step.title} />
                </>
              ) : (
                <>
                  <Image src={Step1} alt="step1" />
                </>
              )}
            </div>
            <div className="grow flex flex-wrap flex-col">
              <div className="text-xl font-bold">{step.steptitle}</div>
              <div className="text-base">{step.stepdescription}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default How;
