import React from "react";

function DummyBox() {
  return (
    <div className="h-max w-max p-4 border-4 border-gray-400">
      <div className="h-max w-full p-2  border-2 border-gray-900">
        <h1 className="text-lg font-bold"> Event 1</h1>
        <label className="px-2">Date: 10/12/2021</label>
        <label className="px-2">Start: 09:00am</label>
        <label className="px-2">End: 09:30am</label>
        <label className="px-2"># of Seats: 12</label>
        <label className="px-2">Recurring: Yes</label>
        <button className="bg-green-500">Edit</button>
      </div>
      <br />
      <div className="h-max w-full p-2 border-2 border-gray-900">
        <h1 className="text-lg font-bold"> Event 2</h1>
        <label className="px-2">Date: 10/13/2021</label>
        <label className="px-2">Start: 10:00am</label>
        <label className="px-2">End: 10:30am</label>
        <label className="px-2"># of Seats: 5</label>
        <label className="px-2">Recurring: No</label>
        <button className="bg-green-500 justify-items-end">Edit</button>
      </div>
    </div>
  );
}

export default DummyBox;
