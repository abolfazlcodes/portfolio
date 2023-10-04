import { aboutMeTabs } from '@/constants';
import SidebarContacts from './SidebarContacts';
import SidebarListItem from './SidebarListItem';
import { Dispatch, SetStateAction } from 'react';

interface SidebarProps {
  showTabs?: boolean;
  setAboutMeTabs?: Dispatch<
    SetStateAction<'personal' | 'professional'>
  >;
}

function Sidebar({
  showTabs = true,
  setAboutMeTabs,
}: SidebarProps) {
  return (
    <aside
      className={`${
        showTabs ? '' : 'md:hidden xl:flex'
      } hidden sm:flex md:border-r md:border-[#1e2d3d]`}
    >
      {showTabs && (
        <ul className='flex w-full sm:flex-col sm:items-center sm:gap-8 sm:p-4'>
          {aboutMeTabs.map((tab) => (
            <SidebarListItem
              key={tab.id}
              name={tab.name}
              setAboutMeTab={setAboutMeTabs!}
            />
          ))}
        </ul>
      )}
      <SidebarContacts />
    </aside>
  );
}

export default Sidebar;
