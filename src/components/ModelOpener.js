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
    setshowModal(!showModal)
    setLabel("Add Event")
  }

  return (
    <div className='flex flex-col justify-center px-2'>
      <div className='flex justify-center'>
        <div
          className={`${
            showModal ? "flex justify-center pb-0" : "flex justify-center pb-10"
          }`}
        >
          <button
            className={`${
              showModal
                ? "flex justify-center hover:bg-red-900 text-black font-bold hover:text-white py-2 px-1 border hover:border rounded-lg text-l"
                : "flex justify-center hover:bg-gray-900 text-black font-bold hover:text-white py-2 px-1 border hover:border-transparent rounded-lg text-l"
            }`}
            onClick={onclick}
          >
            {label}
          </button>
        </div>
      </div>
      <div className='flex justify-center px-2'>
        {showModal && <Modal onAdd={onAdd} submit={submit} />}
      </div>
    </div>
  );
}

export default ModelOpener;
