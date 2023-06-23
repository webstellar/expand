"use client";

import React from "react";
import { landingpage } from "@/types/LandingPage";
import Image from "next/image";
import Link from "next/link";

import { client } from "@/sanity/client";

//temporary
import Heroimage from "../../../public/africa_and_expert.png";

interface pageProps {
  data: landingpage;
  urlFor: any;
}

const Hero: React.FC<pageProps> = ({ data, urlFor }) => {
  return (
    <div className="relative bg-bottle-green h-[100vh] md:h-[800px] mb-10">
      <div className="mx-auto flex flex-row flex-wrap md:flex-nowrap max-w-7xl items-center justify-between p-6 lg:px-6 absolute left-0 right-0 bottom-0 top-0 gap-x-5 gap-y-10 md:gap-y-0">
        <div className="text-center md:text-left md:basis-3/5 md:order-1 order-2 flex flex-col gap-y-5 md:gap-y-32">
          <div className="text-gray-50 text-3xl md:text-6xl font-bold leading-normal">
            {data?.heroheadliner}
          </div>
          <div className="text-gray-950 font-medium text-xl md:text-3xl">
            <button className="bg-lemon-green py-2 px-8">
              <Link href="#form">{data.herobutton}</Link>
            </button>
          </div>
        </div>

        <div className="md:basis-2/5 order-1 md:order-2">
          {data.featuredimage && (
            <Image
              src={urlFor(data.featuredimage).ignoreImageParams().url()}
              width={500}
              height={500}
              alt={data.name}
              className="py-10 md:px-5"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
