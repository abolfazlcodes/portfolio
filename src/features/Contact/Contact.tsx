import Button from '@/ui/Button';
import CodeSnippetContact from '@/ui/CodeSnippetContact';
import FormCol from '@/ui/FormCol';
import Input from '@/ui/Input';
import Sidebar from '@/ui/Sidebar';
import TextAreaInput from '@/ui/TextAreaInput';
import { ChangeEvent, FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

type InputEvent = HTMLInputElement | HTMLTextAreaElement;

function Contact() {
  const date = new Date().toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
    day: '2-digit',
  });

  const [contactForm, setContactForm] = useState<{
    name: string;
    email: string;
    message: string;
    date: string;
  }>({
    name: '',
    email: '',
    message: '',
    date,
  });

  const handleContactChange = (e: ChangeEvent<InputEvent>) => {
    const updatedContactForm = {
      ...contactForm,
      [e.target.name]: e.target.value,
    };

    setContactForm(updatedContactForm);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailTemplate = {
      to_name: 'abolfazl',
      from_name: `${contactForm.name} - email: ${contactForm.email} - date: ${contactForm.date}`,
      message: contactForm.message,
    };
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!,
        emailTemplate,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY_ID!
      )
      .then(
        function (response) {
          console.log('SUCCESS!');
        },
        function (error) {
          console.log('FAILED...');
        }
      )
      .finally(() => {
        setContactForm({
          date,
          name: '',
          email: '',
          message: '',
        });
      });
  };

  return (
    <>
      <Sidebar showTabs={false} />

      <main className='flex flex-col border-r border-[#1E2D3D] md:col-span-11 md:w-full-dvw xl:col-span-6 xl:flex-row'>
        <div className='w-full border-r border-[#1E2D3D] xl:w-1/2'>
          <header className='border-b border-[#1E2D3D]'>
            <div className='flex h-11 w-60 items-center justify-between border-r border-[#1e2d3d] px-8'>
              <span className='text-xl'>contacts</span>
              <span className='text-3xl'>&times;</span>
            </div>
          </header>

          <form
            className='flex h-full max-h-[83.5dvh] flex-col items-center justify-center gap-8 px-10 py-6'
            onSubmit={handleSubmit}
          >
            <FormCol htmlFor='name' label='name'>
              <Input
                changeHandler={handleContactChange}
                id='name'
                name='name'
                placeholder='Your Name'
                value={contactForm.name}
              />
            </FormCol>
            <FormCol htmlFor='email' label='email'>
              <Input
                changeHandler={handleContactChange}
                id='email'
                name='email'
                placeholder='your@email.com'
                value={contactForm.email}
              />
            </FormCol>
            <FormCol htmlFor='message' label='message'>
              <TextAreaInput
                changeHandler={handleContactChange}
                id='message'
                name='message'
                placeholder='Your message'
                value={contactForm.message}
              />
            </FormCol>

            <div className='flex w-full flex-col items-start sm:w-1/2'>
              <Button>submit-message</Button>
            </div>
          </form>
        </div>

        <div className='w-full xl:w-1/2'>
          <header className='border-x border-b border-[#1E2D3D]'>
            <div className='flex h-11 w-60 items-center justify-between border-[#1e2d3d]'></div>
          </header>

          <article className='flex h-full items-center justify-center px-10 py-6 md:max-h-[83.5dvh] md:overflow-y-scroll'>
            <CodeSnippetContact
              email={contactForm.email}
              name={contactForm.name}
              message={contactForm.message}
              date={contactForm.date}
            />
          </article>
        </div>
      </main>
    </>
  );
}

export default Contact;
