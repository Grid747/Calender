/* import React, { useState } from "react"; */
<<<<<<< HEAD
=======

function EditModal({
  closeBtn,
  name,
  changeName,
  date,
  changeDate,
  start,
  changeStart,
  end,
  changeEnd,
  seats,
  changeSeats,
  recurring,
  changeRecur,
  people,
  changePeople,
  formSubmit,
}) {
  /*   const [name, setName] = useState("");
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

  const [people, setPeople] = useState(0);
  const changePeople = (e) => setPeople(e.target.value);

  const formSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, date, start, end, seats, recurring, people });
    submit()
  }; */
>>>>>>> Broken

function EditModal({
  closeBtn,
  name,
  changeName,
  date,
  changeDate,
  start,
  changeStart,
  end,
  changeEnd,
  seats,
  changeSeats,
  recurring,
  changeRecur,
  people,
  changePeople,
  formSubmit,
}) {
  return (
    <div className="flex flex-col justify-center content-center py-4 border-2 border-gray-400 bg-blue-500">
      <form>
        <h1 className="flex justify-center text-lg">Event Name:</h1>
        <input
          className="w-64"
          type="text"
          onChange={changeName}
          value={name}
        ></input>
        <h1 className="flex justify-center text-lg">Event Date: </h1>
        <input
          className="flex justify-center w-64"
          type="date"
          onChange={changeDate}
          value={date}
        ></input>
        <h1 className="flex justify-center text-lg">Start Time:</h1>
        <input
          className="flex justify-center w-64"
          type="time"
          onChange={changeStart}
          value={start}
        ></input>
        <h1 className="flex justify-center text-lg">End Time: </h1>
        <input
          className="flex justify-center w-64"
          type="time"
          onChange={changeEnd}
          value={end}
        ></input>
        <h1 className="flex justify-center text-lg"># of Seats: </h1>
        <input
          className="flex justify-center w-64"
          type="number"
          onChange={changeSeats}
          value={seats}
        ></input>
        <h1 className="flex justify-center text-lg">Reoccuring: </h1>
        <input
          className="inline-flex justify-center w-10"
          type="radio"
          id="no"
          name="repeating"
          value="Off"
          onChange={changeRecur}
        />
        <label className="inline-flex justify-center" htmlFor="no">
          No
        </label>
        <input
          className="inline-flex justify-center w-10"
          type="radio"
          id="Daily"
          name="repeating"
          value="Daily"
          onChange={changeRecur}
        />
        <label className="inline-flex justify-center" htmlFor="css">
          Daily
        </label>
        <input
          className="inline-flex justify-center w-10"
          type="radio"
          id="Weekly"
          name="repeating"
          value="Weekly"
          onChange={changeRecur}
        />
        <label className="inline-flex justify-center" htmlFor="Weekly">
          Weekly
        </label>
        <br />
        <h1 className="flex justify-center text-lg">Attendee's: </h1>
        <input
          className="flex justify-center w-64"
          type="checkbox"
          onChange={changePeople}
        ></input>
        <div className="p-2 flex justify-evenly">
          <button
            onClick={closeBtn}
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
