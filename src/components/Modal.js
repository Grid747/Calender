import React from "react";

function Modal() {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  document.body.appendChild(input);
  return (
    <div className='grid justify-center'>
      <div className='bg-blue-400 w-92 h-92 content-center grid justify-center'>
        <h1>Event Name</h1> 
        <input type="text"/>
        <h1>Event Date and Time</h1>
        <input type="date"/>
        <input type="time"/>
        <h1># of seats</h1>
        <input type="number"/>
        <h1>Recurring</h1>
      </div>
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
