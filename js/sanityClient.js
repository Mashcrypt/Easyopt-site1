// sanityClient.js
import { createClient } from 'https://cdn.skypack.dev/@sanity/client';

export const sanityClient = createClient({
  projectId: 'qjg5raj1',      // <--- Replace with your Sanity project ID
  dataset: 'production',       // <--- Replace if you use a different dataset
  apiVersion: '2026-01-01',   // use today's date or any date
  useCdn: true                 // `true` = fast, cached, read-only; `false` = live data
});

