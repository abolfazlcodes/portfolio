interface FormColProps {
  children: React.ReactNode;
  label: string;
  htmlFor: string;
}

function FormCol({ children, htmlFor, label }: FormColProps) {
  return (
    <div className='flex w-full flex-col sm:w-1/2'>
      <label htmlFor={htmlFor} className='mb-4 text-xl'>
        _{label}:
      </label>
      {children}
    </div>
  );
}

export default FormCol;
