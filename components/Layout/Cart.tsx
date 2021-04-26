import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LineItem from '../Cart/LineItem';
import NoItems from '../Cart/NoItems';
import { useCart } from '../../context/cart';

const Cart = () => {
  const { items, isOpen, removeFromCart } = useCart();

  const getTotalCartValue = () => {
    let total: number = 0;
    items.forEach((item) => (total += +parseFloat(item.price).toFixed(2)));
    return '$' + total;
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {isOpen && (
        <motion.div
          className='fixed w-full h-screen bg-modal-backdrop z-50'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className='h-screen items-center mt-20'>
            <div className='flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl'>
              <div className='flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg'>
                <p className='font-semibold text-gray-800'>Your Cart</p>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M6 18L18 6M6 6l12 12'
                  ></path>
                </svg>
              </div>

              {items.length > 0 ? (
                items.map((item) => (
                  <LineItem item={item} removeFromCart={removeFromCart} />
                ))
              ) : (
                <NoItems />
              )}
              <div className='flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg'>
                <p className='font-semibold text-gray-600'>Close</p>
                <button
                  className='px-4 py-2 text-white font-semibold bg-blue-500 rounded'
                  disabled={items.length === 0}
                >
                  Checkout{' '}
                  {items.length === 0 ? '' : `(${getTotalCartValue()})`}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;
