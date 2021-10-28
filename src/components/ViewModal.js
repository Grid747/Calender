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
    <div className="fixed pin z-50 justify-center overflow-auto bg-gray-400 bg-opacity-60 flex w-full h-full">
      <div>
    <div className="flex flex-col py-4 h-auto  border-2 w-96 items-center content-center border-gray-900 bg-gray-200 justify-center">
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
      <h1 className="flex justify-center font-bold">Number of Seats: </h1>
      <p className="flex justify-center" type="number">
        {seats}
      </p>
      <h1 className="flex justify-center font-bold">Reoccuring: </h1>
      <p className="flex justify-center" type="text">
        {reoccuring}
      </p>
      <h1 className="flex justify-center font-bold pt-12">People: </h1>
      <p className="flex justify-center text-center" type="text">
        {people}
      </p>
      <div className="p-2 flex justify-evenly">
        <button onClick={closeBtn} className="rounded px-3 border border-gray-900 bg-white h-10 w-20 hover:bg-red-600">
            Close
            </button>
      </div>
    </div>
    </div>
    </div>
  );
}

export default ViewModal;

