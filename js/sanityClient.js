import { createClient } from 'https://cdn.skypack.dev/@sanity/client';

export const sanityClient = createClient({
  projectId: 'qjg5raj1',      // your project id
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true
});
