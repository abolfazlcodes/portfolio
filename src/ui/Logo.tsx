import Link from 'next/link';

function Logo() {
  return (
    <h1 className='w-full py-8 text-3xl font-medium duration-200 hover:text-[#FFF] md:w-4/12 md:text-2xl lg:w-max'>
      <Link href='/'>abolfazl-jamshidi</Link>
    </h1>
  );
}

export default Logo;
