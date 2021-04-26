import React, { useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';

import Form from '../components/Order/Form';
import { useCart } from '../context/cart';

const Order = () => {
  const { closeCartOnNewPage } = useCart();
  useEffect(() => {
    closeCartOnNewPage();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Order | Music Tailor</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Form />
    </Layout>
  );
};

export default Order;
