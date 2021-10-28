import React from "react";
import Modal from "./Modal";
import { useState } from "react";

function ModelOpener({ 
  onAdd, 
  name, 
  date, 
  start, 
  end, 
  seats, 
  reoccuring, 
  people, 
  regBtn,
  changeName, 
  changeEventDate, 
  changeStartTime, 
  changeEndTime, 
  changeSeats, 
  changeRecur 
  }) {
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
    <div className="bg-blue-500 border justify-centerp-1.5 h-28 w-full z-50">
      <p className="text-2xl pt-2 text-black flex justify-center font-mono">
        Administrator
      </p>
      <div className="flex justify-center items-center">
        <div className="items-center p-2">
          <button
            className={`${
              showModal
                ? "bg-white border border-black hover:bg-yellow-200 text-gray-900 py-2 px-2 rounded"
                : "bg-white border border-black hover:bg-yellow-200 text-gray-900 py-2 px-2 rounded"
            }`}
            onClick={onclick}
          >
            {label}
          </button>
        </div>
        <div className="flex justify-center items-center"></div>
        <div className="flex justify-center fixed pt-16">
          {showModal && <Modal 
          onAdd={onAdd} 
          submit={submit} 
          name={name} 
          date={date} 
          start={start} 
          end={end} 
          seats={seats} 
          reoccuring={reoccuring} 
          people={people} 
          regBtn={regBtn} 
          changeName={changeName} 
          changeEventDate={changeEventDate} 
          changeStartTime={changeStartTime} 
          changeEndTime={changeEndTime} 
          changeSeats={changeSeats} 
          changeRecur={changeRecur} />}
        </div>
      </div>
    </div>
  );
}

export default ModelOpener;

