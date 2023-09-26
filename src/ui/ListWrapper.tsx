import { navigationLinks } from '@/constants';
import ListItem from './ListItem';
import { useRouter } from 'next/router';

function ListWrapper() {
  const { pathname } = useRouter();

  return (
    <ul
      data-testid='list-element'
      className='hidden w-10/12 md:relative md:ml-auto md:flex md:items-center'
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
