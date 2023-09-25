import Link from 'next/link';

interface ListItemProps {
  link: string;
  title: string;
  index: number;
}

function ListItem({ link, title, index }: ListItemProps) {
  return (
    <li
      className={` group relative flex items-center justify-center border-[#1E2D3D] px-10 py-6 text-xl font-medium duration-200 hover:text-[#FFF] ${
        index >= 1 ? 'border-r' : 'border-x'
      } `}
    >
      <Link href={link}>{title}</Link>
      <span className='absolute bottom-0 left-0 block h-0 w-full bg-[#FEA55F] duration-200 group-hover:h-[3px]'></span>
    </li>
  );
}

export default ListItem;
