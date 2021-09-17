import React, { useState } from "react";

function EditModal({ visualState, onAdd }) {
  const [name, setName] = useState("");
  const changeName = (e) => setName(e.target.value);

  const [date, setEventDate] = useState("");
  const changeEventDate = (e) => setEventDate(e.target.value);

  const [start, setStartTime] = useState("");
  const changeStartTime = (e) => setStartTime(e.target.value);

  const [end, setEndTime] = useState("");
  const changeEndTime = (e) => setEndTime(e.target.value);

  const [seats, setSeats] = useState(0);
  const changeSeats = (e) => setSeats(e.target.value);

  const [recurring, setRecurring] = useState(0);
  const changeRecur = (e) => setRecurring(e.target.value);

  const formSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, date, start, end, seats, recurring });
  };

  return (
    <div className="flex py-4 border-2 border-gray-400 bg-blue-500 justify-center">
      <form>
        <h1 className="flex justify-center">Event Name:</h1>
        <input
          className="flex justify-center"
          type="text"
          onChange={changeName}
        />
        <h1 className="flex justify-center">Event Date: </h1>
        <input
          className="flex justify-center"
          type="date"
          onChange={changeEventDate}
        />
        <h1 className="flex justify-center">Start Time:</h1>
        <input
          className="flex justify-center"
          type="time"
          onChange={changeStartTime}
        />
        <h1 className="flex justify-center">End Time: </h1>
        <input
          className="flex justify-center"
          type="time"
          onChange={changeEndTime}
        />
        <h1 className="flex justify-center"># of Seats: </h1>
        <input
          className="flex justify-center"
          type="number"
          onChange={changeSeats}
        />
        <h1 className="flex justify-center">Reoccuring: </h1>
        <input
          className="flex justify-center"
          type="text"
          onChange={changeRecur}
        />
        <div className="p-2 flex justify-evenly">
          <button
            onClick={visualState}
            className="rounded-full bg-white px-2 py-1"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={formSubmit}
            className="rounded-full bg-white px-2 py-1"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditModal;
