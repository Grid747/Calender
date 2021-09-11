import React from 'react'

function Submitbtn() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log('You clicked submit.');
    }

  
    return (
      <form onSubmit={handleSubmit}>
        <button >Submit</button>
      </form>
    );
  }

  export default Submitbtn