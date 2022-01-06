import React from "react";

function ViewModal({
  name,
  date,
  start,
  end,
  seats,
  reoccuring,
  people,
  closeBtn,
}) {
  return (
    <div className="fixed pin z-50 justify-center overflow-auto bg-gray-400 bg-opacity-60 flex w-full h-full">
      <div>
      <div className="flex flex-col py-4 h-auto  border-2 w-80 border-gray-900 bg-gray-200 justify-left">
      <h1 className="pl-10 pb-1 flex justify-left font-bold">Event Name: <p className='pl-1 font-normal type=text'>{name}</p> 
      </h1> 
      <h1 className="pl-10 pb-1 flex justify-left font-bold">Event Date: <p className='pl-1 font-normal type=text'>{date}</p> 
      </h1>
      <h1 className="pl-10 pb-1 flex justify-left font-bold">Start Time: <p className='pl-1 font-normal type=text'>{start}</p> 
      </h1>
      <h1 className="pl-10 pb-1 flex justify-left font-bold">End Time: <p className='pl-1 font-normal type=text'>{end}</p> 
      </h1>
      <h1 className="pl-10 pb-1 flex justify-left font-bold">Number of Seats: <p className='pl-1 font-normal type=text'>{seats}</p> 
      </h1>
      <h1 className="pl-10 pb-1 flex justify-left font-bold">Reoccuring: <p className='pl-1 font-normal'>{reoccuring}</p> </h1>
      <h1 className="pl-10 pb-1 flex justify-left font-bold pt-12">People: <p className='pl-1 font-normal type=text'>{people}</p> </h1>
      <div className="p-2 flex justify-evenly">
        <button onClick={closeBtn} className="rounded px-3 border border-gray-900 bg-white h-10 w-20 hover:bg-red-600">
            Close
            </button>
      </div>
    </div>
    </div>
    </div>
  );
}

export default ViewModal;
