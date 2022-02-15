import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import DropDown from "./components/dropDown";
import ArrayMap from "./Data/ArrayMap";
import Data from "./Data/Data";
import EditModal from "./components/EditModal";
import ViewModal from "./components/ViewModal";
import RegisterModal from "./components/RegisterModal";
import Chronos from "./files/Chronos.png";
import LoginModal from "./components/LoginModal";

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
  //NEED
  useEffect(() => {
    const apiGetAllEvents = async () => {
      try {
        const response = await api.get("/event/table");
        console.log(response.data);
        setallEvents(response.data);
        console.log("data has loaded");
        /**
         * Below section is for cleaning up the data before it enters the arraymap function. This will hide the the reg
         * button if it is less than 8 hours
         * The next function will delete the whole card if it is greater than 30 days
         */

        console.log("8 hour protection");
        let stringDate = response.data[12].date;
        let stringStartTime = response.data[12].start;
        let combineDateObj = stringDate + "T" + stringStartTime;
        //console.log("combined string ", combineDateObj);
        let change2DateObj = new Date(combineDateObj);
        console.log("object date: ", change2DateObj);
        let eightbe4Date = new Date(
          change2DateObj.setHours(change2DateObj.getHours() - 8)
        );
        console.log("last time to keep button", eightbe4Date);
        let today = new Date();
        if (eightbe4Date <= today) {
          console.log("you made it to if");
        }
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };
    apiGetAllEvents();
  }, []);

  //NEED
  useEffect(() => {
    const apiGetAllPeople = async () => {
      try {
        const response = await api.get("/people/table");
        //console.log(response.data);
        setPeople(response.data);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };
    apiGetAllPeople();
  }, []);

  /*   useEffect(() => {
    const eightHourHide = (need2hideReg) => {
      console.log("count down to 8 hours");
      console.log(need2hideReg);

      let hider = need2hideReg[0].date;
      console.log(hider);
      let evDate = new Date(hider);
      console.log(evDate);
      // for (let i = 0; i < need2hideReg.length; i++) {
      //  console.log("in the for loop, you are at ", i);
      //} 
    };
    eightHourHide(allEvents);
  });
 */

  //Example all below
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
  const [allEvents, setallEvents] = useState([]);

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
  const [peopleOneEvent, setPeopleOneEvent] = useState([]);

  /* *************************************************************************************** */
  /* *************************************************************************************** */
  /********************************************************************************************* */

  const [disable, setDisable] = useState(false);
  const [editModal, setEditModal] = useState(false);

  /**
   * When edit button on the admin side is clicked it gathers all the data and puts them into
   * the states that are being used
   */
  const editIDEvent = async (id) => {
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
    //setPeople(Data[indexOfEvent].people);
    try {
      const response = await api.get(`/people/${id}`);
      console.log(response.data);
      setPeopleOneEvent(response.data);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  /**
   * This is for submit button on the edit modal/form when submit it will update the value given inside
   * that modal/form. Afterwords it sets all the states back to null/default so no data carries over
   */

  /* NEEDS TO BE DONE IN THE EDIT SECTION
   * Need to get checkboxes working again after that you should be able to do a delete operations for them
     easiest way might actually just be changing the checkboxes to buttons and have them be small and del
     as the label. This way we can just give a warning and if they click yes that person is deleted. 

     Checkboxes working will be in checkingchecked which is using patch to update the states which is not 
     working very well

     deleting the actual people from the DB will be in editModalSubmit

     Oh I forgot but since people isn't working then updatedPeople and adding2Seat (which is right below)
     won't be working either. Once the other issues are solved then this will be solved too. 
   */
  const editModalSubmit = async (e) => {
    e.preventDefault();
    /* const updatedPeople = [...people].filter(
      (falsePeople) => falsePeople.ischecked === true
    ); */
    console.log("people");
    console.log(people);

    console.log("People one Event");
    console.log(peopleOneEvent);

    let deletingPeopleArray = [];
    //console.log("peopleone Event length");
    //console.log(peopleOneEvent.length);

    for (let i = 0; i < peopleOneEvent.length; i++) {
      if (peopleOneEvent[i].ischecked == false) {
        deletingPeopleArray.push(peopleOneEvent[i]);
      }
    }

    console.log("deletingPeopleArray");
    console.log(deletingPeopleArray);

    let addFromDel = deletingPeopleArray.length;

    if (
      (name === "") |
      (date === "") |
      (start === "") |
      (end === "") |
      // eslint-disable-next-line
      //(seats == 0 && adding2Seats == 0) |
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

    //compare people and delete array for a new array that will be the n

    const id = filterID;
    let hipp0 = {
      id,
      name,
      date,
      start,
      end,
      seats: parseInt(seats) + addFromDel,
      regBtn: regBtnSpecific,
      reoccuring: reoccuring,
      //people: updatedPeople,
    };

    for (let i = 0; i < deletingPeopleArray.length; i++) {
      let uuid = deletingPeopleArray[i].uuid;
      try {
        await api.delete(`people/${id}/${uuid}`);
        const updatedPeople = [...people].filter(
          (keepPeople) => keepPeople.ischecked !== false
        );
        let finalUpdatedPeople = JSON.parse(JSON.stringify(updatedPeople));
        setPeople(finalUpdatedPeople);
        window.alert("You are now deleting this event.");
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }

    console.log("id");
    console.log(id);
    console.log("hipp0");
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
    window.location.reload();
  };

  /*
   * This changes the checked mark for when you change if a person is attending or not in the
   * edit modal/form
   */

  /* This is where you would need to do the checkboxes. the way it is setup, it would update when
   * you edit and save the code. Again del buttons might be the best. The other way is find a way
   * where you do like a shallow or deep copy (whichever works) and then just do a full post every
   * time a checkboxed is clicked
   *
   */
  const checkingChecked = async (index, persons) => {
    //console.log("persons is below");
    //console.log(persons);
    //console.log("index ", index);
    console.log("peopleOneEvent");
    console.log(peopleOneEvent);
    //console.log(peopleOneEvent);
    //let id = persons[index].id;
    //let email = persons[index].email;

    //let ischecked = { ischecked: 0 };

    /* let checkMarked = [...peopleOneEvent];
    checkMarked[index].ischecked = !checkMarked[index].ischecked;
    console.log("end"); */

    /*     if (peopleOneEvent[index].ischecked === 1) {
      console.log("got int he if");
      try {
        const response = await api.patch(`event/${id}`, ischecked);
        setPeopleOneEvent(
          peopleOneEvent.map((event) =>
            event.id === id && event.email === email
              ? { ...response.data }
              : event
          )
        );
        window.alert(`you edited ${id}`);
        window.location.reload();
      } catch (err) {
        console.log(`Error: ${err.message}`); 
      }
    } */
    let myNewPeopleCheckMarked = [...peopleOneEvent];
    myNewPeopleCheckMarked[index].ischecked =
      !myNewPeopleCheckMarked[index].ischecked;
    setPeopleOneEvent(myNewPeopleCheckMarked);
    console.log("people after");
    console.log(people);
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
  const [viewObject, setViewObject] = useState([]);

  /**
   * When you click view button on the admin side it will show view modal for that one ID
   */
  const viewIDEvent = async (id) => {
    setViewModal(!viewModal);
    setDisable(!disable);
    const viewingEvent = allEvents.filter((oneEvent) => oneEvent.id === id);
    const viewingPeople = people.filter(
      (onePeopleEvent) => onePeopleEvent.id === id
    );

    let peopleArr = viewingPeople;

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
          ";";
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
  const registerIDEvent = async (id) => {
    setRegisterModal(!registerModal);
    setFilterID(id);
    setDisable(!disable);
    const indexOfEvent = allEvents.findIndex((oneEvent) => oneEvent.id === id);
    setFilterIndex(indexOfEvent);
  };

  /**
   * When you click the submit button on the register modal it will add the user to the data and
   * subtract one from the current count. If it is 0 then register button will disappear
   */

  /**
   * So this works when are submitting a new person for the event. submitting a new person
   * always works. What doesn't work, is that it won't set the seat value to 0. it will set it
   * to anything but 0. I have comments explaining what happens
   *
   */
  const registerEvent = async (myregisterEvent) => {
    myregisterEvent.id = filterID;
    const id = filterID;

    const arrayOfEvent = allEvents.filter(
      (oneEvent) => oneEvent.id === filterID
    );

    const currEventRegFor = arrayOfEvent[0];

    console.log(currEventRegFor);

    if (
      (myregisterEvent.rank === "") |
      (myregisterEvent.name === "") |
      (myregisterEvent.email === "") |
      (myregisterEvent.phoneNumber === "")
    ) {
      return window.alert("You are missing one or more of the inputs");
    }
    console.log("my register events", myregisterEvent);

    const newSeat = allEvents[filterIndex].seats - 1;
    if (newSeat === 0) {
      currEventRegFor.seats = "0";
      currEventRegFor.regBtn = "0";
    } else {
      currEventRegFor.seats = newSeat;
    }
    //console.log("update for the seats before seatpatch", currEventRegFor);
    const seatPatch = currEventRegFor;
    //const seatPatch = "";
    //const regBtnPatch = { regBtn: false }; //will be used when the bug below isn't there
    console.log("id: ", id);
    console.log(myregisterEvent);

    try {
      console.log("before response");
      const response = await api.post("people/table", myregisterEvent);
      const apiAllPeople = [...people, response.data];
      setPeople(apiAllPeople);

      //this does not work with 0
      //What happens is that it sends a success code 204
      //204 means it sent no data. It only does this with zero
      console.log("trying to update the seats now!!!");
      const responseSeats = await api.patch(`event/${id}`, seatPatch);
      console.log("You made it past the response eh");
      setallEvents(
        allEvents.map((event) =>
          event.id === id ? { ...responseSeats.data } : event
        )
      );

      //can't test this if I can't make the above to 0
      console.log("Made to the regBtn update!");
      /*       if (allEvents[filterIndex].seats === 0) {
        const responseRegBtn = await api.patch(`event/${id}`, regBtnPatch);
        setallEvents(
          allEvents.map((event) =>
            event.id === id ? { ...responseRegBtn.data } : event
          )
        );
      } */

      window.alert("You are added to the event");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
    setFilterID("");
    setFilterIndex("");
    setDisable(!disable);
    setRegisterModal(!registerModal);
    window.location.reload();
  };

  /**
   * This will close the register modal have the buttons stop being disabled
   */
  const changeRegisterModel = (e) => {
    e.preventDefault();
    setRegisterModal(!registerModal);
    setDisable(!disable);
  };

  /**
   * Login Model for getting the login model to appear
   *
   */
  const [loginModalBool, setloginModalBool] = useState(false);
  const loginModel = (e) => {
    e.preventDefault();
    setloginModalBool(!loginModalBool);
  };

  const tatertotComp = (LoginObj) => {
    console.log("this is user", LoginObj.user);
    console.log("this is pass", LoginObj.pass);
    if (LoginObj.user == "tater" && LoginObj.pass == "tot") {
      console.log("you are a tatertot");
      setloginValue(!loginValue);
      setloginModalBool(!loginModalBool);
      //loginValue == true
    } else {
      //windowbox ("incorrect info")
    }
  };

  function ChronosLogo() {
    return <img src={Chronos} alt={ChronosLogo} />;
  }

  /**************************************************************************** */
  return (
    <div className="bg-blue-100">
      {/*       {eightHourHide(allEvents)} */}
      {/*       <button onClick={apiCreateEvent}> Create </button>
      <button onClick={() => apiDeleteEvent(100)}> Delete </button>
    <button onClick={() => apiUpdateEvent(677)}> Edit </button> */}
      <br />
      <div className="flex justify-center">
        <center>{ChronosLogo()}</center>
      </div>
      <br />
      <div className="flex justify-end w-full">
        <DropDown
          onAdd={addEvent}
          dropValue={loginValue}
          newDropValue={loginChange}
          loginModel={loginModel}
          loginclose={loginChange}
        />
      </div>
      {loginModalBool && (
        <LoginModal subLogin={tatertotComp} closebtn={loginModel} />
      )}
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
            peopleData={peopleOneEvent}
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
      <div className="flex flex-wrap justify-center h-full w-full">
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
