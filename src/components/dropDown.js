import ModelOpener from "./ModelOpener";
import InstrucButton from "./InstrucBtn";
import PackageButton from "./PcsPackageBtn";

const DropDown = ({ onAdd, dropValue, newDropValue }) => {
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
            dropValue ? "flex justify-center pt-8" : "flex justify-center pt-10"
          }`}
        >
          {dropValue ? (
            <ModelOpener onAdd={onAdd} />
          ) : (
            <div className="">
              <p className="text-xl text-black flex justify-center font-mono">
                15th CPTS
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
