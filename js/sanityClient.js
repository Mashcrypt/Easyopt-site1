import { createClient } from 'https://cdn.skypack.dev/@sanity/client';

export const sanityClient = createClient({
  projectId: 'qjg5raj1',      // your Sanity project ID
  dataset: 'production',       // your dataset
  apiVersion: '2026-01-07',    // updated API version
  useCdn: true                 // fetches cached content for fast load
});

