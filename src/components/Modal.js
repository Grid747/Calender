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
      people: [aaron, caden, amanda, ]
    }
  ]
 */
  const [name, setName] = useState("");
  const changeName = (e) => setName(e.target.value);

  const [eventDate, setEventDate] = useState("");
  const changeEventDate = (e) => setEventDate(e.target.value);

  const [startTime, setStartTime] = useState("");
  const changeStartTime = (e) => setStartTime(e.target.value);

  const [eventEndTime, setEndTime] = useState("");
  const changeEndTime = (e) => setEndTime(e.target.value);

  const [seats, setSeats] = useState(0);
  const changeSeats = (e) => setSeats(e.target.value);

  const [recur, setRecur] = useState(0);
  const changeRecur = (e) => setRecur(e.target.value);

  /*   const [showBox, setShowBox] = useState(false);
  const newShowBox = () => setShowBox(!showBox); */

  const formSubmit = (e) => {
    e.preventDefault();
    /*     newShowBox(true); */
    console.log(
      "Event Name: " +
        name +
        "\nEvent Date: " +
        eventDate +
        "\nStart Time: " +
        startTime +
        "\nEnd Time: " +
        eventEndTime +
        "\nSeats: " +
        seats +
        "\nRecure: " +
        recur
    );
  };

  return (
    <div className="flex justify-center border">
      <form onSubmit={formSubmit}>
        <div className='bg-blue-400 px-3 py-1 w-100 h-100 content-center flex'>
          <h1 className='px-1'>Event Name</h1>
          <input
            className="border-2 border-gray-900 rounded px-1 w-10"
            type="text"
            onChange={changeName}
          />
          <h1 className="px-1">Event Date</h1>
          <input
            className="border-2 border-gray-900 rounded px-1 w-15"
            type="date"
            onChange={changeEventDate}
          />
          <h1 className="px-1">Start Time</h1>
          <input
            className="border-2 border-gray-900 rounded px-1 w-10"
            type="time"
            onChange={changeStartTime}
          />
          <h1 className="px-1">End Time</h1>
          <input
            className="border-2 border-gray-900 rounded px-1 w-10"
            type="time"
            onChange={changeEndTime}
          />
          <h1 className="px-1"># of seats</h1>
          <input
            className="border-2 border-gray-900 rounded px-1 w-10"
            type="number"
            onChange={changeSeats}
          />
          <h1 className="px-1">Recurring</h1>
          <input
            className="border-2 border-gray-900 rounded px-1 w-10"
            type="text"
            onChange={changeRecur}
          />
          <br />
          <div className="px-1">
            <button className="border-2 rounded-full border-red-900 px-3 bg-green-500">
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
