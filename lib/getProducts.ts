import { client } from './Shopify';

export default async function getProducts() {
  console.log('Fetching all products for static build...');

  const products = await client.product
    .fetchAll()
    .then((products) => JSON.stringify(products));

  const productsJson = JSON.parse(products);

  return {
    products: productsJson,
    getProductByHandle: (handle) =>
      productsJson.filter((product) => product.handle === handle)[0],
  };
}
