const experts = {
  name: "experts",
  title: "Experts",
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
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "firstname",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastname",
      title: "Last Name",
      type: "string",
    },
    {
      name: "phonenumber",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "industry",
      title: "Industry",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Finance", value: "finance" },
          { title: "Technology", value: "technology" },
          { title: "Winery", value: "winery" },
          { title: "Real Estate", value: "realestate" },
        ],
      },
    },
  ],
};

export default experts;
