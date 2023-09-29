import SidebarContacts from './SidebarContacts';
import SidebarLists from './SidebarLists';

function Sidebar({ showTabs = true }: { showTabs?: boolean }) {
  return (
    <aside className='hidden border sm:flex md:border-r md:border-[#1e2d3d]'>
      {showTabs && <SidebarLists />}
      <SidebarContacts />
    </aside>
  );
}

export default Sidebar;
