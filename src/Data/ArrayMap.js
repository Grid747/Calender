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
      {mydata.map((mydata) => {
        return (
          <div key={mydata.id} className="p-6 px-8">
            <div className="box-content w-52 overflow-x-auto h-48 filter shadow-inner drop-shadow-xl rounded-2xl bg-white">
              <Event
                key={mydata.id}
                name={mydata.name}
                eventDate={mydata.date}
                startTime={mydata.start}
                endTime={mydata.end}
                seatNum={mydata.seats}
                reoccuring={mydata.reoccuring}
              />
              {!dropValue ? (
                <div className="flex justify-evenly">
                  {mydata.regBtn ? (
                    <button
                      id="registerBtn"
                      disabled={disable}
                      className="bg-white border border-black rounded-md px-2 hover:bg-green-300"
                      onClick={() => registerEvent(mydata.id)}
                    >
                      Register
                    </button>
                  ) : (
                    //code button to unregister someone and add seat back
                    <button
                      id="unregisterBtn"
                      className="bg-white border border-black rounded-md px-2 hover:bg-red-600"
                    >
                      Unregister
                    </button>
                  )}
                </div>
              ) : (
                <div className="flex justify-evenly">
                  <button
                    id="editBtn"
                    disabled={disable}
                    className="bg-white border border-gray-00 rounded-md px-2 hover:shadow-xl hover:bg-gray-900 hover:text-white"
                    onClick={() => editEvent(mydata.id)}
                  >
                    Edit
                  </button>
                  <button
                    id="viewBtn"
                    disabled={disable}
                    className="bg-white border border-gray-900 rounded-md px-2 hover:shadow-xl hover:bg-gray-900 hover:text-white"
                    onClick={() => viewEvent(mydata.id)}
                  >
                    View
                  </button>
                  <button
                    id="editbtn"
                    disabled={disable}
                    className="bg-white border border-gray-900 rounded-md px-2 hover:shadow-xl hover:bg-gray-900 hover:text-white"
                    onClick={() => deleteEvent(mydata.id)}
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
