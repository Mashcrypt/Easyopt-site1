<script type="module">
import { sanityClient } from './js/sanityClient.js';

// Example: fetch jobs
async function fetchJobs() {
  const query = `*[_type=="job"] | order(posted desc){title, company, description, location, salary, applyLink, category, posted, deadline}`;
  const jobs = await sanityClient.fetch(query);
  console.log(jobs);
}
fetchJobs();
</script>

