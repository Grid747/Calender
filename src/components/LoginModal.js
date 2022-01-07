import React, { useState } from "react";

function LoginModal({ closebtn, subLogin }) {
  const [user, setUser] = useState("");
  const changeUser = (e) => setUser(e.target.value);

  const [pass, setPass] = useState("");
  const changePass = (e) => setPass(e.target.value);

  const submitbtnLogin = (e) => {
    e.preventDefault();
    subLogin({ user, pass });
  };
  return (
    <div className="fixed pin z-50 pt-10 justify-center overflow-auto bg-gray-400 bg-opacity-60 flex w-full h-full">
      <div className="flex px-4 h-96 flex-col w-92 rounded border-2 border-gray-900 bg-gray-200 justify-center">
        <form onSubmit={submitbtnLogin}>
          <h1 className="flex justify-left">Username:</h1>
          <input
            className="border border-gray-900 pl-2 flex justify-center w-80"
            type="text"
            onChange={changeUser}
          />
          <h1 className="flex justify-left pt-6">Password:</h1>
          <input
            className="border border-gray-900 pl-2 flex justify-center w-80"
            type="text"
            onChange={changePass}
          />
          <button
            type="button"
            className="bg-white border border-gray-900 rounded-md px-3 py-2 hover:bg-red-600"
            //onClick={closebtn}
            /* disabled={disable} */
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-white border border-gray-900 rounded-md px-3 py-2 hover:bg-green-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
