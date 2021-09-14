import React from "react";
import Modal from "./Modal";
import { useState } from "react";

function ModelOpener({ label, onAdd }) {
  const [showModal, setshowModal] = useState(false);
  const onclick = () => {
    setshowModal(!showModal);
  };

  return (
    <div className="flex flex-col justify-center px-2">
      <div className="flex justify-center">
        <button
          className="flex justify-center hover:bg-gray-900 text-black font-bold hover:text-white py-2 px-1 
        border hover:border-transparent rounded-lg text-l"
          onClick={onclick}
        >
          {label}
        </button>
      </div>
      <div className="flex flex-col justify-center px-2">
        {showModal && <Modal onAdd={onAdd} />}
      </div>
    </div>
  );
}

export default ModelOpener;
