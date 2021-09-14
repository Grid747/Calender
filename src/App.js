import "./App.css";
/* import MyButtons from "./components/myButtons"; */
import DropDown from "./components/dropDown";
import DummyBox from "./components/DummyBox";
/* import Modal from "./components/Modal"; */

function App() {
  return (
    <div className="grid">
      <br />
      <h1 className="grid justify-center text-3xl">Registration Site</h1>
      <DropDown />
      <DummyBox />
    </div>
  );
}

export default App;
