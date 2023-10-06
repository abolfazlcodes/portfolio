import { navigationLinks } from '@/constants';
import ListItem from './ListItem';
import { useRouter } from 'next/router';

function ListWrapper({ showMenu }: { showMenu: boolean }) {
  const { pathname } = useRouter();

  return (
    <ul
      data-testid='list-element'
      className={`${
        showMenu ? 'md:flex' : 'hidden'
      } max-[640px]:absolute max-[640px]:left-0 max-[640px]:top-20 max-[640px]:z-20 max-[640px]:h-full-dvh max-[640px]:w-full max-[640px]:bg-[#011627] md:relative md:ml-auto md:flex md:w-10/12 md:items-center`}
    >
      {navigationLinks.map((linkItem, index) => (
        <ListItem
          key={linkItem.id}
          link={linkItem.link}
          title={linkItem.title}
          index={index}
          active={pathname === linkItem.link}
        />
      ))}
    </ul>
  );
}

export default ListWrapper;
