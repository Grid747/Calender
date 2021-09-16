import Event from "../components/Event";
/* import { useState } from "react"; */

const ArrayMap = ({ mydata, editEvent, deleteEvent }) => {
  return (
    <div className="flex flex-wrap h-full w-9/12 lg:w-8/12  px-2">
      {mydata.map((myEvents) => {
        return (
          <div key={myEvents.id}>
            <Event
              key={myEvents.id}
              name={myEvents.name}
              eventDate={myEvents.date}
              startTime={myEvents.start}
              endTime={myEvents.end}
              seatNum={myEvents.seats}
              reoccuring={myEvents.recurring}
            />
            <button
              className="bg-gray-400 rounded-sm px-2"
              onClick={() => deleteEvent(myEvents.id)}
            >
              Delete
            </button>
            <button
              className="bg-gray-400 rounded-sm px-2"
              onClick={() => editEvent(myEvents.id)}
            >
              Edit
            </button>
          </div>
        );
      })}
      <br />
    </div>
  );
};

export default ArrayMap;
