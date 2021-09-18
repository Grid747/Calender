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

/* https://www.code-boost.com/video/ultimate-react-todo-list/ <-- how I got Update and delete */

function App() {
  const [allEvents, setallEvents] = useState(Data);
  const addEvent = (myNewEvent) => {
    setallEvents([...allEvents, myNewEvent]);
  };

  const [loginValue, setloginValue] = useState(false);
  const loginChange = () => {
    setloginValue(!loginValue);
  };

  const deleteIDEvent = (id) => {
    const updatedEvents = [...allEvents].filter(
      (oneEvent) => oneEvent.id !== id
    );
    setallEvents(updatedEvents);
    console.log(updatedEvents);
  };

  const [editModalData, setEditModalData] = useState();
  const editEvent = (editedEvent) => {
    const id = filterID;
    const editingEvent = allEvents.filter((oneEvent) => oneEvent.id === id);
    const people = editingEvent[0].people;
    setEditModalData({
      id,
      ...editedEvent,
      people,
    }); /* sets all the data  */ /* get the index of where it is at */ /* <- should work but doesn't */

    console.log("editModalData");
    console.log(editModalData);

    console.log("allEvents[filterIndex]");
    console.log(allEvents[filterIndex]);
    /* setallEvents((allEvent[filterIndex] = editModalData)); */

    /* console.log(
      allEvents[filterIndex]
    ); */
    /*     setallEvents((allEvents[filterIndex] = editModalData)); */

    /* The last way to be able to do this would be to pop off the data for specific id 
    then add this one at the end */

    /* below is the method for testing if you deleted the data then readded the data */
    /*     const updatedEvents = [...allEvents].filter(
      (oneEvent) => oneEvent.id !== id
    );
    setallEvents([updatedEvents, editModalData]); */
  };

  const [editModal, setEditModal] = useState(false);
  const [filterID, setFilterID] = useState(0);
  const [filterIndex, setFilterIndex] = useState(0);
  const editIDEvent = (id, name) => {
    setEditModal(!editModal);
    setFilterID(id);
    const indexOfEvent = allEvents.findIndex((oneEvent) => oneEvent.id === id);
    setFilterIndex(indexOfEvent);
  };

  const [viewModal, setViewModal] = useState(false);
  const changeViewModel = (e) => {
    e.preventDefault();
    setViewModal(!viewModal);
  };
  const [viewObject, setViewObject] = useState();
  const viewIDEvent = (id) => {
    setViewModal(!viewModal);
    const viewingEvent = allEvents.filter((oneEvent) => oneEvent.id === id);
    /* to change anything setallEvents(AllEvents[indexOfEvent].name = editingEvent[0].name)
    I rather just create an object and do: setallEvent(AllEvents[indexOfEvent] = myobject) */

    let peopleArr = viewingEvent[0].people;

    /* const showPeopleArr =  */

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

    /* peopleArr.forEach((arrayItem) => {
      console.log(arrayItem);
      return arrayItem;
    }); */

    const myViewObject = {
      name: viewingEvent[0].name,
      date: viewingEvent[0].date,
      start: viewingEvent[0].start,
      end: viewingEvent[0].end,
      seats: viewingEvent[0].seats,
      reocurring: viewingEvent[0].reoccuring,
      people: peopleArrFor(),

      /* viewingEvent[0].people[0].name +
        ", " +
        viewingEvent[0].people[0].rank +
        ", " +
        viewingEvent[0].people[0].email +
        ", " +
        viewingEvent[0].people[0].phoneNumber, */
    };

    setViewObject(myViewObject);

    /* console.log("ViewObject ");
    console.log(viewObject); */

    /* can update by removing then readding but then need to do the filter feature */
  };

  const [registerModal, setRegisterModal] = useState(false);
  const registerIDEvent = (id) => {
    setRegisterModal(!registerModal);
    const registeringEvent = allEvents.filter((oneEvent) => oneEvent.id === id);
    const indexOfEvent = allEvents.findIndex((oneEvent) => oneEvent.id === id);
    console.log(indexOfEvent + "\n\n\n\n");
    /* to change anything setallEvents(AllEvents[indexOfEvent].name = editingEvent[0].name)
    I rather just create an object and do: setallEvent(AllEvents[indexOfEvent] = myobject) */

    /* console.log(registeringEvent[0].name);
    console.log(registeringEvent[0].date);
    console.log(registeringEvent[0].start);
    console.log(registeringEvent[0].end);
    console.log(registeringEvent[0].seats);
    console.log(registeringEvent[0].reoccuring);
    console.log(registeringEvent[0].people) */

    /* can update by removing then readding but then need to do the filter feature */
  };

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
        />
        <div className="flex flex-col">
          <PackageButton label="PCS Package" />
          <InstrucButton label="Instructions" />
          <div>{editModal && <EditModal onAdd={editEvent} />}</div>
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
          <div>{registerModal && <RegisterModal />}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
