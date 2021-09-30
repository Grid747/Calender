import React, { useState } from "react";
/* import Data from "../Data/Data"; */

function Modal({ onAdd, submit }) {
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

  const [reoccuring, setRecurring] = useState("");
  const changeRecur = (e) => setRecurring(e.target.value);

  let people = [];

  //const [people, setPeople] = useState([{}]);
  //const changePeople = (e) => setPeople(e.target.value);

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

    onAdd({ name, date, start, end, seats, reoccuring, people });
    submit();
  };

  /*   console.log(date)
  console.log(name);
  console.log(start)
  console.log(end)
  console.log(seats)
  console.log(recurring) */

  return (
    <div className="fixed pin pt-10 justify-center overflow-auto bg-gray-400 bg-opacity-50 flex w-full h-full">
        {/* <div className="flex justify-center w-full"> */}
          <form onSubmit={formSubmit}>
            <div className="bg-blue-200 rounded px-12 py-8 w-full h-auto flex-col">
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
              <label className="justify-center" htmlFor="No"> No</label>
              </div>
              <div className="flex-inline">
              <input
                type="radio"
                id="Weekly"
                name="repeating"
                value="Weekly"
                onChange={changeRecur}
              />
              <label className="justify-center" htmlFor="Weekly"> Weekly(For 12 Weeks)</label>
              </div>
              <div className="px-1 pt-2 justify-center content-center flex">
                <button className="rounded-full px-3 bg-white h-10 w-20 border border-gray-900 hover:shadow-lg">
                  Submit
                </button>
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
        {/* </div> */}
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
