import React from "react";


const RefreshButton = (myEvents) => {
    let refresh = () => {

    }

    return (
        <div className="flex justify-center items-center">
          <div className="items-center">
            <button className="bg-white hover:bg-gray-900 text-gray-900 font-bold hover:text-white py-2 px-2 border border-gray-900 hover:border-transparent rounded"
            onClick={refresh}>
                Refresh
                </button>
          </div>
        </div>
    )
}

export default RefreshButton;
