interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className='flex w-max items-center justify-center rounded-lg bg-[#1E2D3D] px-8 py-4 text-base text-[#fff] sm:text-xl'
    >
      {children}
    </button>
  );
}

export default Button;
