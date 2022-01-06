import Event from "../components/Event";

function ArrayMap({
  mydata,
  registerEvent,
  editEvent,
  viewEvent,
  deleteEvent,
  dropValue,
  disable,
  /* chairSeat, */
}) {
  return (
    <div className="flex flex-wrap h-full px-2">
      {mydata.map((myEvents) => {
        return (
          <div key={myEvents.id} className="p-2">
            <div className="box-content w-52 overflow-x-auto h-48 filter shadow-inner drop-shadow-xl rounded-2xl bg-white">
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
                      className="bg-white border border-black rounded-md px-2 hover:bg-green-300"
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
                    className="bg-white border border-gray-00 rounded-md px-2 hover:shadow-xl hover:bg-gray-900 hover:text-white"
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
                    className="bg-white border border-black rounded-md px-2 hover:bg-red-600"
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
