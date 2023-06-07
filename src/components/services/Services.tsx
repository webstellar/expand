"use client";

import React from "react";
import { landingpage } from "@/types/LandingPage";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

//temporary
import Icon from "../../../public/analysis-black.png";

interface pageProps {
  data: landingpage;
}

const Services: React.FC<pageProps> = ({ data }) => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="flex flex-wrap md:flex-nowrap mx-auto flex-row max-w-7xl items-center justify-start p-6 lg:px-6 gap-x-5 gap-y-10 md:gap-y-0 mb-10 md:mb-20">
        <div className="flex flex-col md:basis-2/5 text-left md:gap-y-5 md:order-1 order-2">
          <div className="text-lemon-green text-xl font-bold">
            {data.servicetitle}
          </div>
          <div className="text-gray-950 text-4xl md:text-6xl font-bold leading-tight mb-5 md:mb-0">
            <PortableText value={data.serviceheadliner} />
          </div>
          <div className="text-base">
            <PortableText value={data.servicecontent} />
          </div>
        </div>

        <div className="order-1 md:order-2 md:basis-3/5 flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-0 ">
            {data.services.map((service) => (
              <div className="inline-block px-3" key={service._id}>
                <div className="w-72 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-50 hover:bg-lemon-green hover:shadow-xl transition-shadow duration-300 ease-in-out text-center flex flex-wrap justify-center items-center hover:text-gray-50 p-5">
                  {service.icon ? (
                    <>
                      <Image src={service.icon} alt={service.serviceName} />
                    </>
                  ) : (
                    <>
                      <Image src={Icon} alt="sub" width={100} height={100} />
                    </>
                  )}
                  <div className="font-medium text-2xl">
                    {service.serviceName}
                  </div>
                  <div className="text-base">
                    {service.servicedescription.substring(0, 100)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
