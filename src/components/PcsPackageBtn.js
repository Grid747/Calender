import React from "react";
import PcsPackage from "../files/PcsPackage.pdf";

const PackageButton = ({ label }) => {
  return (
    <div className='flex h-10 pl-10'>
      <a href={PcsPackage} download>
        <button
          className='bg-white hover:bg-gray-900 text-gray-900 font-bold 
                                hover:text-white py-2 px-2 border border-gray-900 
                                hover:border-transparent rounded'
        >
          {label}
        </button>
      </a>
    </div>
  );
};
export default PackageButton;
