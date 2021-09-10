import React from "react";
import MyButtons from "./myButtons";

/*const DropDown = () => {
  return (
    <div className='flex justify-end'>
      <div class='pt-1 pr-11 font medium md:whitespace-pre flex justify-end'>
        {""}
        Account:
        <select name='Login' class='mx-2 ring-2 ring-gray-400 ring-offset'>
          <option value='login'></option>
          <option value='member'>Member</option>
          <option value='admin'>Admin</option>
        </select>
      {this.state.showOption && // if it's true return the actual JSX
        <div className="form-group">
        <label>Number one should hide or show when option one is cliked</label>
        <input type="text"  name="" className="form-control"/>
        </div>
      }
      </div>
    </div>
  );
};

export default DropDown;*/

const DropDown = ({value, handleChange}) => {
  return (
    <div class = 'flex justify-end'> Login:  
    <select name="Login" value={value} onChange={handleChange} class='mx-2 ring-2 ring-gray-400 ring-offset flex'>
    <option value={false}>Member</option>
    <option value= {true} >Admin</option>
    </select>
    {value ? <MyButtons/>: ""}
    </div>
  )
};



export default DropDown
