import React from "react";

function Event({ name, eventDate, startTime, endTime, seatNum, reoccuring }) {
  return (
    <div className="flex justify-center p-4">
      <div className="flex flex-col w-auto h-auto">
        <h1 className="flex justify-center text-2xl font-medium capitalize">
          {/* Event Name: */} {name}
        </h1>
        <div className="flex pb justify-center">
          <label>Date: {eventDate}</label>
        </div>
        <div className="flex pb justify-center">
          <label>
            {startTime} - {endTime}
          </label>
        </div>
        {/* <div className="flex pb-5 justify-center">
          <label>End Time: {endTime}</label>
        </div> */}
        <div className="flex pb justify-center">
          <label>Seats left: {seatNum}</label>
        </div>
        {/*         <div className="flex pb-5 justify-center">
          <label>Reoccuring: {reoccuring}</label>
        </div> */}
      </div>
    </div>
  );
}

export default Event;
