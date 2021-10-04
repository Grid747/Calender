import Event from "../components/Event";
/* import myEvents from "./Data"; */

function ArrayMap({
  mydata,
  registerEvent,
  editEvent,
  viewEvent,
  deleteEvent,
  dropValue,
  disable,
  chairSeat,
}) {
  return (
    <div className="flex flex-wrap h-full px-2">
      {mydata.map((myEvents) => {
        return (
          <div key={myEvents.id} className="p-2">
            <div className="box-content border-2 border-gray-900 w-60 overflow-x-auto h-52 hover:shadow-2xl rounded-lg bg-blue-300">
              <Event
                key={myEvents.id}
                name={myEvents.name}
                eventDate={myEvents.date}
                startTime={myEvents.start}
                endTime={myEvents.end}
                seatNum={myEvents.seats}
                reoccuring={myEvents.reoccuring}
              />
              {!dropValue ? (
                <div className="flex justify-evenly">
                  {myEvents.regBtn ? (
                    <button
                      id="registerBtn"
                      disabled={disable}
                      className="bg-white border border-gray-900 rounded-md px-2 hover:shadow-xl hover:bg-gray-900 hover:text-white"
                      onClick={() => registerEvent(myEvents.id)}
                    >
                      Register
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                <div className="flex justify-evenly">
                  <button
                    id="editBtn"
                    disabled={disable}
                    className="bg-white border border-gray-900 rounded-md px-2 hover:shadow-xl hover:bg-gray-900 hover:text-white"
                    onClick={() => editEvent(myEvents.id)}
                  >
                    Edit
                  </button>
                  <button
                    id="viewBtn"
                    disabled={disable}
                    className="bg-white border border-gray-900 rounded-md px-2 hover:shadow-xl hover:bg-gray-900 hover:text-white"
                    onClick={() => viewEvent(myEvents.id)}
                  >
                    View
                  </button>
                  <button
                    id="editbtn"
                    disabled={disable}
                    className="bg-white border border-gray-900 rounded-md px-2 hover:shadow-xl hover:bg-gray-900 hover:text-white"
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
}

export default ArrayMap;
