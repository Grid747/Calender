import React, { useState } from "react";

function Modal() {
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
    }
  ]
 */
  const [name, setName] = useState("");
  const changeName = (e) => setName(e.value.target);

  const [eventDate, setEventDate] = useState("");
  const changeEventDate = (e) => setEventDate(e.value.target);

  const [startTime, setStartTime] = useState("");
  const changeStartTime = (e) => setStartTime(e.value.target);

  const [eventEndTime, setEndTime] = useState("");
  const changeEndTime = (e) => setEndTime(e.value.target);

  const [seats, setSeats] = useState(0);
  const changeSeats = (e) => setSeats(e.target.value);

  const [recur, setRecur] = useState(0);
  const changeRecur = (e) => setRecur(e.target.value);

  function formSubmit(e) {
    e.preventDefault();
    console.log(seats);
  }

  return (
    <div className="grid justify-center">
      <form onSubmit={formSubmit}>
        <div className="bg-blue-400 w-92 h-92 content-center grid justify-center">
          <h1>Event Name</h1>
          <input type="text" />
          <h1>Event Date</h1>
          <input type="date" />
          <label>Start Time</label>
          <input type="time" />
          <label>End Time</label>
          <input type="time" />
          <h1># of seats</h1>
          <input type="number" onChange={changeSeats} />
          <h1>Recurring</h1>
          <input type="text" />
          <button className="ring-red-900 bg-green-500">Submit</button>
        </div>
      </form>
      {/*       <form onSubmit={handleSubmit}> */}
      {/*       </form> */}
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
