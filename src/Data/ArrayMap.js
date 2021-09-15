import Event from "../components/Event";

/* you do array map on the dummy data you already have and from there you "Task" should be able to
    the template that is going to be filled everytime look at dataBox for the 'Task' */

const ArrayMap = ({ mydata, editMe }) => {
  return (
    <div className='flex flex-wrap h-full w-8/12 px-2'>
      {myEvents.map((myEvents) => {
        return (
          <Event
            key={myEvents.id}
            name={myEvents.name}
            eventDate={myEvents.date}
            startTime={myEvents.start}
            endTime={myEvents.end}
            seatNum={myEvents.seats}
            reoccuring={myEvents.recurring}
            editMe={editMe}
          />
        );
      })}
      <br />
    </div>
  );
};

export default ArrayMap;
