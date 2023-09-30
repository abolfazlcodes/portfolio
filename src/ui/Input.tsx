import { ChangeEvent } from 'react';
type InputEvent = HTMLInputElement | HTMLTextAreaElement;

interface InputProps {
  name: string;
  id: string;
  placeholder: string;
  value: string;
  changeHandler: (e: ChangeEvent<InputEvent>) => void;
}

function Input({
  name,
  id,
  changeHandler,
  placeholder,
  value,
}: InputProps) {
  return (
    <input
      className='rounded-lg border-none bg-[#011221] p-4 text-lg tracking-wide text-[#465E77] shadow-input-shadow placeholder:text-[#465E77]'
      placeholder={placeholder}
      onChange={changeHandler}
      name={name}
      id={id}
      required
      value={value}
    />
  );
}

export default Input;
