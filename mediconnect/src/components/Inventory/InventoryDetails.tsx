import React from 'react';
import InventoryOverview from './InventoryOverview.tsx';
import InventoryActions from './InventoryActions.tsx';
import InventoryTabs from './InventoryTabs.tsx';
import PrimaryDetails from './PrimaryDetails.tsx';
import SupplierDetails from './SupplierDetails.tsx';
import StockDetails from './StockDetails.tsx';
import StockLocations from './StockLocations.tsx';

const InventoryDetails: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col items-start self-center px-4 py-3.5 mt-16 w-full bg-white rounded-lg max-w-[1096px] max-md:mt-10 max-md:max-w-full">
      <InventoryOverview />
      <InventoryActions />
      <InventoryTabs />
      <div className="flex flex-wrap gap-5 justify-between self-center mt-6 w-full max-w-[985px] max-md:max-w-full">
        <div className="flex gap-10 mt-1.5 text-sm font-medium">
          <PrimaryDetails />
          <SupplierDetails />
        </div>
        <StockDetails />
      </div>
      <StockLocations />
    </section>
  );
};

export default InventoryDetails;