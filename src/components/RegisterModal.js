import React from "react";

function RegisterModal() {
  return (
    <div className='flex px-4 border-2 border-gray-400 bg-blue-500 justify-center'>
      <form>
        <h1 className='flex justify-center'>Rank:</h1>
        <input className='flex justify-center' type='text' />
        <h1 className='flex justify-center'>Name:</h1>
        <input className='flex justify-center' type='text' />
        <div className='p-2 flex justify-evenly'>
          <button className='rounded-full bg-white px-2 py-1'>Cancel</button>
          <button className='rounded-full bg-white px-2 py-1'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterModal;
