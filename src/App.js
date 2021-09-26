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
    console.log(myNewEvent);
    if (
      (myNewEvent.name === "") |
      (myNewEvent.date === "") |
      (myNewEvent.start === "") |
      (myNewEvent.end === "") |
      (myNewEvent.seats === 0) |
      (myNewEvent.seats === "") |
      (myNewEvent.recurring === "")
    ) {
      return window.alert("One or more inputs were empty. Please try again");
    }
    console.log("hello the banana was pink in the blueberry forest");
    setallEvents([...allEvents, myNewEvent]);
    window.alert("You have added a new event.");
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
    window.alert("You are now in delete mode.");
  };

  const [disable, setDisable] = useState(false);
  const [editModal, setEditModal] = useState(false);

  /************************************************************************************** */

  const [name, setName] = useState("");
  const changeName = (e) => setName(e.target.value);

  const [date, setDate] = useState("");
  const changeDate = (e) => setDate(e.target.value);

  const [start, setStart] = useState("");
  const changeStart = (e) => setStart(e.target.value);

  const [end, setEnd] = useState("");
  const changeEnd = (e) => setEnd(e.target.value);

  const [seats, setSeats] = useState(0);
  const changeSeats = (e) => setSeats(e.target.value);

  const [recurring, setRecurring] = useState("");
  const changeRecur = (e) => setRecurring(e.target.value);

  const [people, setPeople] = useState([]);

  /* ****************************** */

  const checkingChecked = (index, isItChecked) => {
    console.log(index);
    console.log(isItChecked);

    let myNewPeopleCheckMarked = [...people];
    console.log(myNewPeopleCheckMarked);
    console.log(myNewPeopleCheckMarked[index]);
    console.log(myNewPeopleCheckMarked[index].ischecked);
    myNewPeopleCheckMarked[index].ischecked =
      !myNewPeopleCheckMarked[index].ischecked;

    console.log("operation done");
    console.log(myNewPeopleCheckMarked);
    setPeople(myNewPeopleCheckMarked);
  };

  /************************ */

  const editIDEvent = (id) => {
    setEditModal(!editModal);
    setDisable(!disable);
    setFilterID(id);
    const indexOfEvent = allEvents.findIndex((oneEvent) => oneEvent.id === id);
    setFilterIndex(indexOfEvent);
    setName(allEvents[indexOfEvent].name);
    setDate(allEvents[indexOfEvent].date);
    setStart(allEvents[indexOfEvent].start);
    setEnd(allEvents[indexOfEvent].end);
    setSeats(allEvents[indexOfEvent].seats);
    setRecurring(allEvents[indexOfEvent].reoccuring);
    console.log("All the people");
    console.log(allEvents[indexOfEvent].people);
    setPeople(allEvents[indexOfEvent].people);
  };

  /************************** */

  const editModalSubmit = (e) => {
    e.preventDefault();
    console.log("filter Index then ID in that order");
    console.log(filterIndex);
    console.log(filterID);

    console.log("stuff for adding");
    console.log(name);
    console.log(date);
    console.log(start);
    console.log(end);
    console.log(seats);
    console.log(recurring);

    console.log("people before filter operation");
    console.log(people);
    console.log("doing filter operation");

    const updatedPeople = [...people].filter(
      (falsePeople) => falsePeople.ischecked === true
    );
    console.log("people length");
    console.log(people.length);
    console.log("updated people length");
    console.log(updatedPeople.length);

    let adding2Seats = people.length - updatedPeople.length;
    console.log("number of seats being added");
    console.log(adding2Seats);
    console.log(typeof adding2Seats);

    if (
      (name === "") |
      (date === "") |
      (start === "") |
      (end === "") |
      // eslint-disable-next-line
      (seats == 0 && adding2Seats == 0) |
      (seats === "") |
      (recurring === "")
    ) {
      return window.alert("Error one of the inputs is missing its value");
    }

    const id = filterID;
    let hipp0 = {
      id,
      name,
      date,
      start,
      end,
      seats: parseInt(seats) + adding2Seats,
      recurring,
      people: updatedPeople,
    };
    setallEvents(
      allEvents.map((item) => (item.id !== hipp0.id ? item : hipp0))
    );
    setFilterID("");
    setName("");
    setDate("");
    setStart("");
    setEnd("");
    setSeats(0);
    setRecurring("");
    setPeople([]);
    setEditModal(!editModal);
    setDisable(!disable);

    window.alert("You have now edited this event.");
  };

  /***************************************************************************************** */

  const [viewModal, setViewModal] = useState(false);
  const changeViewModel = (e) => {
    e.preventDefault();
    setViewModal(!viewModal);
    setDisable(!disable);
  };

  const [viewObject, setViewObject] = useState();
  const viewIDEvent = (id) => {
    setViewModal(!viewModal);
    setDisable(!disable);
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
    setDisable(!disable);
  };

  const [registerModal, setRegisterModal] = useState(false);
  const changeRegisterModel = (e) => {
    e.preventDefault();
    setRegisterModal(!registerModal);
    setDisable(!disable);
  };

  const registerIDEvent = (id) => {
    setRegisterModal(!registerModal);

    setFilterID(id);
    setDisable(!disable);
    const indexOfEvent = allEvents.findIndex((oneEvent) => oneEvent.id === id);
    setFilterIndex(indexOfEvent);
    console.log("AllEvents");
    console.log(allEvents);
  };

  const registerEvent = (myregisterEvent) => {
    console.log("myregisterEvent");
    console.log(myregisterEvent);
    console.log("filter ID and Filter Index in that order");
    console.log(filterID);
    console.log(filterIndex);

    console.log(allEvents);
    console.log("allEvents");

    console.log("allEvents[filterIndex]");
    console.log(allEvents[filterIndex]);

    if (
      (myregisterEvent.rank === "") |
      (myregisterEvent.name === "") |
      (myregisterEvent.email === "") |
      (myregisterEvent.phoneNumber === "")
    ) {
      return window.alert("You are missing one or more of the inputs");
    }

    window.alert("You are now registered for this event.");
    let giraffe = allEvents[filterIndex].people;
    giraffe.push(myregisterEvent);
    console.log(giraffe);
    allEvents[filterIndex].seats -= 1;
    setFilterID("");
    setFilterIndex("");
    setDisable(!disable);
    setRegisterModal(!registerModal);
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
          disable={disable}
        />
        <div className="flex flex-col">
          <PackageButton label="PCS Package" />
          <InstrucButton label="Instructions" />
          <div>
            {editModal && (
              <EditModal
                /* onAdd={editEvent}  */
                name={name}
                changeName={changeName}
                date={date}
                changeDate={changeDate}
                start={start}
                changeStart={changeStart}
                end={end}
                changeEnd={changeEnd}
                seats={seats}
                changeSeats={changeSeats}
                recurring={recurring}
                changeRecur={changeRecur}
                peopleData={people}
                checkingChecked={checkingChecked}
                closeBtn={changeEditModel}
                formSubmit={editModalSubmit}
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
