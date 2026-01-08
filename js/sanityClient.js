// sanityClient.js
import { createClient } from 'https://cdn.sanity.io/client/bundle-2.38.3/sanityClient.min.js';

// Career Unified Sanity client
export const sanityClient = createClient({
  projectId: 'qjg5raj1',       // Your Sanity project ID
  dataset: 'production',        // Your dataset
  useCdn: true,                 // `true` for public, cached data; `false` for fresh data
  apiVersion: '2024-01-01',     // Sanity API version
  token: '',                    // Leave empty for public read-only access
});

