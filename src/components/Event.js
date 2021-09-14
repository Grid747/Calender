import React from "react";

function Event({
  name,
  eventDate,
  startTime,
  endTime,
  seatNum,
  reoccuring,
  editMe,
}) {
  return (
    <div className='box-content h-200 p-4 border-4 border-gray-400 bg-transparent w-full pt-6'>
      <h1 className='px-1'>Name: {name}</h1>
      <label className='box-border border-4 border-gray-400 px-1'>
        Event Date: {eventDate}
      </label>
      <label className='box-border border-4 border-gray-400 px-1'>
        Start Time: {startTime}
      </label>
      <label className='box-border border-4 border-gray-400 px-1'>
        End Time: {endTime}
      </label>
      <label className='box-border border-4 border-gray-400 px-1'>
        # of Seats: {seatNum}
      </label>
      <label className='box-border border-4 border-gray-400 px-1'>
        Reoccuring: {reoccuring}
      </label>
      <button className='bg-gray-400 rounded-sm w-auto px-2'>View</button>
      <button className='bg-gray-400 rounded-sm w-auto px-2'>Edit</button>
      <button className='bg-gray-400 rounded-sm w-auto px-2'>Register</button>
    </div>
  );
}

export default Event;
