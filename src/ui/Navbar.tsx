import Link from 'next/link';

function Navbar() {
  return (
    <nav className='flex items-center justify-between border-b border-[#607B96] px-4'>
      <div className='flex w-11/12 items-center'>
        <h1 className='text-xl font-medium duration-200 hover:text-[#FFF]'>
          <Link href='/'>abolfazl-jamshidi</Link>
        </h1>
        <ul className='relative ml-auto flex w-10/12 items-center'>
          <li className='group relative flex items-center justify-center border-x border-[#607B96] px-10 py-6 text-xl font-medium duration-200 hover:text-[#FFF]'>
            <Link href='/'>_hello</Link>
            <span className='absolute bottom-0 left-0 block h-0 w-full bg-[#FEA55F] duration-200 group-hover:h-[3px]'></span>
          </li>
          <li className='group relative flex items-center justify-center border-r border-[#607B96]  px-10 py-6 text-xl font-medium duration-200 hover:text-[#FFF]'>
            <Link href='/'>_about-me</Link>
            <span className='absolute bottom-0 left-0 block h-0 w-full bg-[#FEA55F] duration-200 group-hover:h-[3px]'></span>
          </li>
          <li className='group relative flex items-center justify-center border-r border-[#607B96] px-10 py-6 text-xl font-medium duration-200 hover:text-[#FFF]'>
            <Link href='/'>_projects</Link>
            <span className='absolute bottom-0 left-0 block h-0 w-full bg-[#FEA55F] duration-200 group-hover:h-[3px]'></span>
          </li>
        </ul>
      </div>
      <div className='group relative w-1/12 justify-end border-l border-[#607b96]'>
        <Link
          href='/'
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
