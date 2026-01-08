// js/sanityClient.js
import { createClient } from 'https://cdn.skypack.dev/@sanity/client';

export const sanityClient = createClient({
  projectId: 'qjg5raj1',    // YOUR Sanity Project ID
  dataset: 'production',     // your dataset
  apiVersion: '2026-01-08',  // use current date or version
  useCdn: true               // `true` = fast, cached data; `false` = fresh data
});

