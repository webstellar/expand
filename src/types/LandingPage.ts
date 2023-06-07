import { PortableTextBlock } from "sanity";

type Universal = {
  [key: string]: string;
};

export type landingpage = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  featuredimage: string;
  heroheadliner: string;
  herosubtitle: string;
  herobutton: string;
  heroimage: string;
  servicetitle: string;
  serviceheadliner: PortableTextBlock[];
  servicecontent: PortableTextBlock[];
  services: Universal[];
  whyus: string;
  whyusheadliner: PortableTextBlock[];
  whyuscontent: PortableTextBlock[];
  whyusimage: string;
  howitworks: string;
  howitworkheadliner: PortableTextBlock[];
  howitworkcontent: PortableTextBlock[];
  steps: Universal[];
  getstarted: string;
  getstartedheadliner: PortableTextBlock[];
  getstarteddescription: PortableTextBlock[];
  faqs: string;
  faqsheadliner: PortableTextBlock[];
  faqsdescription: PortableTextBlock[];
  faqsanswers: Universal[];
};
