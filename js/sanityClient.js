// js/sanityClient.js
// Browser-ready Sanity client for Career Unified

window.sanityClient = window.sanityClient || {
  fetch: async function(query) {
    const projectId = 'qjg5raj1';
    const dataset = 'production';
    const url = `https://${projectId}.api.sanity.io/v2024-01-01/data/query/${dataset}?query=${encodeURIComponent(query)}`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      return data.result;
    } catch (err) {
      console.error('Sanity fetch error:', err);
      return [];
    }
  }
};

