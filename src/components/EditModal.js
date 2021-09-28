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
    <div className="flex flex-col justify-center content-center py-4 border-2 border-gray-400 bg-blue-500">
      <form>
        <h1 className="flex justify-center text-lg">Event Name:</h1>
        <input
          className="w-64"
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
          <button
            onClick={closeBtn}
            className="rounded-full bg-white px-2 py-1"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={formSubmit}
            className="rounded-full bg-white px-2 py-1"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditModal;
