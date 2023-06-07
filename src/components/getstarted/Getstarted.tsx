"use client";

import React from "react";
import { landingpage } from "@/types/LandingPage";
import Form from "../form/Form";
import { PortableText } from "@portabletext/react";

import Map from "../../../public/Africa-with-pointers.png";

interface pageProps {
  data: landingpage;
}

const Getstarted: React.FC<pageProps> = ({ data }) => {
  return (
    <div className="bg-gray-50 py-10 mb-10 md:mb-20">
      <div className="flex flex-wrap md:flex-nowrap mx-auto flex-row max-w-7xl items-center align-middle justify-start p-6 lg:px-6 gap-x-36 gap-y-10 md:gap-y-0">
        <div className="md:basis-3/5">
          <div className="bg-white p-10 mr-20">
            <Form />
          </div>
        </div>
        <div className="flex flex-col md:basis-2/5 text-left md:gap-y-5">
          <div className="text-lemon-green text-xl font-bold">
            {data.getstarted}
          </div>
          <div className="text-gray-950 text-4xl md:text-6xl font-bold leading-tight mb-5 md:mb-0">
            <PortableText value={data.getstartedheadliner} />
          </div>
          <div className="text-base">
            <PortableText value={data.getstarteddescription} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getstarted;
