import React, { useState } from "react";
import ModelOpener from "./ModelOpener";

const DropDown = () => {
  const [dropValue, setdropValue] = useState(false);
  const newDropValue = () => setdropValue(!dropValue);

  return (
    <div className='flex flex-col justify-end'>
      <div className='justify-end'>
        {" "}
        <h1 className='justify-end px-6'>Login:</h1>
        <label>
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
        {dropValue ? <ModelOpener label='Add Event' /> : null}
      </div>
    </div>
  );
};

export default DropDown;
