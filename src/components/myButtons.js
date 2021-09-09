import React from "react";

function MyButtons({ Clicked }) {
  return (
    <div className='grid justify-center'>
      <button
        className='hover:bg-gray-900 text-black font-bold hover:text-white py-1 px-2 
        border hover:border-transparent rounded-full text-2xl'
        onClick={Clicked}
      >
        Add New Event
      </button>
    </div>
  );
}

export default MyButtons;
