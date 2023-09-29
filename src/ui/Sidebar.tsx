import SidebarContacts from './SidebarContacts';
import SidebarLists from './SidebarLists';

function Sidebar() {
  return (
    <aside className='hidden border sm:flex md:border-r md:border-[#1e2d3d]'>
      <SidebarLists />
      <SidebarContacts />
    </aside>
  );
}

export default Sidebar;
