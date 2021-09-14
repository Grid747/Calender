import React from 'react'

function DataBox({name, eventDate, startTime, endTime, seatNum, reoccuring}) {
    return (
    <div className="box-content h-200 w-max p-4 border-4 border-gray-400 bg-transparent">
        
        <h1>Name: {name}</h1>
        <p>Event Date: {eventDate}</p>
        <p>Start Time: {startTime}</p>
        <p>End Time: {endTime}</p>
        <p># of Seats: {seatNum}</p>
        <p>Reoccuring: {reoccuring}</p>
    </div>

    )
}

export default DataBox


