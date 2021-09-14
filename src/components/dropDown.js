import React, { useState } from "react";
import ModelOpener from "./ModelOpener";

const DropDown = () => {
  const [dropValue, setdropValue] = useState(false);
  const newDropValue = () => setdropValue(!dropValue);

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
            className='mx-2 border-2 border-gray-400 border-offset'
          >
            <option value={false}>Member</option>
            <option value={true}>Admin</option>
          </select>
        </label>
        <div className='flex justify-center'>
          {dropValue ? <ModelOpener label='Add Event' /> : null}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
