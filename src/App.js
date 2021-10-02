import "./App.css";
import { useState } from "react";
import DropDown from "./components/dropDown";
import ArrayMap from "./Data/ArrayMap";
import Data from "./Data/Data";
import EditModal from "./components/EditModal";
//import PackageButton from "./components/PcsPackageBtn";
//import InstrucButton from "./components/InstrucBtn";
import ViewModal from "./components/ViewModal";
import RegisterModal from "./components/RegisterModal";
//import ModelOpener from "./components/ModelOpener";
//import Modal from "./components/Modal";

function App() {
  const [allEvents, setallEvents] = useState(Data);

  const addEvent = (myNewEvent) => {
    if (
      (myNewEvent.name === "") |
      (myNewEvent.date === "") |
      (myNewEvent.start === "") |
      (myNewEvent.end === "") |
      (myNewEvent.seats === 0) |
      (myNewEvent.seats === "") |
      (myNewEvent.reoccuring === "")
    ) {
      return window.alert("One or more inputs were empty. Please try again");
    }
    

    console.log("before the If statement")
    if (myNewEvent.reoccuring === "No") {
      console.log("test")
      console.log(myNewEvent.reoccuring)
      console.log("You picked no reoccurence.");
      const id = Math.floor(Math.random() * 100000000) + 1;
      myNewEvent.id = id;
      setallEvents([...allEvents, myNewEvent])
    } else if (myNewEvent.reoccuring === "Weekly") {
      console.log("You picked Weekly");
      console.log("before dateinput");

      let uniqueId = [];

      for (let i = 0; i < 12; i++) {
        const id = Math.floor(Math.random() * 100000000) + 1;
        console.log(id);
        uniqueId[i] = id;
      }
      console.log(uniqueId);

      let dateinput = new Date(myNewEvent.date.replace(/-/g, "/"));
      let uniqueDate = [];
      for (let i = 0; i < 12; i++) {
        let specialDate = new Date(dateinput.setDate(dateinput.getDate() + 7));
        let dd = String(specialDate.getDate()).padStart(2, "0");
        let mm = String(specialDate.getMonth()).padStart(2, "0");
        let yyyy = specialDate.getFullYear();
        let specialDateString = yyyy + "-" + mm + "-" + dd;
        uniqueDate[i] = specialDateString;
      }
      console.log(uniqueDate);

      let repeatedArr = [];
      for (let i = 0; i < 12; i++) {
        repeatedArr[i] = myNewEvent;
      }
      console.log(repeatedArr);

      console.log("finale");
      let finalrepeatedArr = JSON.parse(JSON.stringify(repeatedArr));

      for (let i = 0; i < 12; i++) {
        finalrepeatedArr[i].id = uniqueId[i];
        finalrepeatedArr[i].date = uniqueDate[i];
      }
      console.log(finalrepeatedArr);

      console.log("finale finale");
      let deepAllEvents = JSON.parse(JSON.stringify(allEvents));

      let finalFinalFinalArr = [].concat(deepAllEvents, finalrepeatedArr);
      console.log(finalFinalFinalArr);

      setallEvents(finalFinalFinalArr);
    }

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
    window.alert("You are now deleting this event.");
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

  const [reoccuring, setRecurring] = useState("");

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
    console.log("all event reoccuring", allEvents[indexOfEvent]);
    console.log("recurring", reoccuring);
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
    /*     console.log(name);
    console.log(date);
    console.log(start);
    console.log(end);
    console.log(seats);
    console.log(recurring); */

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
      (reoccuring === "")
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
      recurring: reoccuring,
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
          ";\r\n";
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

  //const [chairSeat, setChairSeat] = useState(false)
  /* const chair = () => {
    if (allEvents[filterIndex].seats === 0) {
      //setChairSeat(!chairSeat)
      console.log(chairSeat)
    }
  } */

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
    console.log("Find me")
    let giraffe = allEvents[filterIndex].people;
    giraffe.push(myregisterEvent);
    console.log(giraffe);
    allEvents[filterIndex].seats -= 1;
/*     if (allEvents[filterIndex].seats === 0){
      console.log("I am inside")
      setDisable(disable);
    } */
    /* console.log("disable is: ")
    console.log(disable) */
    setFilterID("");
    setFilterIndex("");
    setDisable(!disable);
    setRegisterModal(!registerModal);
  };

  return (
    <div className="flex flex-col justify-center bg-gray-100">
      <br />
      <div className="flex justify-center text-4xl">Registration Site</div>
      <div className="flex justify-end w-full shadow-lg">
        <DropDown
          onAdd={addEvent}
          dropValue={loginValue}
          newDropValue={loginChange}
        />
        </div>
        <div>
            {editModal && (
              <EditModal
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
                reoccuring={reoccuring}
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
      <div className="flex flex-wrap justify-start w-full h-full">
        <ArrayMap
          mydata={allEvents}
          deleteEvent={deleteIDEvent}
          editEvent={editIDEvent}
          viewEvent={viewIDEvent}
          registerEvent={registerIDEvent}
          dropValue={loginValue}
          disable={disable}
          registerSeat={allEvents[filterIndex].seats}
        />
      </div>
    </div>
  );
}

export default App;
