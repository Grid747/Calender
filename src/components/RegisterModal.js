import React, { useState } from "react";

function RegisterModal({ closebtn, subOn, disable }) {
  const [rank, setRank] = useState("");
  const changeRank = (e) => setRank(e.target.value);

  const [name, setName] = useState("");
  const changeName = (e) => setName(e.target.value);

  const [email, setEmail] = useState("");
  const changeEmail = (e) => setEmail(e.target.value);

  const [phoneNumber, setPhoneNumber] = useState("");
  const changePhoneNumber = (e) => setPhoneNumber(e.target.value);

  let ischecked = true;

  const submitbtn = (e) => {
    e.preventDefault();
    subOn({ rank, name, email, phoneNumber, ischecked });
  };
  return (
    <div className="fixed pin z-50 pt-10 justify-center overflow-auto bg-gray-400 bg-opacity-60 flex w-full h-full">
      <div className="flex px-4 h-96 flex-col w-92 rounded border-2 border-gray-900 bg-gray-200 justify-center">
        <form onSubmit={submitbtn}>
          <h1 className="flex justify-left">Rank:</h1>
          <input
            className="border border-gray-900 pl-2 flex justify-center w-80"
            type="text"
            onChange={changeRank}
          />
          <h1 className="flex justify-left pt-6">Name:</h1>
          <input
            className="border border-gray-900 pl-2 flex justify-center w-80"
            type="text"
            onChange={changeName}
          />
          <h1 className="flex justify-left pt-6">Email:</h1>
          <input
            className="border border-gray-900  pl-2 flex justify-center w-80"
            type="email"
            onChange={changeEmail}
          />
          <h1 className="flex justify-left pt-6">Phone (###-###-####):</h1>
          <input
            className="border border-gray-900 pl-2 flex justify-center w-80"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={changePhoneNumber}
          />
          <div className="flex justify-evenly pt-7 pb-5">
            <button
              type="button"
              className="bg-white border border-gray-900 rounded-md px-3 py-2 hover:bg-red-600"
              onClick={closebtn}
              disabled={disable}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-white border border-gray-900 rounded-md px-3 py-2 hover:bg-green-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
