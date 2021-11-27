import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Price from './Price';

function Card({ item }) {
  return (
    <a href={item.url} className='group'>
      <Image
        src={item.image}
        alt={item.id}
        width={400}
        height={400}
        className='rounded-lg'
      />
      <p className='text-green-50'>{item.id}</p>
      {item.name && <h3 className='text-green-50'>{item.name}</h3>}

      <p className='flex text-green-50'>
        OG price: &nbsp;
        <Price price={item.price} />
      </p>

      <p className='text-green-300'>Total Supply: {item.total}</p>
    </a>
  );
}

export default Card;
