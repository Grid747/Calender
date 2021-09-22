import "./App.css";
import { useState } from "react";
import DropDown from "./components/dropDown";
import ArrayMap from "./Data/ArrayMap";
import Data from "./Data/Data";
import EditModal from "./components/EditModal";
import PackageButton from "./components/PcsPackageBtn";
import InstrucButton from "./components/InstrucBtn";
import ViewModal from "./components/ViewModal";
import RegisterModal from "./components/RegisterModal";

function App() {
  const [allEvents, setallEvents] = useState(Data);

  const addEvent = (myNewEvent) => {
    setallEvents([...allEvents, myNewEvent]);
  };

  const [loginValue, setloginValue] = useState(false);
  const loginChange = () => {
    setloginValue(!loginValue);
  };

  const [filterID, setFilterID] = useState(0);
  const [filterIndex, setFilterIndex] = useState(0);

  const deleteIDEvent = (id) => {
    const updatedEvents = [...allEvents].filter(
      (oneEvent) => oneEvent.id !== id
    );
    setallEvents(updatedEvents);
    console.log(updatedEvents);
  };

  const editEvent = (editedEvent) => {
    const id = filterID;
    const editingEvent = allEvents.filter((oneEvent) => oneEvent.id === id);
    const people = editingEvent[0].people;
    let hipp0 = {
      id,
      ...editedEvent,
      people,
    };
    setallEvents(
      allEvents.map((item) => (item.id !== hipp0.id ? item : hipp0))
    );
    setFilterID("");
    setEditModal(!editModal)
    setDisable(!disable)
  };
  const [disable, setDisable] = useState(false)
  const [editModal, setEditModal] = useState(false);
  const editIDEvent = (id) => {
    setEditModal(!editModal);
    setDisable(!disable)
    setFilterID(id);
    const indexOfEvent = allEvents.findIndex((oneEvent) => oneEvent.id === id);
    setFilterIndex(indexOfEvent)
  };

  const [viewModal, setViewModal] = useState(false);
  const changeViewModel = (e) => {
    e.preventDefault();
    setViewModal(!viewModal);
    setDisable(!disable)
  };


  

  const [viewObject, setViewObject] = useState();
  const viewIDEvent = (id) => {
    setViewModal(!viewModal);
    setDisable(!disable)
    const viewingEvent = allEvents.filter((oneEvent) => oneEvent.id === id);

    let peopleArr = viewingEvent[0].people;

    function peopleArrFor() {
      let myArr = [];
      for (let i = 0; i < peopleArr.length; i++) {
        console.log(peopleArr[i]);
        myArr +=
          peopleArr[i].name +
          " " +
          peopleArr[i].rank +
          " " +
          peopleArr[i].email +
          " " +
          peopleArr[i].phoneNumber +
          "; \r\n";
      }
      return myArr;
    }

    const myViewObject = {
      name: viewingEvent[0].name,
      date: viewingEvent[0].date,
      start: viewingEvent[0].start,
      end: viewingEvent[0].end,
      seats: viewingEvent[0].seats,
      reocurring: viewingEvent[0].reoccuring,
      people: peopleArrFor(),
    };

    setViewObject(myViewObject);
  };

  const changeEditModel = (e) => {
    e.preventDefault();
    setEditModal(!editModal);
    setDisable(!disable)
  };

  const [registerModal, setRegisterModal] = useState(false);
  const changeRegisterModel = (e) => {
    e.preventDefault();
    setRegisterModal(!registerModal);
    setDisable(!disable)
  };

  const registerIDEvent = (id) => {
    setRegisterModal(!registerModal);

    setFilterID(id);
    setDisable(!disable)
    const indexOfEvent = allEvents.findIndex((oneEvent) => oneEvent.id === id);
    setFilterIndex(indexOfEvent);
  };

  const registerEvent = (myregisterEvent) => {
    console.log(myregisterEvent);
    console.log(filterID);
    console.log(filterIndex);
    console.log(allEvents[filterIndex]);

    let giraffe = allEvents[filterIndex].people;
    giraffe.push(myregisterEvent);
    allEvents[filterIndex].seats -= 1;
    /* console.log(allEvents[filterIndex].seats) */
    setFilterID("");
    setFilterIndex("");
    setDisable(!disable);
    setRegisterModal(!registerModal);

  };
  
  /*const disableScreen = () => {
    var buttonDiv = document.getElementById('buttons');
    buttonDiv.className += "bg-transparent";
    document.body.appendChild(buttonDiv);
  };*/
  //console.log(disableScreen)
  /*const disableRegisterBtn = () => {
    disableScreen("registerBtn");
    console.log(disableRegisterBtn())
  }*/
  //document.getElementById("registerBtn").onclick = disableScreen

  return (
    <div className="flex flex-col justify-center">
      <br />
      <div className="flex justify-center text-3xl">Registration Site</div>
      <div className="flex justify-end w-full">
        <DropDown
          onAdd={addEvent}
          dropValue={loginValue}
          newDropValue={loginChange}
        />
      </div>
      <div className="flex flex-wrap justify-start w-full h-full">
        <ArrayMap
          mydata={allEvents}
          deleteEvent={deleteIDEvent}
          editEvent={editIDEvent}
          viewEvent={viewIDEvent}
          registerEvent={registerIDEvent}
          dropValue={loginValue}
          disable={disable}
        />
        <div className="flex flex-col">
          <PackageButton label="PCS Package" />
          <InstrucButton label="Instructions" />
          <div>
            {editModal && (
              <EditModal 
                onAdd={editEvent} 
                closeBtn={changeEditModel} 
              />
            )}
          </div>
          <div>
            {viewModal && (
              <ViewModal
                name={viewObject.name}
                date={viewObject.date}
                start={viewObject.start}
                end={viewObject.end}
                seats={viewObject.seats}
                reoccuring={viewObject.reocurring}
                people={viewObject.people}
                closeBtn={changeViewModel}
              />
            )}
          </div>
          <div>
            {registerModal && (
              <RegisterModal
                closebtn={changeRegisterModel}
                subOn={registerEvent}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
