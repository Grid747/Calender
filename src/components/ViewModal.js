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
    <div className="inlne-flex py-4 border-2 w-56 items-center content-center border-gray-900 bg-blue-300 justify-center">
      <h1 className="flex justify-center font-bold">Event Name: </h1>
      <p className="flex justify-center" type="text">
        {name}
      </p>
      <h1 className="flex justify-center font-bold">Event Date: </h1>
      <p className="flex justify-center" type="date">
        {date}
      </p>
      <h1 className="flex justify-center font-bold">Start Time:</h1>
      <p className="flex justify-center" type="time">
        {start}
      </p>
      <h1 className="flex justify-center font-bold">End Time: </h1>
      <p className="flex justify-center" type="time">
        {end}
      </p>
      <h1 className="flex justify-center font-bold"># of Seats: </h1>
      <p className="flex justify-center" type="number">
        {seats}
      </p>
      <h1 className="flex justify-center font-bold">Reoccuring: </h1>
      <p className="flex justify-center" type="text">
        {reoccuring}
      </p>
      <h1 className="flex justify-center font-bold">People: </h1>
      <p className="flex flex-col justify-center pl-10 w-44 text-center overflow-hidden" type="text">
        {people}
      </p>
      <div className="p-2 flex justify-evenly">
        <button onClick={closeBtn} className="rounded-full px-3 border border-gray-900 bg-white h-10 w-20 hover:shadow-lg">
            Close
            </button>
      </div>
    </div>
  );
}

export default ViewModal;
