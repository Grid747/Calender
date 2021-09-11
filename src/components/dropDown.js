import React, { useState } from "react";
import MyButtons from "./myButtons";

const DropDown = () => {
  const [dropValue, setdropValue] = useState(false);
  const newDropValue = () => setdropValue(!dropValue);

  return (
    <div className="flex justify-end">
      {" "}
      Login:
      <select
        name="Login"
        value={dropValue}
        onChange={newDropValue}
        className="mx-2 ring-2 ring-gray-400 ring-offset flex"
      >
        <option value={false}>Member</option>
        <option value={true}>Admin</option>
      </select>
      {dropValue ? <MyButtons /> : null}
    </div>
  );
};

export default DropDown;
