import React from "react";


const RefreshButton = () => {
    let eventArr = [];
    let event = (allEvents) => {
        console.log("before event")
        console.log(eventArr)
        eventArr.push(allEvents)
        eventArr.sort()
        console.log("after event")
        console.log(eventArr)
        console.log(allEvents)
        //get all events
        //make anew array
        //dates and ids
        //filter through dates
        //match ids 
        //add other information
        //setAllEvents
    }
    return (
        <div className="flex justify-center items-center">
          <div className="items-center">
            <button className="bg-white hover:bg-gray-900 text-gray-900 font-bold hover:text-white py-2 px-2 border border-gray-900 hover:border-transparent rounded"
            onClick={event}>
                Refresh
                </button>
          </div>
        </div>
    )
}

export default RefreshButton;
