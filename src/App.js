import "./App.css";
/* import MyButtons from "./components/myButtons"; */
import DropDown from "./components/dropDown";
import DummyBox from "./components/DummyBox";
/* import Modal from "./components/Modal"; */

function App() {
  return (
    <div className="flex flex-col justify-center">
      <br />
      <div className="flex justify-center text-3xl">Registration Site</div>
      <div className="flex">
        <DropDown />
      </div>
      <DummyBox />
    </div>
  );
}

export default App;
