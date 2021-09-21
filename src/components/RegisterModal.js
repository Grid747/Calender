import React, { useState } from "react";

function RegisterModal({ closebtn, subOn }) {
  const [rank, setRank] = useState("");
  const changeRank = (e) => setRank(e.target.value);

  const [name, setName] = useState("");
  const changeName = (e) => setName(e.target.value);

  const [email, setEmail] = useState("");
  const changeEmail = (e) => setEmail(e.target.value);

  const [phoneNumber, setPhoneNumber] = useState("");
  const changePhoneNumber = (e) => setPhoneNumber(e.target.value);

  const submitbtn = (e) => {
    e.preventDefault();
    subOn({ rank, name, email, phoneNumber });
  };

  return (
    <div className="flex px-4 border-2 border-gray-400 bg-blue-500 justify-center">
      <form onSubmit={submitbtn}>
        <h1 className="flex justify-center">Rank:</h1>
        <input
          className="flex justify-center"
          type="text"
          onChange={changeRank}
        />
        <h1 className="flex justify-center">Name:</h1>
        <input
          className="flex justify-center"
          type="text"
          onChange={changeName}
        />
        <h1 className="flex justify-center">Email:</h1>
        <input
          className="flex justify-center"
          type="text"
          onChange={changeEmail}
        />
        <h1 className="flex justify-center">Phone #:</h1>
        <input
          className="flex justify-center"
          type="text"
          onChange={changePhoneNumber}
        />
        <div className="p-2 flex justify-evenly">
          <button
            type="button"
            className="rounded-full bg-white px-2 py-1"
            onClick={closebtn}
          >
            Cancel
          </button>
          <button type="submit" className="rounded-full bg-white px-2 py-1">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterModal;
