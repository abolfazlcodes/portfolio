import {
  PersonalInfoIcon,
  ProfessionalInfoIcon,
} from '@/utils/iconsHelper';

interface SidebarListItemProps {
  name: string;
}

function SidebarListItem({ name }: SidebarListItemProps) {
  return (
    <li className='cursor-pointer'>
      {name === 'personal_info' ? (
        <PersonalInfoIcon />
      ) : (
        <ProfessionalInfoIcon />
      )}
    </li>
  );
}

export default SidebarListItem;
