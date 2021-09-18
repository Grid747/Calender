import React, { useState } from "react";
/* import Data from "../Data/Data"; */

function Modal({ onAdd }) {
  /*   function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  } */

  /*   const myEvents = [
    {
      Name: "Event1",
      theDate: "12/22/1997",
      time: "15:30",
      seats: 20,
      recurring: true
      people: [aaron, caden, amanda, ]
    }
  ]
 */
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

  /*   const newEvent = {
    id: 0,
    Name: name,
    theDate: eventDate,
    start: startTime,
    end: eventEndTime,
    seats: seats,
    recurring: recur,
    people: [],
  };
  const [allEvents, setallEvents] = useState(Data);

  const addEvent = (myData, myNewEvent) => {
    const id = Math.floor(Math.random() * 100000000) + 1;
    newEvent.id = id;
    setallEvents([...myData, myNewEvent]);
  }; */

  const formSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100000000) + 1;

    onAdd({ id, name, date, start, end, seats, recurring });
  };

  return (
    <div className="flex justify-center border w-full">
      <form onSubmit={formSubmit}>
        <div className="bg-gray-400 px-3 py-1 w-full h-full flex">
          <h1 className="px-1">Event Name</h1>
          <input
            className="border-2 border-gray-900 rounded px-1"
            type="text"
            onChange={changeName}
          />
          <h1 className="px-1">Event Date</h1>
          <input
            className="border-2 border-gray-900 rounded px-1"
            type="date"
            onChange={changeEventDate}
          />
          <h1 className="px-1">Start Time</h1>
          <input
            className="border-2 border-gray-900 rounded px-1"
            type="time"
            onChange={changeStartTime}
          />
          <h1 className="px-1">End Time</h1>
          <input
            className="border-2 border-gray-900 rounded px-1"
            type="time"
            onChange={changeEndTime}
          />
          <h1 className="px-1"># of seats</h1>
          <input
            className="border-2 border-gray-900 rounded px-1"
            type="number"
            onChange={changeSeats}
          />
          <h1 className="px-1">Reoccuring</h1>
          <input
            type="radio"
            id="no"
            name="repeating"
            value="Off"
            onChange={changeRecur}
          />
           <label for="no">No</label>
          <input
            type="radio"
            id="Daily"
            name="repeating"
            value="Daily"
            onChange={changeRecur}
          />
          <label for="css">Daily</label>
          <input
            type="radio"
            id="Weekly"
            name="repeating"
            value="Weekly"
            onChange={changeRecur}
          />
          <label for="Weekly">Weekly</label>
          <div className="px-1 content-center flex">
            <button className="rounded-full px-3 bg-white">Submit</button>
          </div>
        </div>
      </form>
      {/*       {showBox && (
        <DataBox
          name={name}
          eventDate={eventDate}
          startTime={startTime}
          endTime={eventEndTime}
          seatNum={seats}
          reoccuring={recur}
        />
      )} */}
    </div>
  );
}

export default Modal;

/*<body>
  <h1>Create Textbox element using JavaScript</h1>
  <script>
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    document.body.appendChild(input);
  </script>
</body> */
/* 

  <div
    className="block visible bg-gray-900 text-white"
  >
    <div className="block visible bg-gray-200">
      <span className="close">&times;</span>
      <p>Some text in the Modal..</p>
    </div>
  </div>;

*/
