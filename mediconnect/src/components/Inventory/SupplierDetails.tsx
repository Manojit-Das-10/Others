import React from 'react';

const SupplierDetails: React.FC = () => {
  return (
    <div className="flex flex-col items-start self-end mt-11 leading-none text-gray-500 max-md:mt-10">
      <div>Syringe</div>
      <div className="mt-8">456567</div>
      <div className="mt-8">Instant food</div>
      <div className="mt-8">13/4/23</div>
      <div className="mt-8">12</div>
      <h3 className="self-stretch mt-20 text-base font-semibold text-gray-600 max-md:mt-10">
        Supplier Details
      </h3>
      <div className="mt-5 leading-none">Supplier name</div>
      <div className="self-stretch mt-8 leading-none max-md:mr-2.5">
        Contact Number
      </div>
      <div className="self-stretch mt-20 max-md:mt-10">Ronald Martin</div>
      <div className="self-stretch mt-8 max-md:mr-1">98789 86757</div>
    </div>
  );
};

export default SupplierDetails;