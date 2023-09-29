import Sidebar from '@/ui/Sidebar';

function ContactMe() {
  return (
    <section className='grid h-full grid-rows-1 bg-[#011627] sm:grid-cols-12 xl:grid-cols-7'>
      <Sidebar showTabs={false} />

      <main className='flex flex-col border-r border-[#1E2D3D] md:col-span-11 xl:col-span-6 xl:flex-row'>
        <div className='w-full-dvw xl:w-1/2'>
          <header className='border-b border-[#1E2D3D]'>
            <div className='flex h-11 w-60 items-center justify-between border-[#1e2d3d] px-8'>
              <span className='text-xl'>contacts</span>
              <span className='text-3xl'>&times;</span>
            </div>
          </header>
          {/*  md:max-h-[83.5dvh] md:overflow-y-scroll */}
          <form className='flex h-full max-h-[83.5dvh] flex-col items-center justify-center gap-8 px-10 py-6'>
            <div className='flex w-1/2 flex-col'>
              <label htmlFor='name' className='mb-4 text-xl'>
                _name:
              </label>
              <input
                className='shadow-input-shadow rounded-lg border-none bg-[#011221] p-4 text-base tracking-wide text-[#465E77] placeholder:text-[#465E77] focus:border focus:border-[#465e77] active:border'
                placeholder='Jonathan Davis'
              />
            </div>

            <div className='flex w-1/2 flex-col'>
              <label htmlFor='email' className='mb-4 text-xl'>
                _email:
              </label>
              <input
                className='shadow-input-shadow rounded-lg border-none bg-[#011221] p-4 text-base tracking-wide text-[#465E77] placeholder:text-[#465E77] focus:border focus:border-[#465e77]'
                placeholder='abolfazl@gmail.com'
              />
            </div>

            <div className='flex w-1/2 flex-col'>
              <label htmlFor='message' className='mb-4 text-xl'>
                _message:
              </label>
              <textarea
                name='message'
                id='message'
                cols={30}
                rows={10}
                className='shadow-input-shadow rounded-lg border-none bg-[#011221] p-4 text-base tracking-wide text-[#465E77] placeholder:text-[#465E77] focus:border focus:border-[#465e77]'
              ></textarea>
            </div>
          </form>
        </div>
        <div className='w-full-dvw xl:w-1/2'>
          <header className='border-b border-[#1E2D3D]'>
            <div className='flex h-11 w-60 items-center justify-between border-[#1e2d3d]'></div>
          </header>

          <div className='h-full border px-10 py-6 md:max-h-[83.5dvh] md:overflow-y-scroll'>
            form result
          </div>
        </div>
      </main>
    </section>
  );
}

export default ContactMe;
