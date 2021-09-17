import React from "react";

function ViewModal() {
  return (
    <div className='flex py-4 border-2 border-gray-400 bg-blue-500 justify-center'>
      <form>
        <h1 className='flex justify-center'>Event Name:</h1>
        <p className='flex justify-center' type='text'>
          {}
        </p>
        <h1 className='flex justify-center'>Event Date: </h1>
        <p className='flex justify-center' type='date'>
          {}
        </p>
        <h1 className='flex justify-center'>Start Time:</h1>
        <p className='flex justify-center' type='time'>
          {}
        </p>
        <h1 className='flex justify-center'>End Time: </h1>
        <p className='flex justify-center' type='time'>
          {}
        </p>
        <h1 className='flex justify-center'># of Seats: </h1>
        <p className='flex justify-center' type='number'>
          {}
        </p>
        <h1 className='flex justify-center'>Reoccuring: </h1>
        <p className='flex justify-center' type='text'>
          {}
        </p>
        <div className='p-2 flex justify-evenly'>
          <button className='rounded-full bg-white px-2 py-1'>Close</button>
        </div>
      </form>
    </div>
  );
}

export default ViewModal;
