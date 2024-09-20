import React from 'react';
import SidebarItem from './SidebarItem.tsx';
import ProfileSection from './ProfileSection.tsx';

const sidebarItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0c15da1ea834dbf2c60745f03355154089df2a4750823f15efd93c3babeee0b1?placeholderIfAbsent=true&apiKey=66c4452a061e4e4eaa882fbb2cf298ce", label: "Dashboard", active: true },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/250fe6dc9a954a85216fb1e7d42d3e631d5412b3af89bfbd225bb3b3fead1cee?placeholderIfAbsent=true&apiKey=66c4452a061e4e4eaa882fbb2cf298ce", label: "Patients management" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/89978db81b2745dd698cdda249a6cb6d46ad2e215790c25387b5b36377073863?placeholderIfAbsent=true&apiKey=66c4452a061e4e4eaa882fbb2cf298ce", label: "Appointments" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e37141a3169dc7a6f19e41e595d5beb8736ec1cc119bbafa3bd700388e72187?placeholderIfAbsent=true&apiKey=66c4452a061e4e4eaa882fbb2cf298ce", label: "Department" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/281aa88326d28c059cb4fef5505ef3964e79331ed306f03785ffbd2b8bd21b79?placeholderIfAbsent=true&apiKey=66c4452a061e4e4eaa882fbb2cf298ce", label: "Inventory" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d8e48b40e0e5d7c604ec9bc69e476cf8d3db9c73f071350ff177dfb03597f01a?placeholderIfAbsent=true&apiKey=66c4452a061e4e4eaa882fbb2cf298ce", label: "Lab Reports" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/77f39d5b4bd702eaab8ca60d3d11baead7a46e103e538e2c0ca5a47c23f7bad8?placeholderIfAbsent=true&apiKey=66c4452a061e4e4eaa882fbb2cf298ce", label: "Help & Support" },
];

const profileItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/772724d793206966e0d04cc150198c8a1b29b9f7998ba7305087dce5378b3435?placeholderIfAbsent=true&apiKey=66c4452a061e4e4eaa882fbb2cf298ce", label: "Profile" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c54a74730f234b82b9ff26118f4805d67ae872e93cc7c06fa6a8946e852d3e15?placeholderIfAbsent=true&apiKey=66c4452a061e4e4eaa882fbb2cf298ce", label: "Settings" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d8466633f6aa413188ebe78c674f00aaa77262b0b71211ed7aaa86dd9967d0f?placeholderIfAbsent=true&apiKey=66c4452a061e4e4eaa882fbb2cf298ce", label: "Log Out" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col items-center px-2 pt-5 pb-48 mx-auto w-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pb-24 max-md:mt-3.5">
        <div className="flex gap-1 items-center max-w-full w-[134px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e48ae164eedc29cda308ade4ea067a017c8c2566123e5fdcb162b2fc00a8458?placeholderIfAbsent=true&apiKey=66c4452a061e4e4eaa882fbb2cf298ce" alt="User avatar" className="object-contain self-stretch my-auto rounded-2xl aspect-[1.01] w-[134px]" />
        </div>
        <nav className="flex flex-col self-stretch mt-9 w-full text-sm font-medium tracking-normal leading-none text-neutral-600">
          <ul className="flex flex-col max-w-full w-[216px]">
            {sidebarItems.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))}
          </ul>
        </nav>
        <ProfileSection items={profileItems} />
        <div className="flex gap-10 items-center mt-9 text-sm leading-8 min-h-[31px] text-neutral-600">
          <span className="self-stretch my-auto">Dark Mode</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7be84325c2fa30a1e2072dba840c548e7981a686fad626b618b4468c8edfe296?placeholderIfAbsent=true&apiKey=66c4452a061e4e4eaa882fbb2cf298ce" alt="Dark mode toggle" className="object-contain shrink-0 self-stretch my-auto aspect-[1.95] w-[37px]" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;