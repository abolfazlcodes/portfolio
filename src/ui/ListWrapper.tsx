import { navigationLinks } from '@/constants';
import ListItem from './ListItem';

function ListWrapper() {
  return (
    <ul className='hidden w-10/12 md:relative md:ml-auto md:flex md:items-center'>
      {navigationLinks.map((linkItem, index) => (
        <ListItem
          key={linkItem.id}
          link={linkItem.link}
          title={linkItem.title}
          index={index}
        />
      ))}
    </ul>
  );
}

export default ListWrapper;
