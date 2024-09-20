import React from 'react';

const PrimaryDetails: React.FC = () => {
  return (
    <div className="flex flex-col items-start text-gray-400">
      <h3 className="self-stretch text-base font-semibold text-gray-600 max-md:mr-1">
        Primary Details
      </h3>
      <div className="mt-5 leading-none">Product name</div>
      <div className="mt-8 leading-none">Product ID</div>
      <div className="self-stretch mt-8 leading-none max-md:mr-1.5">
        Product category
      </div>
      <div className="mt-8 leading-none">Expiry Date</div>
      <div className="mt-8 leading-none">Threshold Value</div>
    </div>
  );
};

export default PrimaryDetails;