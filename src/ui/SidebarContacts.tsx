import { EmailIcon, PhoneIcon } from '@/utils/iconsHelper';

function SidebarContacts() {
  return (
    <article className='hidden w-full border-x border-[#1E2D3D] px-1 xl:block'>
      <header className='border-b border-[#1E2D3D] px-7 py-2'>
        <h1 className='text-lg text-[#fff]'>contacts</h1>
      </header>
      <div className='my-2 mb-3 flex items-center gap-3 px-2 text-xl'>
        <EmailIcon />
        <p>user@gmail.com</p>
      </div>
      <div className='mb-3 flex items-center gap-3 px-2 text-xl'>
        <PhoneIcon />
        <p>+989223110962</p>
      </div>
    </article>
  );
}

export default SidebarContacts;
