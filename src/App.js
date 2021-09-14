import "./App.css";
/* import MyButtons from "./components/myButtons"; */
import DropDown from "./components/dropDown";
import DummyBox from "./components/DummyBox";
import ArrayMap from "./Data/ArrayMap";
/* import Modal from "./components/Modal"; */

function App() {
  return (
    <div className='flex flex-col justify-center'>
      <br />
      <div className='flex justify-center text-3xl'>Registration Site</div>
      <div className='flex justify-end w-full'>
        <DropDown />
      </div>
<<<<<<< HEAD
      <div className="flex">
        {/*         <DummyBox /> */}
        <ArrayMap />
=======

      <div>
        <DummyBox />
>>>>>>> css
      </div>
    </div>
  );
}

export default App;
