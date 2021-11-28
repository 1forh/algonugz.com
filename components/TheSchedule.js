import React from 'react';
import TheScheduleEvent from './TheScheduleEvent';
import { events } from '../data';

function TheSchedule() {
  return (
    <div>
      <div class='container mx-auto w-full h-full'>
        <div class='relative wrap overflow-hidden p-10 h-full'>
          <div
            class='border-2-2 absolute border-opacity-20 border-gray-700 h-full border'
            style={{ left: '50%' }}
          ></div>

          {events.map((event, index) => (
            <TheScheduleEvent
              event={event}
              side={index % 2 === 0 ? 'left' : 'right'}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TheSchedule;
