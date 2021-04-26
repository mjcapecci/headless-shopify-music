import React, { useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import getProducts from '../../lib/getProducts';
import { useCart } from '../../context/cart';

import Layout from '../../components/Layout/Layout';
import ProductSection from '../../components/Product/ProductSection';

const foundProducts = getProducts();

const Product = ({ productData }) => {
  const { closeCartOnNewPage } = useCart();
  useEffect(() => {
    closeCartOnNewPage();
  }, []);

  return (
    <Layout>
      <ProductSection product={productData} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const allProductData = (await foundProducts).products;
  const paths = allProductData.map((product) => {
    return { params: { handle: product.handle } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allProductData = await foundProducts;
  const productData = allProductData.getProductByHandle(params.handle);

  return {
    props: {
      productData,
    },
  };
};

export default Product;
