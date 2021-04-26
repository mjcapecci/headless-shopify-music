import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import getProducts from '../lib/getProducts';

import ProductCard from '../components/Collections/ProductCard';
import { useCart } from '../context/cart';

const Collections = ({ allProducts }) => {
  const { closeCartOnNewPage } = useCart();
  useEffect(() => {
    closeCartOnNewPage();
  }, []);

  const generateProductCardSize = () => {
    const count = allProducts.length;
    if (count < 3) return count;
    return 3;
  };

  return (
    <Layout>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-20'>
            <h2 className='text-xs text-indigo-500 tracking-widest font-medium title-font mb-1'>
              ALL MUSIC
            </h2>
            <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900'>
              Master Cleanse Reliac Heirloom
            </h1>
          </div>
          <div className='flex flex-wrap -m-4'>
            {allProducts.map((product, i) => (
              <ProductCard
                product={product}
                key={i}
                size={generateProductCardSize()}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const allProducts = (await getProducts()).products;
  return {
    props: {
      allProducts,
    },
  };
}

export default Collections;
