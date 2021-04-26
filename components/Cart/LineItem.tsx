import React from 'react';

interface Props {
  item: LineItem;
  removeFromCart: (itemToRemove: LineItem) => void;
}

const LineItem = ({ item, removeFromCart }: Props) => {
  return (
    <div className='flex flex-col px-6 py-5 bg-gray-50'>
      <div className='flex flex-row items-center justify-between p-5 bg-white border border-gray-200 rounded shadow-sm'>
        <div className='flex flex-row items-center'>
          <div className='flex flex-col'>
            <p className='font-semibold text-gray-800'>{item.title}</p>
            <p className='text-gray-400'>${item.price}</p>
          </div>
        </div>
        <h1
          className='font-semibold text-red-400'
          onClick={() => removeFromCart(item)}
        >
          Remove
        </h1>
      </div>
    </div>
  );
};

export default LineItem;
