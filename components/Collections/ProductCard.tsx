import React from 'react';
import Link from 'next/link';

interface Props {
  product: Product;
  size: number;
}

const ProductCard = ({ product, size }: Props) => {
  return (
    <div className={`p-4 md:w-1/${size}`}>
      <div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col'>
        <div className='flex items-center mb-3'>
          <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0'>
            <svg
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              className='w-5 h-5'
              viewBox='0 0 24 24'
            >
              <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
            </svg>
          </div>
          <h2 className='text-gray-900 text-lg title-font font-medium'>
            {product.title}
          </h2>
        </div>
        <div className='flex-grow'>
          <p className='leading-relaxed text-base'>{product.description}</p>
          <Link href={'/product/' + product.handle}>Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
