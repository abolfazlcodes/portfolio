import Link from 'next/link';

interface ListItemProps {
  link: string;
  title: string;
  index: number;
  active: boolean;
}

function ListItem({
  link,
  title,
  index,
  active,
}: ListItemProps) {
  return (
    <Link
      href={link}
      className={`group relative flex items-center justify-center border-[#1E2D3D] px-10 py-6 text-xl font-medium duration-200 hover:text-[#FFF] ${
        active && 'text-[#fff]'
      } ${index >= 1 ? 'border-r' : 'border-x'} `}
    >
      <li>{title}</li>
      <span
        className={`absolute bottom-0 left-0 block h-0 w-full bg-[#FEA55F] duration-200 group-hover:h-[3px] ${
          active && 'h-[3px]'
        }`}
      ></span>
    </Link>
  );
}

export default ListItem;
