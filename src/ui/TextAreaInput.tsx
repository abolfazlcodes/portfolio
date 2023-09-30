import { ChangeEvent } from 'react';
type InputEvent = HTMLInputElement | HTMLTextAreaElement;

interface TextAreaInputProps {
  name: string;
  id: string;
  placeholder: string;
  value: string;
  changeHandler: (e: ChangeEvent<InputEvent>) => void;
}

function TextAreaInput({
  changeHandler,
  id,
  name,
  placeholder,
  value,
}: TextAreaInputProps) {
  return (
    <textarea
      name={name}
      id={id}
      cols={30}
      rows={10}
      required
      value={value}
      onChange={changeHandler}
      placeholder={placeholder}
      className='rounded-lg border-none bg-[#011221] p-4 text-lg tracking-wide text-[#465E77] shadow-input-shadow placeholder:text-[#465E77]'
    ></textarea>
  );
}

export default TextAreaInput;
