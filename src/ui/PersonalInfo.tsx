import CommentSnippet from './CommentSnippet';

function PersonalInfo() {
  const aboutMe = `  /**
    * About me
    * I have 5 years of еxperience in web
    * development lorem ipsum dolor sit amet, 
    * consectetur adipiscing elit, sed do eiusmod
    * tempor incididunt ut labore et dolore
    * magna aliqua. Ut enim ad minim veniam,
    * quis nostrud exercitation ullamco laboris
    * nisi ut aliquip ex ea commodo consequat.
    * Duis aute irure dolor in reprehenderit in
    *
    * Duis aute irure dolor in reprehenderit in
    * voluptate velit esse cillum dolore eu fugiat 
    * nulla pariatur. Excepteur sint occaecat 
    * officia deserunt mollit anim id est laborum.
  */  
  `;

  return (
    <article className='w-full-dvw text-lg text-[#607B96] xl:w-1/2'>
      <header className='border-b border-[#1E2D3D]'>
        <div className='flex h-11 w-60 items-center justify-between border-r border-[#1e2d3d] px-4 py-2'>
          <span className='text-xl'>personal-info</span>
          <span className='text-xl'>&times;</span>
        </div>
      </header>
      <div className='h-full px-8 md:max-h-[83.5dvh] md:overflow-y-scroll md:px-10'>
        <CommentSnippet
          comment={aboutMe}
          language='javascript'
          showLineNumbers={true}
        />
      </div>
    </article>
  );
}

export default PersonalInfo;
