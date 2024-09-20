import React from 'react';
import Sidebar from './Sidebar.tsx';
import Header from './Header.tsx';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="overflow-hidden pr-3.5 bg-slate-50">
      <div className="flex gap-5 max-md:flex-col">
        <Sidebar />
        <main className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
          <Header />
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;