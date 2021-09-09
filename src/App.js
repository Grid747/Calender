import "./App.css";
import { useState } from "react";
import MyButtons from "./components/myButtons";
//import dropDown from "./components/dropDown";
import Modal from "./components/Modal";

function App() {
  const [showModal, setshowModal] = useState(false);
  const onclick = () => {
    setshowModal(!showModal);
  };

  return (
    <div className="block">
      hello
      <MyButtons Clicked={onclick} />
      {showModal && <Modal />}
      {/*       <Modal trigger={true}></Modal> */}
    </div>
  );
}

export default App;
