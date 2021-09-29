import React from "react";

function ViewModal({
  name,
  date,
  start,
  end,
  seats,
  reoccuring,
  people,
  closeBtn,
}) {
  return (
    <div className="inlne-flex py-4 border-2 border-gray-400 bg-blue-500 justify-center">
      <h1 className="flex justify-center">Event Name: </h1>
      <p className="flex justify-center" type="text">
        {name}
      </p>
      <h1 className="flex justify-center">Event Date: </h1>
      <p className="flex justify-center" type="date">
        {date}
      </p>
      <h1 className="flex justify-center">Start Time:</h1>
      <p className="flex justify-center" type="time">
        {start}
      </p>
      <h1 className="flex justify-center">End Time: </h1>
      <p className="flex justify-center" type="time">
        {end}
      </p>
      <h1 className="flex justify-center"># of Seats: </h1>
      <p className="flex justify-center" type="number">
        {seats}
      </p>
      <h1 className="flex justify-center">Reoccuring: </h1>
      <p className="flex justify-center" type="text">
        {reoccuring}
      </p>
      <h1 className="flex justify-center">People: </h1>
      <p className="flex flex-col -mr-10 w-32" type="text">
        {people}
      </p>
      <div className="p-2 flex justify-evenly">
        <button onClick={closeBtn} className="rounded-full px-3 bg-white h-10 w-20 hover:shadow-lg">
            Close
            </button>
      </div>
    </div>
  );
}

export default ViewModal;
