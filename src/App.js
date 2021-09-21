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
  const [filterID, setFilterID] = useState(0);
  const [filterIndex, setFilterIndex] = useState(0);

  const deleteIDEvent = (id) => {
    const updatedEvents = [...allEvents].filter(
      (oneEvent) => oneEvent.id !== id
    );
    setallEvents(updatedEvents);
    console.log(updatedEvents);
  };

  /* const [editModalData, setEditModalData] = useState(""); */
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
  };

  const [editModal, setEditModal] = useState(false);
  const editIDEvent = (id) => {
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

  const [editModel, setEditModel] = useState(false);
  const changeEditModel = (e) => {
    e.preventDefault();
    setEditModel(!editModel);
  };

  const [registerModal, setRegisterModal] = useState(false);
  const changeRegisterModel = (e) => {
    e.preventDefault();
    setRegisterModal(!registerModal);
  };

  const registerIDEvent = (id) => {
    setRegisterModal(!registerModal);
    /*     const registeringEvent = allEvents.filter((oneEvent) => oneEvent.id === id);
    const indexOfEvent = allEvents.findIndex((oneEvent) => oneEvent.id === id); */

    setFilterID(id);
    const indexOfEvent = allEvents.findIndex((oneEvent) => oneEvent.id === id);
    setFilterIndex(indexOfEvent);

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

  const registerEvent = (myregisterEvent) => {
    console.log(myregisterEvent);
    console.log(filterID);
    console.log(filterIndex);
    console.log(allEvents[filterIndex]);

    /* setallEvents(allEvents);
    console.log(allEvents); */

    /* console.log("all events filter Index");
    console.log(allEvents[filterIndex].people);

    console.log("all events people");
    console.log(allEvents[filterIndex].people); */

    let giraffe = allEvents[filterIndex].people;
    /* console.log(giraffe); */

    /* let hipp0 = giraffe.push(myregisterEvent); */
    giraffe.push(myregisterEvent);
    /* console.log("hipp0");
    console.log(hipp0); */

    setFilterID("");
    setFilterIndex("");

    /* setallEvents(allEvents[filterIndex].people.push(myregisterEvent)); */

    /*     console.log("messing with dummy data")
    setallEvents([allEvents[filterIndex].people, newregisterEvent]); */

    /*     console.log("dummyData after")
    console.log(allEvents[filterIndex].people); */

    /* array1.push(...array2)
    [].concat(array1, array2)
    [...array1, ...array2] */

    /* console.log("before")
    console.log(allEvents[filterIndex].people)
    console.log("during")
    console.log(setallEvents(allEvents[filterIndex].people)) */

    /* [...allEvents, myNewEvent] */
    /* setallEvents(allEvents[filterIndex].people.push(...newregisterEvent)); */

    /* console.log('after');
    console.log(allEvents[filterIndex].people) */

    /* allEvents[filterIndex].people += myregisterEvent; */
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
          <div>
            {editModal && (
              <EditModal onAdd={editEvent} closeBtn={changeEditModel} />
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
