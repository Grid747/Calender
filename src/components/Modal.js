import React from "react";

function Modal() {
  return (
    <div className='grid justify-center'>
      <div className='block visible bg-blue-400 w-56 h-8 content-center grid justify-center'>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
}

export default Modal;

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
