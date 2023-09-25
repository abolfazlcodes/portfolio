import Link from 'next/link';
import ListWrapper from './ListWrapper';
import Logo from './Logo';

function Navbar() {
  return (
    <nav className='flex items-center justify-between border-b border-[#1E2D3D] px-4'>
      <div className='flex w-11/12 items-center'>
        <Logo />
        <ListWrapper />
      </div>
      <div className='group relative w-1/12 justify-end border-l border-[#1E2D3D]'>
        <Link
          href='/contact-me'
          className='h-18 flex w-full items-center justify-center text-xl font-medium duration-200 hover:text-[#FFF]'
        >
          _contacts-me
        </Link>
        <span className='absolute bottom-0 left-0 block h-0 w-full bg-[#FEA55F] duration-200  group-hover:h-[3px]'></span>
      </div>
    </nav>
  );
}

export default Navbar;
