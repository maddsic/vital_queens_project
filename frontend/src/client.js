import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
   projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
   dataset: process.env.REACT_APP_SANITY_DATASET,
   useCdn: process.env.REACT_APP_SANITY_USE_CDN,
   apiVersion: process.env.REACT_APP_SANITY_API_VERSION,
   token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

// ALways have to do this line when working with images in sanity studio
export const urlFor = source => builder.image(source);
