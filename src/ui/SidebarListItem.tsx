import {
  PersonalInfoIcon,
  ProfessionalInfoIcon,
} from '@/utils/iconsHelper';
import { Dispatch, SetStateAction } from 'react';

interface SidebarListItemProps {
  name: string;
  setAboutMeTab: Dispatch<
    SetStateAction<'personal' | 'professional'>
  >;
}

function SidebarListItem({
  name,
  setAboutMeTab,
}: SidebarListItemProps) {
  return (
    <li
      className='cursor-pointer'
      onClick={() =>
        setAboutMeTab(
          name === 'personal_info' ? 'personal' : 'professional'
        )
      }
    >
      <span className='block duration-200 hover:-translate-y-2'>
        {name === 'personal_info' ? (
          <ProfessionalInfoIcon />
        ) : (
          <PersonalInfoIcon />
        )}
      </span>
    </li>
  );
}

export default SidebarListItem;
