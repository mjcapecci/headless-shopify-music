import React from 'react';

const NoItems = () => {
  return (
    <div className='flex flex-col px-6 py-5 bg-gray-50'>
      <div className='flex flex-row items-center justify-between p-5 bg-white border border-gray-200 rounded shadow-sm'>
        <div className='flex flex-row items-center'>
          <div className='flex flex-col'>
            <p className='font-semibold text-gray-800'>
              No items in your cart...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoItems;
