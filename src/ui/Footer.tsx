import Link from 'next/link';
import { LuGithub, LuTwitter } from 'react-icons/lu';
import { BsMedium } from 'react-icons/bs';

function Footer() {
  return (
    <footer className='flex items-center justify-between border-t border-[#1E2D3D] px-4'>
      <div className='flex items-center gap-5'>
        <header>
          <h1 className='text-xl font-medium'>find me in:</h1>
        </header>
        <ul className='flex items-center'>
          <li className='cursor-pointer border-x border-[#1E2D3D] p-6 text-2xl font-medium duration-200 hover:text-[#FFF]'>
            <Link
              href='https://github.com/abolfazlcodes'
              target='_blank'
            >
              <LuGithub />
            </Link>
          </li>
          <li className='cursor-pointer border-r border-[#1E2D3D] p-6 text-2xl font-medium duration-200 hover:text-[#FFF]'>
            <Link
              href='https://twitter.com/abolfazlcodes'
              target='_blank'
            >
              <LuTwitter />
            </Link>
          </li>
          <li className='cursor-pointer border-r border-[#1E2D3D] p-6 text-2xl font-medium duration-200 hover:text-[#FFF]'>
            <Link
              href='https://abolfazlcodes.medium.com/'
              target='_blank'
            >
              <BsMedium />
            </Link>
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-3 text-2xl font-medium'>
        <span>@abolfazlcodes</span>
        <LuGithub />
      </div>
    </footer>
  );
}

export default Footer;
