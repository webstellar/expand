import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "mv1izkob",
  dataset: "production",
  apiVersion: "2023-05-06",
  useCdn: true,
});
