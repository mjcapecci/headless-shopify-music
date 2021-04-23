import Head from 'next/head';
import Layout from '../components/Layout/Layout';

import Hero from '../components/Home/Hero';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
    </Layout>
  );
}
