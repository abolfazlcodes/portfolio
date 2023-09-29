import SidebarListItem from './SidebarListItem';

function SidebarLists() {
  return (
    <ul className='flex w-full sm:flex-col sm:items-center sm:gap-8 sm:p-4'>
      <SidebarListItem />
      <SidebarListItem />
    </ul>
  );
}

export default SidebarLists;
