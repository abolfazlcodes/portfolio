import Button from './Button';
import { Dispatch, SetStateAction } from 'react';

interface IContactsMessageProps {
  setShowForm: Dispatch<SetStateAction<boolean>>;
}

function ContactsMessage({
  setShowForm,
}: IContactsMessageProps) {
  return (
    <div className='flex h-full max-h-[83.5dvh] w-full-dvw flex-col items-center justify-center gap-8 py-6 md:m-auto md:w-full md:px-10'>
      <h1 className='text-2xl text-[#fff] md:text-4xl'>
        Thank you! 🤟
      </h1>
      <p className='text-center text-xl md:text-2xl'>
        Your message has been accepted. You will receive answer
        really soon!
      </p>
      <Button onClick={() => setShowForm(true)}>
        send-new-message
      </Button>
    </div>
  );
}

export default ContactsMessage;
