import "./App.css";
import { useState } from "react";
/* import MyButtons from "./components/myButtons"; */
import DropDown from "./components/dropDown";
import ArrayMap from "./Data/ArrayMap";
import Data from "./Data/Data";
import EditModal from "./components/EditModal";
/* import Modal from "./components/Modal"; */

function App() {
  const [allEvents, setallEvents] = useState(Data);
  const addEvent = (myNewEvent) => {
    const id = Math.floor(Math.random() * 100000000) + 1;
    const newEvent = { id, ...myNewEvent };
    setallEvents([...allEvents, newEvent]);
  };

  const [editModal, setEditModal] = useState(false);
  const changeEditModal = () => {
    setEditModal(!editModal);
    console.log(ArrayMap.mydata);
  };

  return (
    <div className="flex flex-col justify-center">
      <br />
      <div className="flex justify-center text-3xl">Registration Site</div>
      <div className="flex justify-end w-full">
        <DropDown onAdd={addEvent} />
      </div>
      <div className="flex">
        {/*         <DummyBox /> */}
        <ArrayMap mydata={allEvents} editMe={changeEditModal} />
      </div>
      <div>{editModal && <EditModal />}</div>
    </div>
  );
}

export default App;
