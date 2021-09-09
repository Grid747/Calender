import React from "react";

function Modal() {
  return (
    <div className="block visible bg-gray-900 text-white">
      <div className="block visible bg-gray-200">
        <span className="close">&times;</span>
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
