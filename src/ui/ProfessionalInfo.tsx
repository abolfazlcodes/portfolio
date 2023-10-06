import CommentSnippet from './CommentSnippet';

function ProfessionalInfo() {
  const aboutMe = `  /**
    * I have worked as a front-end developer at Mizban
    * hosting company. I mainly worked on their 
    * admin-panel dashboards using React, TypeScript  
    * and Ant Design. 
    * Supported and collaborated with the UI/UX team 
    * to launch a successful dashboard redesign.
    * Developed highly reusable components with Ant Design 
    * and TypeScript to increase code efficiency.
    * 
    * Lead the complete dashboard overhaul, including
    * codebase refactoring to increase code readability.
  */  
  `;

  return (
    <article className='w-full-dvw text-lg text-[#607B96] xl:w-1/2'>
      <header className='border-b border-[#1E2D3D]'>
        <div className='flex h-11 w-72 items-center justify-between border-r border-[#1e2d3d] px-4 py-2'>
          <span className='text-xl'>professional-info</span>
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

export default ProfessionalInfo;
