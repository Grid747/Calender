import ModelOpener from "./ModelOpener";
import InstrucButton from "./InstrucBtn";
import PackageButton from "./PcsPackageBtn";

const DropDown = ({ 
  onAdd, 
  dropValue, 
  newDropValue, 
  name, 
  date, 
  start, 
  end, 
  seats, 
  reoccuring, 
  people, 
  regBtn, 
  changeName, 
  changeEventDate, 
  changeStartTime, 
  changeEndTime, 
  changeSeats, 
  changeRecur,
  ID
}) => {
  return (
    <div className="flex flex-col justify-end w-full h-28">
      
      <div className="flex flex-col justify-end">
        <h1 className="flex justify-end px-8">Login:</h1>
        <label className="flex justify-end">
          <select
            name="Login"
            value={dropValue}
            onChange={newDropValue}
            className="mx-2"
          >
            <option value={false}>Member</option>
            <option value={true}>Admin</option>
          </select>
        </label>
        <div
          className={`${
            dropValue ? "flex justify-center" : "flex justify-center pt-10"
          }`}
        >
          {dropValue ? (
            <ModelOpener 
            onAdd={onAdd} 
            name={name} 
            date={date} 
            start={start} 
            end={end} 
            seats={seats} 
            reoccuring={reoccuring} 
            people={people} 
            regBtn={regBtn} 
            changeName={changeName} 
            changeEventDate={changeEventDate} 
            changeStartTime={changeStartTime} 
            changeEndTime={changeEndTime} 
            changeSeats={changeSeats} 
            changeRecur={changeRecur} 
            ID={ID}
            />
          ) : (
            <div className="">
              <p className="text-2xl text-black flex justify-center font-mono">
                647th Force Support Squadron
              </p>
              <div className="flex justify-center p-4">
                <InstrucButton label="Instructions" />
                <PackageButton label="PCS Package" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
