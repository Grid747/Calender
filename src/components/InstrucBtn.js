import React from "react";
import PCSIntsructions from "../files/PCSInstructions.pptx";

const InstrucButton = ({ label }) => {
  return (
    <div className="flex justify-end h-10 px-2">
      <a href={PCSIntsructions}>
        <button
          className='bg-white rounded hover:bg-gray-300 text-gray-900 font-bold 
          py-2 px-2 border border-gray-900'
        >
          {label}
        </button>
      </a>
    </div>
  );
};
export default InstrucButton;

