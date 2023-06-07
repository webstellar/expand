"use client";

import React from "react";
import { landingpage } from "@/types/LandingPage";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

import Map from "../../../public/Africa-with-pointers.png";

interface pageProps {
  data: landingpage;
}

const Why: React.FC<pageProps> = ({ data }) => {
  return (
    <div className="bg-gray-50 py-10 mb-10 md:mb-20">
      <div className="flex flex-wrap md:flex-nowrap mx-auto flex-row max-w-7xl items-center justify-start p-6 lg:px-6 gap-x-10 gap-y-10 md:gap-y-0">
        <div className="md:basis-3/5">
          {data?.whyusimage ? (
            <>
              <Image
                src={data.whyusimage}
                alt={data.whyus}
                width={300}
                height={300}
              />
            </>
          ) : (
            <>
              <Image
                src={Map}
                alt={data.whyus}
                className="w-[500px] h-[500px]"
              />
            </>
          )}
        </div>
        <div className="flex flex-col md:basis-2/5 text-left md:gap-y-5">
          <div className="text-lemon-green text-xl font-bold">{data.whyus}</div>
          <div className="text-gray-950 text-4xl md:text-6xl font-bold leading-tight mb-5 md:mb-0">
            <PortableText value={data.whyusheadliner} />
          </div>
          <div className="text-base">
            <PortableText value={data.whyuscontent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
