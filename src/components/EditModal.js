import React from "react";

function EditModal({ visualState }) {
  return (
    <div className='flex py-4 border-2 border-gray-400 bg-blue-500 justify-center'>
      <form>
        <h1 className='flex justify-center'>Event Name:</h1>
        <input className='flex justify-center' type='text' />
        <h1 className='flex justify-center'>Event Date: </h1>
        <input className='flex justify-center' type='date' />
        <h1 className='flex justify-center'>Start Time:</h1>
        <input className='flex justify-center' type='time' />
        <h1 className='flex justify-center'>End Time: </h1>
        <input className='flex justify-center' type='time' />
        <h1 className='flex justify-center'># of Seats: </h1>
        <input className='flex justify-center' type='number' />
        <h1 className='flex justify-center'>Reoccuring: </h1>
        <input className='flex justify-center' type='text' />
        <div className='p-2 flex justify-evenly'>
          <button
            onClick={visualState}
            className='rounded-full bg-white px-2 py-1'
          >
            Cancel
          </button>
          <button className='rounded-full bg-white px-2 py-1'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default EditModal;
