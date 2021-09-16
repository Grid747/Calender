import React from "react";

function Event({
  name,
  eventDate,
  startTime,
  endTime,
  seatNum,
  reoccuring,
  editMe,
  myKey,
}) {
  return (
    <div className='flex p-4'>
      <div className='flex flex-col box-content h-auto p-4 border-4 border-gray-400 bg-transparent w-auto pt-6'>
        <h1 className='flex px-2'>Name: {name}</h1>
        <div className='flex px-2'>
          <label>Event Date: {eventDate}</label>
        </div>
        <div className='flex px-2'>
          <label>Start Time: {startTime}</label>
        </div>
        <div className='flex px-2'>
          <label>End Time: {endTime}</label>
        </div>
        <div className='flex px-2'>
          <label># of Seats: {seatNum}</label>
        </div>
        <div className='flex px-2'>
          <label>Reoccuring: {reoccuring}</label>
        </div>
        <div className='inline-flex px-1'>
          <button className='bg-gray-400 rounded-sm px-2'>Register</button>
          <div className='inline-flex px-2'>
            <button className='bg-gray-400 rounded-sm px-2'>View</button>
            <div className='inline-flex px-2'>
              <button
                className='bg-gray-400 rounded-sm px-2'
                id={myKey}
                onClick={editMe}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
