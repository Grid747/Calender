import "./App.css";
import MyButtons from "./components/myButtons";
//import dropDown from "./components/dropDown";
import Modal from "./components/Modal";

function App() {
  const onclick = () => {
    <Modal trigger={true}></Modal>;
  };
  return (
    <div className="block">
      hello
      <MyButtons Clicked={onclick} />
      <Modal trigger={true}></Modal>
    </div>
  );
}

export default App;
