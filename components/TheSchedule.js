import React from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
import TheScheduleEvent from './TheScheduleEvent';
import { events } from '../data';

function TheSchedule() {
  const todaysEvents = events.filter((event) =>
    dayjs(event.date).isSame(dayjs(), 'day')
  );

  const upcomingEvents = events.filter((event) =>
    dayjs(event.date).isAfter(new Date())
  );

  // sort events by data descending
  const pastEvents = events
    .filter((event) => dayjs(event.date).isBefore(new Date()))
    .sort((a, b) => dayjs(b.date) - dayjs(a.date));

  return (
    <div>
      <div className='container w-full h-full mx-auto'>
        <div className='flex flex-col mb-10 space-y-5'>
          <Link href='/'>
            <a className='inline-flex w-6 h-6 text-green-300 group'>
              <svg
                viewBox='0 0 448 512'
                className='w-6 h-6 transition-opacity duration-150 opacity-75 group-hover:opacity-50'
              >
                <path
                  fill='currentColor'
                  d='M152.485 396.284l19.626-19.626c4.753-4.753 4.675-12.484-.173-17.14L91.22 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H91.22l80.717-77.518c4.849-4.656 4.927-12.387.173-17.14l-19.626-19.626c-4.686-4.686-12.284-4.686-16.971 0L3.716 247.515c-4.686 4.686-4.686 12.284 0 16.971l131.799 131.799c4.686 4.685 12.284 4.685 16.97-.001z'
                ></path>
              </svg>
              <span className='sr-only'>Back to home</span>
            </a>
          </Link>

          <h1 className='text-3xl font-bold text-green-300'>Events</h1>
          <p className='max-w-xl text-opacity-90 text-green-50'>
            Here you will find a list of today's events and upcoming and past
            events. Types of events could include giveaways, new Nugz or Glass
            drops, and other exciting things!
          </p>
        </div>

        {todaysEvents.length > 0 && (
          <div>
            <h2 className='mb-6 text-xl font-medium text-green-50'>Today</h2>

            <div>
              {todaysEvents.map((event) => (
                <TheScheduleEvent key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        <div className='w-full h-[2px] max-w-xl mb-8 bg-green-50 bg-opacity-20'></div>

        {upcomingEvents.length > 0 && (
          <div>
            <h2 className='mb-8 text-xl font-medium text-green-50'>
              Upcoming Events
            </h2>
            <div>
              {upcomingEvents.map((event) => (
                <TheScheduleEvent key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        <div className='w-full h-[2px] max-w-xl mb-8 bg-green-50 bg-opacity-20'></div>

        {pastEvents.length > 0 && (
          <div>
            <h2 className='mb-8 text-xl font-medium text-green-50'>
              Past Events
            </h2>
            <div>
              {pastEvents.map((event) => (
                <TheScheduleEvent
                  key={event.id}
                  event={event}
                  className='opacity-75'
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TheSchedule;
