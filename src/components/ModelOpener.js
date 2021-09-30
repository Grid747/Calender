import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import PackageButton from "./PcsPackageBtn";
import InstrucButton from "./InstrucBtn";

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
    <div className="bg-red-400 border p-1.5 h-14 w-full z-50">
      <div className="flex flex-col justify-center px-2 items-center">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center">
          <div className="items-center">
          <InstrucButton label="Instructions" />
          </div>
          <div className="items-center">
            <button
              className={`${
                showModal
                  ? 'bg-white hover:bg-gray-900 text-gray-900 font-bold hover:text-white py-2 px-2 border border-gray-900 hover:border-transparent rounded'
                  : 'bg-white hover:bg-gray-900 text-gray-900 font-bold hover:text-white py-2 px-2 border border-gray-900 hover:border-transparent rounded'
              }`}
              onClick={onclick}
            >
              {label}
            </button>
            </div>
            <div className="items-center">
            <PackageButton label="PCS Package" />
          </div>
          </div>
        </div>
        <div className="flex justify-center px-2 bg-opacity-50 bg-gray-400">
          {showModal && <Modal onAdd={onAdd} submit={submit} />}
        </div>
      </div>
    </div>
  );
}

export default ModelOpener;
