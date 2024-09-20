import React from 'react';

const StockDetails: React.FC = () => {
  return (
    <div className="flex gap-3.5">
      <div className="flex flex-col items-start">
        <div className="flex flex-col justify-center items-center self-end px-3 bg-white border border-dashed border-neutral-400 h-[172px] w-[172px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c1eec6659e74b7ef3938580a36a304c33389232f1ad377f2b260c6c8ac49b07?placeholderIfAbsent=true&apiKey=66c4452a061e4e4eaa882fbb2cf298ce" alt="Product image" className="object-contain w-full aspect-square" />
        </div>
        <div className="mt-16 text-base text-gray-400 max-md:mt-10">Opening Stock</div>
        <div className="mt-7 text-base text-gray-400">Remaining Stock</div>
        <div className="mt-8 text-base text-gray-400">On the way</div>
        <div className="mt-9 text-base text-gray-400">Threshold value</div>
      </div>
      <div className="flex flex-col self-end mt-60 text-base font-medium text-gray-500 whitespace-nowrap max-md:mt-10">
        <div>40</div>
        <div className="mt-7">34</div>
        <div className="self-start mt-8">15</div>
        <div className="self-start mt-9">12</div>
      </div>
    </div>
  );
};

export default StockDetails;