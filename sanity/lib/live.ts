import { defineLive } from "next-sanity";
import { client } from './client'
import "server-only";

export const { sanityFetch, SanityLive } = defineLive({ 
  client: client.withConfig({ 
    apiVersion: 'v2023-08-01',
    token: process.env.SANITY_SERVER_TOKEN,
    // Le browserToken doit être passé directement à defineLive, pas à withConfig
  }),
  // Mettez le browserToken ici à la place
  browserToken: process.env.NEXT_PUBLIC_SANITY_TOKEN
});