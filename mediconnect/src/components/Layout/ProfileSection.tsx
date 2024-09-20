import React from 'react';
import SidebarItem from './SidebarItem.tsx';

interface ProfileItem {
  icon: string;
  label: string;
}

interface ProfileSectionProps {
  items: ProfileItem[];
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ items }) => {
  return (
    <section className="flex flex-col mt-10 w-full rounded-none max-w-[216px]">
      {items.map((item, index) => (
        <SidebarItem key={index} {...item} />
      ))}
    </section>
  );
};

export default ProfileSection;