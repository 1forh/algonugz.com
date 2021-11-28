import React from 'react';
import Card from './Card';
import TheScheduleDate from './TheScheduleDate';

function TheScheduleEvent({ side = 'right', event }) {
  return (
    <div>
      <div
        className={`flex items-center justify-between w-full mb-8 right-timeline ${
          side === 'left' && 'flex-row-reverse'
        }`}
      >
        <div className='order-1 w-5/12'></div>
        <TheScheduleDate date={event.date} />
        <div className='order-1 w-5/12 px-6 py-4 bg-gray-900 rounded-lg shadow-xl sa'>
          <div class='mb-8 space-y-5'>
            <h3 className='text-xl font-bold text-green-300'>{event.title}</h3>
            <p className='leading-snug tracking-wide text-opacity-100 text-green-50'>
              {event.description}
            </p>
          </div>
          <div className='w-1/3'>
            <Card item={event.nft} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheScheduleEvent;
