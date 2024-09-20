import React from 'react';
import InventoryActions from './InventoryActions.tsx';


const InventoryOverview: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-between items-start self-stretch w-full font-medium whitespace-nowrap max-md:max-w-full">
      <h2 className="text-xl text-zinc-700">Syringe</h2>
      <InventoryActions />
    </div>
  );
};

export default InventoryOverview;