import blog from "@/sanity/schemas/blog-schema";
import experts from "@/sanity/schemas/expert-schema";
import landingPage from "@/sanity/schemas/landingpage-schema";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "@/sanity";

const config = defineConfig({
  projectId: "mv1izkob",
  dataset: "production",
  title: "Expand",
  apiVersion: "2023-05-06",
  useCdn: true,
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
