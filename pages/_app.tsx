import { SWRConfig } from 'swr';
import { CartProvider } from '../context/cart';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <SWRConfig
        value={{
          refreshInterval: 10000,
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </CartProvider>
  );
}

export default MyApp;
