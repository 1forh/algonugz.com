import React from 'react';

function Price({ price }) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
  }).format(price);

  return (
    <span className='flex items-center space-x-2 font-medium text-gray-50 '>
      <span className='flex items-center justify-center w-5 h-5 p-1 bg-green-300 rounded-full'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 113 113.4'
          className='w-full h-full'
        >
          <title>algorand-algo-logo</title>
          <polygon points='19.6 113.4 36 85 52.4 56.7 68.7 28.3 71.4 23.8 72.6 28.3 77.6 47 72 56.7 55.6 85 39.3 113.4 58.9 113.4 75.3 85 83.8 70.3 87.8 85 95.4 113.4 113 113.4 105.4 85 97.8 56.7 95.8 49.4 108 28.3 90.2 28.3 89.6 26.2 83.4 3 82.6 0 65.5 0 65.1 0.6 49.1 28.3 32.7 56.7 16.4 85 0 113.4 19.6 113.4' />
        </svg>
      </span>
      <span>{formattedPrice}</span>
    </span>
  );
}

export default Price;
