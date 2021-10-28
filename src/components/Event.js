import React from "react";

function Event({ name, eventDate, startTime, endTime }) {
  return (
    <div className="flex justify-center p-3">
      <div className="flex flex-col w-auto h-auto">
        <h1 className="flex justify-center text-2xl font-medium capitalize">{name}</h1>
        <div className="flex justify-center">
          <label>{eventDate}</label>
        </div>
        <div className="flex pb-5 justify-center">
          <label>{startTime} - {endTime}</label>
        </div>
      </div>
    </div>
  );
}

export default Event;

