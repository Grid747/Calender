import React from "react";

function Modal({ trigger }) {
  return trigger ? (
    <div
      className="block visible bg-gray-900 text-white"
      style={{ visibility: "visible" }}
    >
      <div className="block visible bg-gray-200">
        <span className="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Modal;
