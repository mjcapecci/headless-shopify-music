import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { handle } = req.query;

  const {
    SHOPIFY_API_KEY,
    SHOPIFY_API_PASSWORD,
    SHOPIFY_STORE_NAME,
    SHOPIFY_ACCESS_TOKEN,
  } = process.env;

  const endpoint = `https://${SHOPIFY_ACCESS_TOKEN}:${SHOPIFY_API_PASSWORD}@${SHOPIFY_STORE_NAME}/api/graphql.json`;

  const query = `
    {
      productByHandle(handle: "${handle}") {
        id
        variants (first: 100) {
          edges {
            node {
              id
              quantityAvailable
            }
          }
        }
      }
    }
  `;

  try {
    const response = await axios({
      url: endpoint,
      method: 'post',
      data: {
        query,
      },
    });

    const variantQuantities = response.data.data.productByHandle?.variants.edges.map(
      (edge) => edge.node
    );

    res.status(200).json({ quantities: variantQuantities });
  } catch (err) {
    console.log(err);
  }
};
