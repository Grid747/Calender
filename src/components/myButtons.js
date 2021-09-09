import React from "react";

function MyButtons({ Clicked }) {
  return (
    <div>
      <button
        className="bg-transparent hover:bg-gray-900 text-black font-bold hover:text-white py-1 px-2 
        border hover:border-transparent rounded-full text-4xl"
        onClick={Clicked}
      >
        Add New Event
      </button>
    </div>
  );
}

export default MyButtons;
