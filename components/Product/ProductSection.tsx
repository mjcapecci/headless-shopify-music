import React from 'react';
import { useCart } from '../../context/cart';
import quantity from '../../pages/api/quantity';

interface Props {
  product: Product;
}

const ProductSection = ({ product }: Props) => {
  const { addToCart } = useCart();

  const lineItem: LineItem = {
    title: product.title,
    handle: product.handle,
    variantId: product.variants[0].id,
    quantity: 1,
    price: product.variants[0].price,
  };

  return (
    <section className='text-gray-600 body-font overflow-hidden'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='lg:w-4/5 mx-auto flex flex-wrap'>
          <img
            alt='ecommerce'
            className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
            src={product.images[0]?.src || 'https://dummyimage.com/400x400'}
            width={400}
            height={400}
          />
          <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
            <h2 className='text-sm title-font text-gray-500 tracking-widest'>
              {product.vendor}
            </h2>
            <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
              {product.title}
            </h1>

            <p className='leading-relaxed'>{product.description}</p>
            <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'></div>
            <div className='flex'>
              <span className='title-font font-medium text-2xl text-gray-900'>
                ${product.variants[0].price}
              </span>
              <button
                className='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'
                onClick={() => addToCart(lineItem)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
