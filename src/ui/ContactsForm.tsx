import Button from './Button';
import FormCol from './FormCol';
import Input from './Input';
import TextAreaInput from './TextAreaInput';
import { FormEvent } from 'react';

interface IFormProps {
  email: string;
  name: string;
  message: string;
  handleFormChange: (e: any) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

function ContactsForm({
  email,
  message,
  name,
  handleFormChange,
  handleSubmit,
}: IFormProps) {
  return (
    <form
      className='flex h-full max-h-[83.5dvh] flex-col items-center justify-center gap-8 px-10 py-6'
      onSubmit={handleSubmit}
    >
      <FormCol htmlFor='name' label='name'>
        <Input
          changeHandler={handleFormChange}
          id='name'
          name='name'
          placeholder='Your Name'
          value={name}
        />
      </FormCol>
      <FormCol htmlFor='email' label='email'>
        <Input
          changeHandler={handleFormChange}
          id='email'
          name='email'
          placeholder='your@email.com'
          value={email}
        />
      </FormCol>
      <FormCol htmlFor='message' label='message'>
        <TextAreaInput
          changeHandler={handleFormChange}
          id='message'
          name='message'
          placeholder='Your message'
          value={message}
        />
      </FormCol>

      <div className='flex w-full flex-col items-start sm:w-1/2'>
        <Button>submit-message</Button>
      </div>
    </form>
  );
}

export default ContactsForm;
