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
    <div className="fixed pt-10 justify-center overflow-auto bg-gray-400 bg-opacity-60 flex w-full h-full">
      <div>
        <div className="rounded flex h-auto flex-col justify-center w-90 p-4 border-2 border-gray-900 bg-gray-200">
          <form onSubmit={formSubmit}>
            <h1 className="px-1 flex justify-left pt-5">Event Name</h1>
            <input
              className="pl-2 border border-gray-900 rounded h-10 w-80 justify-center"
              type="text"
              onChange={changeName}
            />
            <h1 className="px-1 flex justify-left pt-5">Event Date</h1>
            <input
              className="pl-2 border border-gray-900 rounded px-1 w-full h-10"
              type="date"
              onChange={changeEventDate}
            />
            <h1 className="px-1 flex justify-left pt-5">Start Time</h1>
            <input
              className="pl-2 border border-gray-900 rounded px-1 w-full h-10"
              type="time"
              onChange={changeStartTime}
            />
            <h1 className="px-1 flex justify-left pt-5">End Time</h1>
            <input
              className="pl-2 border border-gray-900 rounded px-1 w-full h-10"
              type="time"
              onChange={changeEndTime}
            />
            <h1 className="px-1 flex justify-left pt-5">Number of seats</h1>
            <input
              className="pl-2 border border-gray-900 rounded px-1 h-10 w-80"
              type="number"
              onChange={changeSeats}
            />
            <h1 className="px-1 flex justify-left pt-5">Reoccuring</h1>
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
              <label className="justify-center p-1" htmlFor="Weekly">
                Weekly(For 12 Weeks)
              </label>
            </div>
            <div className="px-1 pt-2 justify-center content-center flex">
              <button className="rounded-lg px-3 bg-white h-10 w-20 border border-gray-900 hover:bg-green-200">
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
