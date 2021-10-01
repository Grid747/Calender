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
      <div className="rounded-lg flex h-auto flex-col justify-center p-4 border-2 border-gray-900 bg-blue-300">
      <form>
        <h1 className="flex justify-center text-lg">Event Name:</h1>
        <input
          className="flex justify-center w-64"
          type="text"
          onChange={changeName}
          value={name}
        ></input>
        <h1 className="flex justify-center text-lg">Event Date: </h1>
        <input
          className="flex justify-center w-64"
          type="date"
          onChange={changeDate}
          value={date}
        ></input>
        <h1 className="flex justify-center text-lg">Start Time:</h1>
        <input
          className="flex justify-center w-64"
          type="time"
          onChange={changeStart}
          value={start}
        ></input>
        <h1 className="flex justify-center text-lg">End Time: </h1>
        <input
          className="flex justify-center w-64"
          type="time"
          onChange={changeEnd}
          value={end}
        ></input>
        <h1 className="flex justify-center text-lg"># of Seats: </h1>
        <input
          className="flex justify-center w-64"
          type="number"
          onChange={changeSeats}
          value={seats}
        ></input>
        <h1 className="flex justify-center text-lg">Reoccuring: </h1>
        <p className="inline-flex justify-center">{reoccuring}</p>

        <br />
        <h1 className="flex justify-center text-lg">Attendee's: </h1>
        {peopleData.map((foodie, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                checked={foodie.ischecked}
                onChange={() => checkingChecked(index, foodie.ischecked)}
              />
              {foodie.name}
            </div>
          );
        })}

        <div className="p-2 flex justify-evenly">
        <button onClick={closeBtn} className="rounded-full px-3 border border-gray-900 bg-white h-10 w-20 hover:shadow-lg">
            Close
            </button>
            <button onClick={formSubmit} className="rounded-full px-3 border border-gray-900 bg-white h-10 w-20 hover:shadow-lg">
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
