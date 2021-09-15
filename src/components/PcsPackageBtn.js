import React from "react";
import PcsPackage from "../files/PcsPackage.pdf";

const PackageButton = ({ label }) => {
  return (
    <div className='flex py-2'>
      <p className='pt-1 pr-1 font-medium'>Inprocessing files: </p>
      <a href={PcsPackage} download>
        <button
          className='bg-transparent hover:bg-gray-900 text-gray-900 font-bold 
                                hover:text-white py-1 px-2 border border-gray-900 
                                hover:border-transparent rounded'
        >
          {label}
        </button>
      </a>
    </div>
  );
};
export default PackageButton;
