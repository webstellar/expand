const landingPage = {
  name: "landingpage",
  title: "Landing Page",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "featuredimage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true, accept: "image/svg+xml", svg: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "heroheadliner",
      title: "Hero Headliner",
      type: "string",
    },
    {
      name: "herosubtitle",
      title: "Hero Subitle Title",
      type: "string",
    },
    {
      name: "herobutton",
      title: "Hero Button",
      type: "string",
    },
    {
      name: "buttonurl",
      title: "Button Url",
      type: "url",
    },
    {
      name: "heroimage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true, accept: "image/svg+xml", svg: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "servicetitle",
      title: "Service Title",
      type: "string",
    },
    {
      name: "serviceheadliner",
      title: "Service Headliner",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "servicecontent",
      title: "Service Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "services",
      title: "Our Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              title: "Service Name",
              name: "serviceName",
            },
            {
              type: "string",
              title: "Service Description",
              name: "servicedescription",
            },
            {
              type: "image",
              name: "icon",
              title: "Service Icon",
              options: { hotspot: true, accept: "image/svg+xml", svg: true },
              fields: [
                {
                  name: "alt",
                  title: "Alt",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "whyus",
      title: "Why Expand?",
      type: "string",
    },
    {
      name: "whyusheadliner",
      title: "Why Us Header",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "whyuscontent",
      title: "Why Us Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      type: "image",
      name: "whyusimage",
      title: "Why Us Image",
      options: { hotspot: true, accept: "image/svg+xml", svg: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "howitworks",
      title: "How it Works",
      type: "string",
    },
    {
      name: "howitworkheadliner",
      title: "How it works Headliner",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "howitworkcontent",
      title: "How it Works Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "steptitle",
              title: "Title",
              type: "string",
            },
            {
              name: "stepdescription",
              title: "Step Description",
              type: "string",
            },
            {
              type: "image",
              name: "stepicon",
              title: "Icon",
              options: { hotspot: true, accept: "image/svg+xml", svg: true },
              fields: [
                {
                  name: "alt",
                  title: "Alt",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "getstarted",
      title: "Get Started",
      type: "string",
    },
    {
      name: "getstartedheadliner",
      title: "Get Started Headliner",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "getstarteddescription",
      title: "Get Started Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "faqs",
      title: "FAQs Title",
      type: "string",
    },
    {
      name: "faqsheadliner",
      title: "FAQs Headliner",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "faqsdescription",
      title: "FAQs Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "faqsanswers",
      title: "Faqs Questions and Answers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "question",
              title: "Question",
            },
            {
              type: "string",
              name: "answer",
              title: "Answer",
            },
          ],
        },
      ],
    },
  ],
};

export default landingPage;
