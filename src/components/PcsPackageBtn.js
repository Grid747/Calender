import React from "react";
import PcsPackage from "../files/PcsPackage.pdf";

const PackageButton = ({ label }) => {
  return (
    <div className='flex justify-end h-10'>
      <a href={PcsPackage} download>
        <button
          className='bg-white rounded hover:bg-gray-300 text-gray-900 font-bold 
                                py-2 px-2 border border-gray-900 
                                '
        >
          {label}
        </button>
      </a>
    </div>
  );
};
export default PackageButton;

