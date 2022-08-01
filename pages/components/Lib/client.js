import  SanityClient from "@sanity/client";
//import { useNextSanityImage } from 'next-sanity-image';
import imageUrlBuilder from '@sanity/image-url';
//import { SanityClient } from "@sanity/client";
//connecting to sanity through object construction such as productid so sanity should know which product to connect us with.
//dataset so as to know are we in dev or production.
// 

 export const client = SanityClient({
    projectId:'43b7kuba',
    dataset:'production',
    apiVersion:'2022-06-20',
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
});

//getting url image
const builder = imageUrlBuilder(client);
 
export const urlFor =(source) =>builder.image(source);