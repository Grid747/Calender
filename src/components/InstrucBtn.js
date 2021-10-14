import React from "react";
import PCSIntsructions from "../files/PCSInstructions.pptx";

const InstrucButton = ({ label }) => {
  return (
    <div className="flex justify-end h-10 px-2">
      <a href={PCSIntsructions}>
        <button
          className="bg-white hover:bg-gray-900 text-gray-900 font-bold 
                                hover:text-white py-2 px-2 border border-gray-900 
                                hover:border-transparent rounded"
        >
          {label}
        </button>
      </a>
    </div>
  );
};
export default InstrucButton;

