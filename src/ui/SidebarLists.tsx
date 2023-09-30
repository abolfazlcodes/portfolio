import { aboutMeTabs } from '@/constants';
import SidebarListItem from './SidebarListItem';

function SidebarLists() {
  return (
    <ul className='flex w-full sm:flex-col sm:items-center sm:gap-8 sm:p-4'>
      {aboutMeTabs.map((tab) => (
        <SidebarListItem key={tab.id} name={tab.name} />
      ))}
    </ul>
  );
}

export default SidebarLists;
