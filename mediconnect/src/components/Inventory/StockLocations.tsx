import React from 'react';

interface StockLocation {
  storeName: string;
  stockInHand: number;
}

const stockLocations: StockLocation[] = [
  { storeName: "Sulur Branch", stockInHand: 15 },
  { storeName: "Singanallur Branch", stockInHand: 19 },
];

const StockLocations: React.FC = () => {
  return (
    <section className="w-full">
      <h3 className="mt-11 ml-7 text-base font-semibold text-gray-600 max-md:mt-10 max-md:ml-2.5">
        Stock Locations
      </h3>
      <div className="flex flex-wrap gap-5 justify-between px-1.5 py-2.5 mt-5 ml-5 max-w-full text-sm font-semibold leading-none text-gray-500 border-b border-solid bg-gray-100 bg-opacity-50 border-b-gray-100 w-[689px]">
        <div>Store Name</div>
        <div>Stock in hand</div>
      </div>
      {stockLocations.map((location, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-wrap gap-5 justify-between mt-5 ml-7 max-w-full text-sm font-medium leading-none w-[641px]">
            <div className="text-gray-400">{location.storeName}</div>
            <div className="text-blue-600">{location.stockInHand}</div>
          </div>
          {index < stockLocations.length - 1 && (
            <div className="shrink-0 mt-3 ml-7 max-w-full h-px bg-gray-100 border border-gray-100 border-solid w-[684px]" />
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default StockLocations;