import CommentSnippet from './CommentSnippet';

function PersonalInfo() {
  const aboutMe = `  /**
    * About me
    * As a front-end with a year of hands-on experience and 
    * a solid foundation in the field, my heart beats for 
    * breathing life into designs.
  */  
  `;

  return (
    <article className='w-full-dvw text-lg text-[#607B96] xl:w-1/2'>
      <header className='border-b border-[#1E2D3D]'>
        <div className='flex h-11 w-60 items-center justify-between border-r border-[#1e2d3d] px-4 py-2'>
          <span className='text-xl'>personal-info</span>
          <span className='text-3xl'>&times;</span>
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
