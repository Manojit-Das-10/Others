import React from 'react';

const InventoryTabs: React.FC = () => {
  return (
    <nav className="flex self-stretch mt-4 mr-9 text-base whitespace-nowrap max-md:mr-2.5 max-md:max-w-full">
      <div className="flex flex-col text-gray-600">
        <div className="max-md:mr-2.5">Overview</div>
        <div className="flex shrink-0 mt-2.5 h-0.5 bg-blue-600 rounded-xl" />
      </div>
      <div className="flex flex-col grow shrink-0 text-gray-500 basis-0 w-fit max-md:max-w-full">
        <div className="flex gap-5 justify-between ml-24 max-w-full w-[355px] max-md:ml-2.5">
          <div>Purchases</div>
          <div>Adjustments</div>
          <div>History</div>
        </div>
        <div className="shrink-0 mt-3 h-px bg-gray-100 border border-gray-100 border-solid max-md:max-w-full" />
      </div>
    </nav>
  );
};

export default InventoryTabs;