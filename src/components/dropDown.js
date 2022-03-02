import ModelOpener from "./ModelOpener";
import InstrucButton from "./InstrucBtn";
import PackageButton from "./PcsPackageBtn";
import Chronos from "../files/Chronos.png"

const DropDown = ({
  onAdd,
  dropValue,
  newDropValue,
  loginModel,
  loginclose,
}) => {
  function ChronosLogo() {
    return <img src={Chronos} alt={ChronosLogo} />;
  }
  return (
    <div className="flex flex-col justify-end">
      
        {" "}
        {/* this is where we need to push it right */}
        {/* <h1 className="flex justify-end px-8">Login:</h1> */}
        {/* <label className="flex justify-end w-50"> */}
        {!dropValue ? (
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-white rounded-lg border border-black hover:bg-yellow-200 text-gray-900 py-2 px-2"
              onClick={loginModel}
            >
              Admin Login
            </button>
            </div>
        ) : (
          <div className="flex justify-end">
          <button
            type="button"
            className="bg-white rounded-lg border border-black hover:bg-red-700 text-gray-900 py-2 px-2"
            onClick={loginclose}
          >
            Logout
          </button>
          </div>
        )}
        <div className="flex justify-center">{ChronosLogo()}</div>
        {/*  <select
            name="Login"
            value={dropValue}
            onChange={newDropValue}
            className="mx-2"
          >
            <option value={false}>Member</option>
            <option value={true}>Admin</option>
          </select> */}
        {/* </label> */}
        <div className="flex justify-center py-4">
          {dropValue ? (
            <ModelOpener onAdd={onAdd} />
          ) : (
            <div>
              <p className="text-xl text-black flex justify-center font-mono">
                15th CPTS
              </p>
              <div className="text-xl text-black flex justify-center font-mono">
                Millitary PCS In-Processing
              </div>
              <div className="flex justify-center">
                <InstrucButton label="Instructions" />
                <PackageButton label="PCS Package" />
              </div>
              </div>
          )}
        </div>
    </div>
  );
};

export default DropDown;
