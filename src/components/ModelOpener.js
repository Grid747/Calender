import React from "react";
import Modal from "./Modal";
import { useState } from "react";

function ModelOpener({ label }) {
  const [showModal, setshowModal] = useState(false);
  const onclick = () => {
    setshowModal(!showModal);
  };

  return (
    <div className="grid justify-center">
      <button
        className="hover:bg-gray-900 text-black font-bold hover:text-white py-1 px-2 
        border hover:border-transparent rounded-full text-2xl"
        onClick={onclick}
      >
        {label}
      </button>
      {showModal && <Modal />}
    </div>
  );
}

export default ModelOpener;
