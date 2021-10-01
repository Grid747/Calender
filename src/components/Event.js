import React from "react";

function Event({ name, eventDate, startTime, endTime, seatNum, reoccuring }) {
  /*   const buttonClicked = () => {
    editMe();
  }; */
  return (
    <div className='flex justify-center p-4'>
      <div className='flex flex-col w-auto h-auto'>
        <h1 className='flex px-2'>Event Name: {name}</h1>
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
        {/*         <div className="inline-flex px-1">
          <button className="bg-gray-400 rounded-sm px-2">Register</button>
          <div className="inline-flex px-2">
            <button className="bg-gray-400 rounded-sm px-2">View</button>
            <div className="inline-flex px-2">
              <button
                className="bg-gray-400 rounded-sm px-2"
                onClick={buttonClicked}
              >
                Edit
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Event;
