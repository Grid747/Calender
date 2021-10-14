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
}) {
  return (
    <div className="flex flex-wrap h-full px-2">
      {mydata.map((mydata) => {
        return (
          <div key={mydata.id} className="p-6 px-12">
            <div className="box-content ring-4 ring-blue-600 w-60 overflow-x-auto h-52 filter drop-shadow-5xl rounded-lg bg-blue-300">
              <ProgressBar
              bgcolor={"black"}
              completed={60}
              /* const testData = [
                { bgcolor: "#6a1b9a", completed: 60 },
                { bgcolor: "#00695c", completed: 30 },
                { bgcolor: "#ef6c00", completed: 53 },
              ];
              
              function App() {
                return (
                  <div className="App">
                    {testData.map((item, idx) => (
                      <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                  </div>
                );
              }  */
              />
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
                    ""
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
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ArrayMap;
