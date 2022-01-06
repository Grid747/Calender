import React from "react";
import PcsPackage from "../files/PcsPackage.pdf";

const PackageButton = ({ label }) => {
  return (
    <div className='flex justify-end h-10'>
      <a href={PcsPackage} download>
        <button
          className='bg-white rounded-lg border border-black hover:bg-yellow-200 text-gray-900 py-2 px-2'
        >
          {label}
        </button>
      </a>
    </div>
  );
};
export default PackageButton;
