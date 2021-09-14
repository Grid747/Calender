import Event from "../components/Event";

/* you do array map on the dummy data you already have and from there you "Task" should be able to
    the template that is going to be filled everytime look at dataBox for the 'Task' */

const ArrayMap = ({ mydata }) => {
  return (
    <div>
      {mydata.map((myEvents) => {
        return (
          <Event
            key={myEvents.id}
            name={myEvents.Name}
            eventDate={myEvents.theDate}
            startTime={myEvents.start}
            endTime={myEvents.end}
            seatNum={myEvents.seats}
            reoccuring={myEvents.recurring}
          />
        );
      })}
      <br />
    </div>
  );
};

export default ArrayMap;
