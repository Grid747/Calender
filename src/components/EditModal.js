function EditModal({
  closeBtn,
  name,
  changeName,
  date,
  changeDate,
  start,
  changeStart,
  end,
  changeEnd,
  seats,
  changeSeats,
  reoccuring,
  peopleData,
  checkingChecked,
  formSubmit,
}) {
  return (
    <div className="fixed pin z-50 pt-10 justify-center overflow-auto bg-gray-400 bg-opacity-60 flex w-full h-full">
      <div>
        <div className="rounded flex h-auto flex-col justify-center w-90 p-4 border-2 border-gray-900 bg-gray-200">
          <form>
            <h1 className="flex justify-left text-lg">Event Name:</h1>
            <input
              className="pl-2 border border-gray-900 rounded h-10 w-80 justify-center"
              type="text"
              onChange={changeName}
              value={name}
            ></input>
            <h1 className="flex justify-left text-lg pt-5">Event Date: </h1>
            <input
              className="pl-2 border border-gray-900 rounded h-10 w-80 justify-center"
              type="date"
              onChange={changeDate}
              value={date}
            ></input>
            <h1 className="flex justify-left text-lg pt-5">Start Time:</h1>
            <input
              className="pl-2 border border-gray-900 rounded h-10 w-80 justify-center"
              type="time"
              onChange={changeStart}
              value={start}
            ></input>
            <h1 className="flex justify-left text-lg pt-5">End Time: </h1>
            <input
              className="pl-2 border border-gray-900 rounded h-10 w-80 justify-center"
              type="time"
              onChange={changeEnd}
              value={end}
            ></input>
            <h1 className="flex justify-left text-lg pt-5"># of Seats: </h1>
            <input
              className="pl-2 border border-gray-900 rounded h-10 w-80 justify-center"
              type="number"
              onChange={changeSeats}
              value={seats}
            ></input>
            <h1 className="flex justify-left text-lg pt-5">Reoccuring: </h1>
            <p className="pl-2 inline-flex justify-left">{reoccuring}</p>

            <br />
            <h1 className="flex justify-left text-lg pt-5">Attendee's: </h1>
            {peopleData.map((foodie, index) => {
              return (
                <div className="pl-2" key={index}>
                  <input
                    type="checkbox"
                    checked={foodie.ischecked}
                    onChange={() => checkingChecked(index, foodie)}
                  />
                  {foodie.name}
                </div>
              );
            })}

            <div className="p-5 flex justify-evenly">
              <button
                onClick={closeBtn}
                className="rounded-lg px-3 border border-gray-900 bg-white h-10 w-20 hover:bg-red-600"
              >
                Close
              </button>
              <button
                onClick={formSubmit}
                className="rounded-lg px-3 border border-gray-900 bg-white h-10 w-20 hover:bg-green-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
