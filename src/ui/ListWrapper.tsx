import { navigationLinks } from '@/constants';
import ListItem from './ListItem';

function ListWrapper() {
  return (
    <ul className='relative ml-auto flex w-10/12 items-center'>
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
