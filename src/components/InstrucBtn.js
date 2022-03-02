import React from "react";
import PCSIntsructions from "../files/PCSInstructions.pptx";

const InstrucButton = ({ label }) => {
  return (
    <div>
      <a href={PCSIntsructions}>
        <button
          className="bg-white rounded-lg border border-black hover:bg-yellow-200 text-gray-900 
          py-2 px-2"
        >
          {label}
        </button>
      </a>
    </div>
  );
};
export default InstrucButton;
