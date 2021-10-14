import React, { useState } from "react";
/* import Data from "../Data/Data"; */

function Modal({ onAdd, submit }) {
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

  const [reoccuring, setRecurring] = useState("");
  const changeRecur = (e) => setRecurring(e.target.value);

  let people = [];
  let regBtn = true;

  const formSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, date, start, end, seats, reoccuring, people, regBtn });
    submit();
  };
  return (
    <div className="fixed z-50 pt-10 justify-center overflow-auto bg-gray-400 bg-opacity-60 flex w-full h-full">
      <div>
        <div className="rounded-lg flex h-auto flex-col justify-center p-4 border-2 border-gray-900 bg-blue-300">
          <form onSubmit={formSubmit}>
            <h1 className="px-1 flex justify-center">Event Name</h1>
            <input
              className="border-2 border-gray-900 rounded px-1 h-10"
              type="text"
              onChange={changeName}
            />
            <h1 className="px-1 flex justify-center">Event Date</h1>
            <input
              className="border-2 border-gray-900 rounded px-1 w-full h-10"
              type="date"
              onChange={changeEventDate}
            />
            <h1 className="px-1 flex justify-center">Start Time</h1>
            <input
              className="border-2 border-gray-900 rounded px-1 w-full w-fullh-10"
              type="time"
              onChange={changeStartTime}
            />
            <h1 className="px-1 flex justify-center">End Time</h1>
            <input
              className="border-2 border-gray-900 rounded px-1 w-full h-10"
              type="time"
              onChange={changeEndTime}
            />
            <h1 className="px-1 flex justify-center"># of seats</h1>
            <input
              className="border-2 border-gray-900 rounded px-1 h-10"
              type="number"
              onChange={changeSeats}
            />
            <h1 className="px-1 flex justify-center">Reoccuring</h1>
            <div className="flex-inline">
              <input
                className="justify-center"
                type="radio"
                id="No"
                name="repeating"
                value="No"
                onChange={changeRecur}
              />
              <label className="justify-center" htmlFor="No">
                No
              </label>
            </div>
            <div className="flex-inline">
              <input
                type="radio"
                id="Weekly"
                name="repeating"
                value="Weekly"
                onChange={changeRecur}
              />
              <label className="justify-center" htmlFor="Weekly">
                Weekly(For 12 Weeks)
              </label>
            </div>
            <div className="px-1 pt-2 justify-center content-center flex">
              <button className="rounded-full px-3 bg-white h-10 w-20 border border-gray-900 hover:shadow-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Modal;

