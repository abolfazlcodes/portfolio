function Loader() {
  return (
    <section
      data-testid='section-element'
      className='absolute left-0 top-0 z-10 flex h-full w-full animate-fadeout-loader flex-col items-center justify-center bg-[#232323]'
    >
      <article>
        <div className='relative'>
          <h1
            data-testid='element-title'
            className='animate-fadeIn-title text-4xl font-normal capitalize leading-[6rem] text-[#E5E9F0] opacity-0 md:text-4.2'
          >
            abolfazl jamshidi
          </h1>
          <span className='absolute left-0 top-0 h-full w-0 animate-load-title bg-[#43d9ad]'></span>
        </div>
        <div className='relative'>
          <p
            data-testid='element-role'
            className='animate-fadeIn-role text-2xl font-medium text-[#4D5BCE] opacity-0 md:text-4xl'
          >
            &gt; Front-end developer
          </p>
          <span className='absolute left-0 top-0 h-full w-0 animate-load-role bg-[#4D5BCE]'></span>
        </div>
      </article>
    </section>
  );
}

export default Loader;
