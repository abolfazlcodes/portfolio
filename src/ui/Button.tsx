import Link from 'next/link';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  link?: string;
}

function Button({ onClick, children, link }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className='flex w-max items-center justify-center rounded-lg bg-[#1E2D3D] px-8 py-4 text-base text-[#fff] sm:text-xl'
    >
      {link && (
        <Link href={link} target='_blank'>
          {children}
        </Link>
      )}

      {!link && children}
    </button>
  );
}

export default Button;
