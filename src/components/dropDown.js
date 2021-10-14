import ModelOpener from "./ModelOpener";
import InstrucButton from "./InstrucBtn";
import PackageButton from "./PcsPackageBtn";

const DropDown = ({ onAdd, dropValue, newDropValue }) => {
  return (
    <div className="flex flex-col justify-end w-full">
      
      <div className="flex flex-col justify-end">
        <h1 className="flex justify-end px-8">Login:</h1>
        <label className="flex justify-end">
          <select
            name="Login"
            value={dropValue}
            onChange={newDropValue}
            className="mx-2 border-2 border-gray-400 border-offset hover:shadow-lg"
          >
            <option value={false}>Member</option>
            <option value={true}>Admin</option>
          </select>
        </label>
        <div
          className={`${
            dropValue ? "flex justify-center pt-0" : "flex justify-center pt-1"
          }`}
        >
          {dropValue ? (
            <ModelOpener onAdd={onAdd} />
          ) : (
            <div className="bg-blue-900 h-24 w-full font-bold p-2">
              <p className="text-2xl text-white uppercase flex justify-center">
                647th Force Support Squadron
              </p>
              <div className="flex justify-center">
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
