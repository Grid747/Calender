import React from "react";

function Event({ name, eventDate, startTime, endTime, seatNum, reoccuring }) {
  return (
    <div className="box-content h-200 w-max p-4 border-4 border-gray-400 bg-transparent">
      <h1>Name: {name}</h1>
      <label>Event Date: {eventDate}</label>
      <label>Start Time: {startTime}</label>
      <label>End Time: {endTime}</label>
      <label># of Seats: {seatNum}</label>
      <label>Reoccuring: {reoccuring}</label>
      <button className="bg-gray-500 rounded-sm">edit</button>
      <br />
    </div>
  );
}

export default Event;
