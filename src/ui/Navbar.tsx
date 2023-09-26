import Link from 'next/link';
import ListWrapper from './ListWrapper';
import Logo from './Logo';
import { LuAlignRight } from 'react-icons/lu';

function Navbar() {
  return (
    <nav className='flex items-center justify-between border-b border-[#1E2D3D] px-4'>
      <div className='flex w-10/12 items-center'>
        <Logo />
        <ListWrapper />
      </div>
      <div className='group relative hidden w-2/12 justify-end border-l border-[#1E2D3D] text-[#607B96] md:flex'>
        <Link
          href='/contact-me'
          className='flex h-18 w-full items-center justify-end text-xl font-medium duration-200 hover:text-[#FFF]'
        >
          _contact-me
        </Link>
        <span className='absolute bottom-0 left-0 block h-0 w-full bg-[#FEA55F] duration-200  group-hover:h-[3px]'></span>
      </div>
      <div className='flex w-2/12 cursor-pointer items-center justify-end text-4xl font-medium md:hidden'>
        <LuAlignRight />
      </div>
    </nav>
  );
}

export default Navbar;
