import "./App.css";
import { useState } from "react";
import DropDown from "./components/dropDown";
import ArrayMap from "./Data/ArrayMap";
import Data from "./Data/Data";
import EditModal from "./components/EditModal";
import PackageButton from "./components/PcsPackageBtn";
import InstrucButton from "./components/InstrucBtn";

/* https://www.code-boost.com/video/ultimate-react-todo-list/ <-- how I got Update and delete */

function App() {
  const [allEvents, setallEvents] = useState(Data);

  const addEvent = (myNewEvent) => {
    setallEvents([...allEvents, myNewEvent]);
  };

  const deleteIDEvent = (id) => {
    const updatedEvents = [...allEvents].filter(
      (oneEvent) => oneEvent.id !== id
    );
    setallEvents(updatedEvents);
    console.log(updatedEvents);
  };

  const [editModal, setEditModal] = useState(false);
  const editIDEvent = (id) => {
    setEditModal(!editModal);
    const editingEvent = allEvents.filter((oneEvent) => oneEvent.id === id);

    console.log(editingEvent[0].name);
    console.log(editingEvent[0].date);
    console.log(editingEvent[0].start);
    console.log(editingEvent[0].end);
    console.log(editingEvent[0].seats);
    console.log(editingEvent[0].reoccuring);
    console.log(editingEvent[0].people);
  };

  return (
    <div className="flex flex-col justify-center">
      <br />
      <div className="flex justify-center text-3xl">Registration Site</div>
      <div className="flex justify-end w-full">
        <DropDown onAdd={addEvent} />
      </div>
      <div className="flex flex-wrap justify-start w-full h-full">
        <ArrayMap
          mydata={allEvents}
          deleteEvent={deleteIDEvent}
          editEvent={editIDEvent}
        />
        <div className="flex flex-col">
          <PackageButton label="PCS Package" />
          <InstrucButton label="Instructions" />
        </div>
      </div>
      <div>{editModal && <EditModal />}</div>
    </div>
  );
}

export default App;
