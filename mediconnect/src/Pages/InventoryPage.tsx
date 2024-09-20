import React from 'react';
import Layout from '../components/Layout/Layout.tsx';
import InventoryDetails from '../components/Inventory/InventoryDetails.tsx';

const InventoryPage: React.FC = () => {
  return (
    <Layout>
      <InventoryDetails />
    </Layout>
  );
};

export default InventoryPage;