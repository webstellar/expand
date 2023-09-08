"use client";

import { getLandingPage } from "@/sanity/sanity-utils";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Why from "@/components/whyexpand/Why";
import How from "@/components/how/How";
import Getstarted from "@/components/getstarted/Getstarted";
import Faqs from "@/components/faq/Faqs";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

const builder = imageUrlBuilder(client);

export default async function Home() {
  const pages = await getLandingPage();

  function urlFor(source: any) {
    return builder.image(source);
  }

  return (
    <div>
      {pages.map((page) => (
        <div key={page._id}>
          <Hero data={page} urlFor={urlFor} />
          <Why data={page} />
          <Services data={page} />
          <How data={page} />
          <Getstarted data={page} />
          <Faqs data={page} />
        </div>
      ))}
    </div>
  );
}
