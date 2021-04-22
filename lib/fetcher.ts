import { client } from './Shopify';
import { GraphQLClient, gql } from 'graphql-request';

// const endpoint =

const fetcher = async (type, data) => {
  switch (type) {
    case 'product':
      client.product.fetchByHandle(data);
    default:
      return;
  }
};

export default fetcher;
