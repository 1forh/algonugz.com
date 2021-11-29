import React from 'react';
import Card from './Card';
import dayjs from 'dayjs';

function TheScheduleEvent({ event, className }) {
  return (
    <div className={className}>
      <div
        className={`flex items-center justify-between w-full mb-4 max-w-xl pb-4`}
      >
        <div>
          <p className='mb-2 font-medium text-opacity-75 text-green-50'>
            {dayjs(event.date).format('MMMM D, YYYY')}
          </p>
          <div className={`space-y-3 ${event.nft && 'mb-8'}`}>
            <h3 className='text-xl font-medium text-green-300'>
              {event.title}
            </h3>
            <p className='leading-snug tracking-wide text-opacity-90 text-green-50'>
              {event.description}
            </p>
          </div>

          {event.nft && (
            <div className='w-[260px]'>
              <Card item={event.nft} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TheScheduleEvent;
