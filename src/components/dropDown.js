import React from "react";

const DropDown = () => {
  return (
    <div className='flex justify-end'>
      <div class='pt-1 pr-11 font medium md:whitespace-pre flex justify-end'>
        {" "}
        Account:
        <select name='Login' class='mx-2 ring-2 ring-gray-400 ring-offset'>
          <option value='login'></option>
          <option value='member'>Member</option>
          <option value='admin'>Admin</option>
        </select>
      </div>
    </div>
  );
};

export default DropDown;
