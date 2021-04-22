import Client from 'shopify-buy';

export const client = Client.buildClient({
  domain: process.env.NEXT_PUBLIC_STORE_NAME,
  storefrontAccessToken: process.env.NEXT_PUBLIC_TOKEN,
});
