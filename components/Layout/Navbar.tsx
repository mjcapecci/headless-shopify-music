import React from 'react';
import Link from 'next/link';
import { useCart } from '../../context/cart';

const Navbar = () => {
  const { items, isOpen, toggleCart } = useCart();
  return (
    <header
      className={`text-white body-font transition duration-200 ${
        !isOpen ? 'bg-dark-blue-900' : 'bg-nav-active-modal'
      }`}
    >
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a className='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
            viewBox='0 0 24 24'
          >
            <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
          </svg>
          <Link href='/'>
            <span className='ml-3 text-xl'>Music Tailor</span>
          </Link>
        </a>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center'>
          <Link href='/all'>
            <span className='mr-5 hover:text-white'>All Music</span>
          </Link>
          <Link href='/order'>
            <span className='mr-5 hover:text-white'>Custom Order</span>
          </Link>
        </nav>
        <button
          className='inline-flex items-center bg-dark-blue-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-gray mt-4 md:mt-0'
          onClick={() => toggleCart()}
        >
          Cart ({`${items.length}`})
        </button>
      </div>
    </header>
  );
};

export default Navbar;
