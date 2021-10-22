import Event from "../components/Event";
import ProgressBar from "../components/progressBar";

function ArrayMap({
  mydata,
  registerEvent,
  editEvent,
  viewEvent,
  deleteEvent,
  dropValue,
  disable,
  /* chairSeat, */
  totalSeats,
  seatsLeft,
}) {

  console.log(totalSeats)
  console.log(seatsLeft)
  const precentage = (total, left) => {
    let value = left / total
    return (value * 100)
  }
  return (
    <div className="flex flex-wrap h-full px-2">
      {mydata.map((mydata) => {
        return (
          <div key={mydata.id} className="p-6 px-8">
            <div className="box-content ring-4 ring-blue-600 w-52 overflow-x-auto h-48 filter drop-shadow-5xl rounded-lg bg-blue-300">
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
                      className="bg-white border border-gray-900 rounded-md px-2 hover:shadow-xl hover:bg-gray-900 hover:text-white"
                      onClick={() => registerEvent(mydata.id)}
                    >
                      Register
                    </button>
                  ) : (
                    //code button to unregister someone and add seat back
                    <button
                      id="unregisterBtn"
                      className="bg-gray-300 border border-gray-900 rounded-md px-2 hover:shadow-xl hover:bg-white hover:text-gray-900"
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
                    className="bg-white border border-gray-900 rounded-md px-2 hover:shadow-xl hover:bg-gray-900 hover:text-white"
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
              <ProgressBar
              bgcolor={'green'}
              completed={precentage(10, 1)}
              //build out a variable for number take total seats - seats left / 100 
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ArrayMap;
