import Image from "next/image";
import { getLandingPage } from "@/sanity/sanity-utils";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Why from "@/components/whyexpand/Why";
import How from "@/components/how/How";
import Getstarted from "@/components/getstarted/Getstarted";

export default async function Home() {
  const pages = await getLandingPage();
  return (
    <div>
      {pages.map((page) => (
        <div key={page._id}>
          <Hero data={page} />
          <Services data={page} />
          <Why data={page} />
          <How data={page} />
          <Getstarted data={page} />
        </div>
      ))}
    </div>
  );
}
