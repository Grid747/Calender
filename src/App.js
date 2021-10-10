import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import DropDown from "./components/dropDown";
import ArrayMap from "./Data/ArrayMap";
import Data from "./Data/Data";
import EditModal from "./components/EditModal";
import ViewModal from "./components/ViewModal";
import RegisterModal from "./components/RegisterModal";

const api = axios.create({
  baseURL: `http://localhost:3001/`,
});

function App() {
  /**************************************************************************** */
  /**************************************************************************** */
  /**************************************************************************** */
  /**************************************************************************** */
  /**************************************************************************** */
  /**************************************************************************** */

  /**
   * API SECTION
   */
  useEffect(() => {
    const apiGetAllEvents = async () => {
      try {
        const response = await api.get("/event/table");
        console.log(response.data);
        setallEvents(response.data);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };
    apiGetAllEvents();
  }, []);

  const apiCreateEvent = async () => {
    let apiNewEvent = {
      id: 104, //104 is the new id that is not used yet
      name: "test7", //new name not used yet
      date: "2021-10-30",
      start: "10:30",
      end: "11:30",
      seats: 9,
      reoccuring: "Off",
      regBtn: 1,
    };
    try {
      const response = await api.post("event/table", apiNewEvent);
      const apiAllEvents = [...allEvents, response.data];
      setallEvents(apiAllEvents);
      window.alert("You added the event");
      window.location.reload();
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const apiDeleteEvent = async (id) => {
    try {
      await api.delete(`event/${id}`);
      const updatedEvents = [...allEvents].filter(
        (oneEvent) => oneEvent.id !== id
      );
      setallEvents(updatedEvents);
      window.alert("You are now deleting this event.");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const apiUpdateEvent = async (id) => {
    let apiEditEvent = {
      id: 677,
      name: "id 677",
      date: "2021-10-30",
      start: "10:30",
      end: "11:30",
      seats: 9,
      reoccuring: "Off",
      regBtn: 1,
    };

    try {
      const response = await api.patch(`event/${id}`, apiEditEvent);
      setallEvents(
        allEvents.map((event) =>
          event.id === id ? { ...response.data } : event
        )
      );
      window.alert(`you edited ${id}`);
      window.location.reload();
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  /**************************************************************************** */
  /**************************************************************************** */
  /**************************************************************************** */
  /**************************************************************************** */
  /**************************************************************************** */
  /**************************************************************************** */

  /*
   * This is for the login drop down on the right where you change from member to admin
   */
  const [loginValue, setloginValue] = useState(false);
  const loginChange = () => {
    setloginValue(!loginValue);
  };

  /*
   * Sets all the data from the data file
   */
  const [allEvents, setallEvents] = useState(Data);

  /**
   * This is for addEvent button. when you click the button it will add the id and check for Weekly or once
   * Afterward if it is once, then it will add the event once. If it is weekly it will add the event for 12
   * weeks by converting all the new dates to the strings deeply copying everything and replacing everything
   * with the new data and setting that data as the allEvents
   */
  const addEvent = async (myNewEvent) => {
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
    //fix modal stay alive after alert

    /* Only for one instance */
    if (myNewEvent.reoccuring === "No") {
      const id = Math.floor(Math.random() * 100000000) + 1;
      myNewEvent.id = id;
      try {
        const response = await api.post("event/table", myNewEvent);
        const apiAllEvents = [...allEvents, response.data];
        setallEvents(apiAllEvents);
        window.alert("You added the event");
        window.location.reload();
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }

      /* below is for weeks (12 weeks) */
    } else if (myNewEvent.reoccuring === "Weekly") {
      let uniqueId = [];

      for (let i = 0; i < 12; i++) {
        const id = Math.floor(Math.random() * 100000000) + 1;
        uniqueId[i] = id;
      }

      let dateinput = new Date(myNewEvent.date.replace(/-/g, "/"));
      let uniqueDate = [];

      for (let i = 0; i < 12; i++) {
        let dd = String(dateinput.getDate()).padStart(2, "0");
        let mm = String(dateinput.getMonth()).padStart(2, "0");
        let yyyy = dateinput.getFullYear();
        let specialDateString;
        if (mm === "00") {
          mm = "1";
        } else if (mm === "01") {
          mm = "2";
        } else if (mm === "02") {
          mm = "3";
        } else if (mm === "03") {
          mm = "4";
        } else if (mm === "04") {
          mm = "5";
        } else if (mm === "05") {
          mm = "6";
        } else if (mm === "06") {
          mm = "7";
        } else if (mm === "07") {
          mm = "8";
        } else if (mm === "08") {
          mm = "9";
        } else if (mm === "09") {
          mm = "10";
        } else if (mm === "10") {
          mm = "11";
        } else if (mm === "11") {
          mm = "12";
        } else {
          console.log("something broke at: ", i, "iteration");
        }
        specialDateString = yyyy + "-" + mm + "-" + dd;
        uniqueDate[i] = specialDateString;
        let specialDate = new Date(dateinput.setDate(dateinput.getDate() + 7));
        dateinput = specialDate;
      }

      let repeatedArr = [];
      for (let i = 0; i < 12; i++) {
        repeatedArr[i] = myNewEvent;
      }

      let finalrepeatedArr = JSON.parse(JSON.stringify(repeatedArr));
      for (let i = 0; i < 12; i++) {
        finalrepeatedArr[i].id = uniqueId[i];
        finalrepeatedArr[i].date = uniqueDate[i];
      }

      for (let i = 0; i < 12; i++) {
        try {
          const response = await api.post("event/table", finalrepeatedArr[i]);
          const apiAllEvents = [...allEvents, response.data];
          setallEvents(apiAllEvents);
          console.log("added event i: ", i);
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
      }
      window.alert("You added the event");
      window.location.reload();
    }
  };

  /****************************************************************************************** */

  /**
   * This will find the id of the one clicked to delete and delete it and show the new list
   * of allEvents
   */
  const deleteIDEvent = async (id) => {
    try {
      await api.delete(`event/${id}`);
      const updatedEvents = [...allEvents].filter(
        (oneEvent) => oneEvent.id !== id
      );
      setallEvents(updatedEvents);
      window.alert("You are now deleting this event.");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  /**************************************************************************************** */
  /**************************************************************************************** */
  /**************************************************************************************** */

  /**
   * This section is pure states used to help with controlling the data as it is moved around
   * This was heavily used within editmodal and regsitering modals. this is making sure the
   * data is stored when something is clicked and be used when submitting
   */
  const [filterID, setFilterID] = useState(0);
  const [filterIndex, setFilterIndex] = useState(0);

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

  /* *************************************************************************************** */
  /* *************************************************************************************** */
  /********************************************************************************************* */

  const [disable, setDisable] = useState(false);
  const [editModal, setEditModal] = useState(false);

  /**
   * When edit button on the admin side is clicked it gathers all the data and puts them into
   * the states that are being used
   */
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
    //CHANGED DUE TO THE API
    setPeople(Data[indexOfEvent].people);
  };

  /**
   * This is for submit button on the edit modal/form when submit it will update the value given inside
   * that modal/form. Afterwords it sets all the states back to null/default so no data carries over
   */
  const editModalSubmit = async (e) => {
    e.preventDefault();
    const updatedPeople = [...people].filter(
      (falsePeople) => falsePeople.ischecked === true
    );

    let adding2Seats = people.length - updatedPeople.length;

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

    let regBtnSpecific;
    if (allEvents[filterIndex].seats >= 0) {
      regBtnSpecific = true;
    } else {
      regBtnSpecific = false;
    }

    const id = filterID;
    let hipp0 = {
      id,
      name,
      date,
      start,
      end,
      seats: parseInt(seats) + adding2Seats,
      regBtn: regBtnSpecific,
      reoccuring: reoccuring,
      //people: updatedPeople,
    };

    console.log(id);
    console.log(hipp0);
    try {
      const response = await api.patch(`event/${id}`, hipp0);
      console.log(response.data);

      setallEvents(
        allEvents.map((event) =>
          event.id === id ? { ...response.data } : event
        )
      );
      window.alert(`you edited ${id}`);
      //window.location.reload();
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }

    /*     setallEvents(
      allEvents.map((item) => (item.id !== hipp0.id ? item : hipp0))
    ); */

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

    //window.alert("You have now edited this event.");
  };

  /*
   * This changes the checked mark for when you change if a person is attending or not in the
   * edit modal/form
   */
  const checkingChecked = (index) => {
    let myNewPeopleCheckMarked = [...people];
    myNewPeopleCheckMarked[index].ischecked =
      !myNewPeopleCheckMarked[index].ischecked;
    setPeople(myNewPeopleCheckMarked);
  };

  /**
   * This will close the edit modal and have the buttons stop being disabled
   */
  const changeEditModel = (e) => {
    e.preventDefault();
    setEditModal(!editModal);
    setDisable(!disable);
  };

  /***************************************************************************************** */
  /***************************************************************************************** */
  /****************************************************************************************** */

  /**
   * This set it for closing the modal
   */
  const [viewModal, setViewModal] = useState(false);
  /**
   * This sets it for arraymap for when you click the view button
   */
  const [viewObject, setViewObject] = useState();

  /**
   * When you click view button on the admin side it will show view modal for that one ID
   */
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

  /**
   * When you click the close button in view modal it will close the modal and stop disabling
   * the buttons
   */
  const changeViewModel = (e) => {
    e.preventDefault();
    setViewModal(!viewModal);
    setDisable(!disable);
  };

  /***************************************************************************************** */
  /***************************************************************************************** */
  /***************************************************************************************** */

  const [registerModal, setRegisterModal] = useState(false);
  /**
   * This will get the id of which one you are registering for when you click register
   */
  const registerIDEvent = (id) => {
    setRegisterModal(!registerModal);
    setFilterID(id);
    setDisable(!disable);
    const indexOfEvent = allEvents.findIndex((oneEvent) => oneEvent.id === id);
    setFilterIndex(indexOfEvent);
  };

  /**
   * When you click the submit button on the register modal it will add the user to the data and
   * subtract one from the current count. If it is 0 then register for the event will disappear
   */
  const registerEvent = (myregisterEvent) => {
    myregisterEvent.id = filterID;

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
    allEvents[filterIndex].seats -= 1;

    if (allEvents[filterIndex].seats === 0) {
      console.log("The word of the day is car");
      allEvents[filterIndex].regBtn = false;
    }
    setFilterID("");
    setFilterIndex("");
    setDisable(!disable);
    setRegisterModal(!registerModal);
  };

  /**
   * This will close the register modal have the buttons stop being disabled
   */
  const changeRegisterModel = (e) => {
    e.preventDefault();
    setRegisterModal(!registerModal);
    setDisable(!disable);
  };

  /**************************************************************************** */
  return (
    <div className="flex flex-col justify-center bg-gray-100">
      {/* <p>{API[0].Name}</p> */}
      <button onClick={apiCreateEvent}> Create </button>
      <button onClick={() => apiDeleteEvent(100)}> Delete </button>
      <button onClick={() => apiUpdateEvent(677)}> Edit </button>
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
          <RegisterModal closebtn={changeRegisterModel} subOn={registerEvent} />
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
        />
      </div>
    </div>
  );
}

export default App;
