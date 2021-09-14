import React from "react";
import Modal from "./Modal";
import { useState } from "react";

function ModelOpener({ label }) {
  const [showModal, setshowModal] = useState(false);
  const onclick = () => {
    setshowModal(!showModal);
  };

  return (
    <div className="flex justify-center px-2">
      <button
        className="hover:bg-gray-900 text-black font-bold hover:text-white py-2 px-1 
        border hover:border-transparent rounded-lg text-l flex-3 justify-center"
        onClick={onclick}
      >
        {label}
      </button>
      <div className="px-2">{showModal && <Modal />}</div>
    </div>
  );
}

export default ModelOpener;
