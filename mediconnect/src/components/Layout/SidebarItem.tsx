import React from 'react';

interface SidebarItemProps {
  icon: string;
  label: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active }) => {
  const baseClasses = "flex gap-4 justify-center items-center py-3 pr-2 pl-2 w-full rounded-lg";
  const activeClasses = active ? "font-bold text-white bg-indigo-700" : "bg-white";

  return (
<li className={`${baseClasses} ${activeClasses} ${active ? '' : 'mt-2.5'}`}>
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[0.96] w-[22px]" />
      <span className="self-stretch my-auto w-[161px]">{label}</span>
    </li>
  );
};

export default SidebarItem;