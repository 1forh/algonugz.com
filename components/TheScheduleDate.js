import React from 'react';
import dayjs from 'dayjs';

function TheScheduleDate({ date }) {
  return (
    <div class='z-20 flex items-center order-1'>
      <span class='mx-auto font-semibold text-lg text-green-50'>
        {dayjs(date).format('MM/DD/YYYY')}
      </span>
    </div>
  );
}

export default TheScheduleDate;
