import React from 'react';

const InventoryActions: React.FC = () => {
  return (
    <div className="flex gap-3 mt-1.5 text-sm leading-none text-gray-500">
      <button className="flex overflow-hidden gap-2 justify-center items-center px-4 py-2.5 rounded-lg border border-solid border-stone-300 shadow-sm">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bc387134b226307e60884cddaf881cacfe6fe32aa1878a0654de0834097ee26?placeholderIfAbsent=true&apiKey=66c4452a061e4e4eaa882fbb2cf298ce" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
        <span className="self-stretch my-auto">Edit</span>
      </button>
      <button className="overflow-hidden gap-2 self-stretch px-4 py-2.5 rounded border border-gray-300 border-solid shadow-sm">
        Download
      </button>
    </div>
  );
};

export default InventoryActions;