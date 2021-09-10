import "./App.css";
import { useState } from "react";
import MyButtons from "./components/myButtons";
import DropDown from "./components/dropDown";
import Modal from "./components/Modal";
import AdminAcct from "./components/ShowEventBtn";

function App() {
  const [showModal, setshowModal] = useState(false);
  const onclick = () => {
    setshowModal(!showModal);
  };
  
  const [dropValue, setdropValue] = useState("")
  const newDropValue = (e)=>setdropValue(e.target.value);

  function hideButton(){
    if(dropValue == "admin"){
      <div> Hello</div>

    }else if(dropValue == "member"){
      <div>Good Bye</div>

    }
  }


  return (
    <div className='grid'>
      <br />
      <h1 className='grid justify-center text-3xl'>Registration Site</h1>
      <DropDown value={dropValue} handleChange={newDropValue}/>
      <MyButtons Clicked={onclick} />
      <br />
      {showModal && <Modal />}
      {/*       <Modal trigger={true}></Modal> */}
    </div>
  );
}

export default App;
