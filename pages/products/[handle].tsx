import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import getProducts from '../../lib/getProducts';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';

const Product = ({ productData }) => {
  const { data } = useSWR(null, fetcher, { initialData: productData });

  return (
    <div>
      <h1>{productData.title}</h1>
      <img src={productData.images[0].src} width='300px' />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const allProductData = await getProducts();
  const paths = allProductData.products.map((product) => {
    return { params: { handle: product.handle } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allProductData = await getProducts();
  const productData = allProductData.getProductByHandle(params.handle);

  return {
    props: {
      productData,
    },
  };
};

export default Product;
