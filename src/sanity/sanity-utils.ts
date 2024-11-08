import { landingpage } from "@/types/LandingPage";
import { createClient, groq } from "next-sanity";

export async function getLandingPage(): Promise<landingpage[]> {
  const client = createClient({
    projectId: "mv1izkob",
    dataset: "production",
    apiVersion: "2023-05-06",
    useCdn: true,
  });

  return client.fetch(
    groq`*[_type=="landingpage"] {
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "featuredimage": featuredimage.asset->url,
  heroheadliner,
  herosubtitle,
  herobutton,
  "heroimage": heroimage.asset->url,
  servicetitle,
  serviceheadliner,
  servicecontent,
  services[]{
    _id,
    serviceName,
    servicedescription,
    "icon":icon.asset->url,
  },
  whyus,
  whyusheadliner,
  whyuscontent,
  "whyusimage":whyusimage.asset->url,
  howitworks,
  howitworkheadliner,
  howitworkcontent,
  steps[]{
    _id,
    steptitle,
    stepdescription,
    "stepicon": stepicon.asset->url,
  },
  getstarted,
  getstartedheadliner,
  getstarteddescription,
  faqs,
  faqsheadliner,
  faqsdescription,
  faqsanswers[]{
    _id,
    question,
    answer
  }
    }`
  );
}
