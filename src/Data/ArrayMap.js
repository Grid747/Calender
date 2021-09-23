import Event from "../components/Event";
/* import { useState } from "react"; */

function ArrayMap ({
  mydata,
  registerEvent,
  editEvent,
  viewEvent,
  deleteEvent,
  dropValue,
  disable,
}) {
  return (
    <div className='flex flex-wrap h-full w-9/12 lg:w-8/12  px-2'>
      {mydata.map((myEvents) => {
        return (
          <div key={myEvents.id} className='p-4 hover:shadow-2xl hover:bg-gray-50'>
            <div className='box-content border-8 border-gray-400 p-2 w-60 overflow-x-auto h-52'>
              <Event
                key={myEvents.id}
                name={myEvents.name}
                eventDate={myEvents.date}
                startTime={myEvents.start}
                endTime={myEvents.end}
                seatNum={myEvents.seats}
                reoccuring={myEvents.recurring}
              />
              {!dropValue ? (
                <div className='flex justify-evenly'>
                  <button
                    id="registerBtn"
                    disabled={disable}
                    className='bg-gray-400 rounded-sm px-2 hover:shadow-xl'
                    onClick={() => registerEvent(myEvents.id)}
                  >
                    Register
                  </button>
                </div>
              ) : (
                <div className='flex justify-evenly'>
                  <button
                    id="editBtn"
                    disabled={disable}
                    className='bg-gray-400 rounded-sm px-2 hover:shadow-xl'
                    onClick={() => editEvent(myEvents.id)}
                  >
                    Edit
                  </button>
                  <button
                    id="viewBtn"
                    disabled={disable}
                    className='bg-gray-400 rounded-sm px-2 hover:shadow-xl'
                    onClick={() => viewEvent(myEvents.id)}
                  >
                    View
                  </button>
                  <button
                    disabled={disable}
                    className='bg-gray-400 rounded-sm px-2 hover:shadow-xl'
                    onClick={() => deleteEvent(myEvents.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArrayMap;
