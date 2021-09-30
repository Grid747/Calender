/* import React, { useState } from "react"; */
import ModelOpener from "./ModelOpener";

const DropDown = ({ onAdd, dropValue, newDropValue }) => {
  /*   const [dropValue, setdropValue] = useState(false);
  const newDropValue = () => setdropValue(!dropValue);  */

  return (
    <div className='flex flex-col justify-end w-full'>
      <div className='flex flex-col justify-end'>
        {" "}
        <h1 className='flex justify-end px-8'>Login:</h1>
        <label className='flex justify-end'>
          <select
            name='Login'
            value={dropValue}
            onChange={newDropValue}
            className='mx-2 border-2 border-gray-400 border-offset hover:shadow-lg'
          >
            <option value={false}>Member</option>
            <option value={true}>Admin</option>
          </select>
        </label>
        <div
          className={`${
            dropValue ? "flex justify-center pt-0" : "flex justify-center pt-1"
          }`}
        >
          {dropValue ? (
            <ModelOpener /* label="Add Event" */ onAdd={onAdd} />
          ) : (
            <div className='bg-blue-900 h-12 w-full pb-12 flex justify-center font-bold uppercase p-2 text-2xl text-white'>647th Force Support Squadron</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
