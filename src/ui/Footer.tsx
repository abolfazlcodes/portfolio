import Link from 'next/link';
import { LuGithub, LuTwitter } from 'react-icons/lu';
import { BsMedium } from 'react-icons/bs';

function Footer() {
  return (
    <footer
      data-testid='element-footer'
      className='flex items-center justify-between border-t border-[#1E2D3D] px-4'
    >
      <div className='flex w-full items-center justify-between gap-5 md:justify-normal'>
        <header data-testid='element-footer-header'>
          <h1 className='text-2xl font-medium'>find me in:</h1>
        </header>
        <ul
          data-testid='element-footer-list'
          className='flex items-center justify-end'
        >
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
      <div className='hidden items-center gap-3 text-2xl font-medium md:flex'>
        <span data-testid='element-username-span'>
          @abolfazlcodes
        </span>
        <LuGithub />
      </div>
    </footer>
  );
}

export default Footer;
