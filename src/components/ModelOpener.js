import React from "react";
import Modal from "./Modal";
import { useState } from "react";

function ModelOpener({ onAdd }) {
  const [showModal, setshowModal] = useState(false);
  const [label, setLabel] = useState("Add Event");
  let onclick = () => {
    setshowModal(!showModal);
    if (showModal === true) {
      setLabel("Add Event");
    } else {
      setLabel("Close");
    }
  };

  let submit = () => {
    setshowModal(!showModal);
    setLabel("Add Event");
  };

  return (
    <div className="bg-red-500 border justify-centerp-1.5 h-24 w-full z-50">
      <p className="text-2xl pt-2 font-bold text-white uppercase flex justify-center">
        647th FSS Admin
      </p>
      <div className="flex justify-center items-center">
        <div className="items-center pl-4">
          <button
            className={`${
              showModal
                ? "bg-white hover:bg-gray-900 text-gray-900 font-bold hover:text-white py-2 px-2 border border-gray-900 hover:border-transparent rounded"
                : "bg-white hover:bg-gray-900 text-gray-900 font-bold hover:text-white py-2 px-2 border border-gray-900 hover:border-transparent rounded"
            }`}
            onClick={onclick}
          >
            {label}
          </button>
        </div>
        <div className="flex justify-center items-center"></div>
        <div className="flex justify-center fixed pt-16">
          {showModal && <Modal onAdd={onAdd} submit={submit} />}
        </div>
      </div>
    </div>
  );
}

export default ModelOpener;
