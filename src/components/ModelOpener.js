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
    <div className="bg-blue-500 justify-center p-2 w-full">
      <p className="text-2xl text-black flex justify-center font-mono">
        Administrator
      </p>
      <div className="flex justify-center p-2">
          <button
            className={`${
              showModal
                ? "bg-white border border-black hover:bg-yellow-200 text-gray-900 py-2 px-2 rounded-lg"
                : "bg-white border border-black hover:bg-yellow-200 text-gray-900 py-2 px-2 rounded-lg"
            }`}
            onClick={onclick}
          >
            {label}
          </button>
          {showModal && <Modal onAdd={onAdd} submit={submit} />}
      </div>
    </div>
  );
}

export default ModelOpener;
