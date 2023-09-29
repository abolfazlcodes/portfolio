import Image from 'next/image';
import dynamic from 'next/dynamic';

const DynamicCommentSnippet = dynamic(
  () => import('../ui/CommentSnippet'),
  {
    loading: () => <p>loading ...</p>,
    ssr: true,
  }
);
const DynamicCodeSnippet = dynamic(
  () => import('../ui/CodeSnippet'),
  {
    loading: () => <p>loading ...</p>,
    ssr: true,
  }
);

type IndexPageProps = {};

function AboutMe({}: IndexPageProps) {
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

  const codeSnippetOne = `
    function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
    const value: T = parseModel(chunk._response, chunk._value);
    const initializedChunk: InitializedChunk<T> = (chunk: any);
    initializedChunk._status = INITIALIZED;
    initializedChunk._value = value;
    return value;
    }
  `;

  return (
    <section className='box-border grid h-full grid-rows-1 bg-[#011627] sm:grid-cols-12 xl:grid-cols-7'>
      <aside className='hidden border sm:flex md:border-r md:border-[#1e2d3d]'>
        <ul className='flex w-full sm:flex-col sm:items-center sm:gap-8 sm:p-4'>
          <li className='cursor-pointer '>
            <svg
              width='22'
              height='23'
              viewBox='0 0 24 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g opacity='0.4' clip-path='url(#clip0_64_2230)'>
                <path
                  d='M3 3.65186H21C21.2652 3.65186 21.5196 3.75721 21.7071 3.94475C21.8946 4.13228 22 4.38664 22 4.65186V20.6519C22 20.9171 21.8946 21.1714 21.7071 21.359C21.5196 21.5465 21.2652 21.6519 21 21.6519H3C2.73478 21.6519 2.48043 21.5465 2.29289 21.359C2.10536 21.1714 2 20.9171 2 20.6519V4.65186C2 4.38664 2.10536 4.13228 2.29289 3.94475C2.48043 3.75721 2.73478 3.65186 3 3.65186ZM12 15.6519V17.6519H18V15.6519H12ZM8.414 12.6519L5.586 15.4799L7 16.8949L11.243 12.6519L7 8.40886L5.586 9.82386L8.414 12.6519Z'
                  fill='#607B96'
                />
              </g>
              <defs>
                <clipPath id='clip0_64_2230'>
                  <rect
                    width='24'
                    height='24'
                    fill='white'
                    transform='translate(0 0.651855)'
                  />
                </clipPath>
              </defs>
            </svg>
          </li>
          <li className='cursor-pointer'>
            <svg
              width='22'
              height='23'
              viewBox='0 0 24 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0_64_2227)'>
                <path
                  d='M5 20.6519H19V22.6519H5V20.6519ZM12 18.6519C9.87827 18.6519 7.84344 17.809 6.34315 16.3087C4.84285 14.8084 4 12.7736 4 10.6519C4 8.53012 4.84285 6.49529 6.34315 4.995C7.84344 3.49471 9.87827 2.65186 12 2.65186C14.1217 2.65186 16.1566 3.49471 17.6569 4.995C19.1571 6.49529 20 8.53012 20 10.6519C20 12.7736 19.1571 14.8084 17.6569 16.3087C16.1566 17.809 14.1217 18.6519 12 18.6519Z'
                  fill='#607B96'
                />
              </g>
              <defs>
                <clipPath id='clip0_64_2227'>
                  <rect
                    width='24'
                    height='24'
                    fill='white'
                    transform='translate(0 0.651855)'
                  />
                </clipPath>
              </defs>
            </svg>
          </li>
        </ul>
        <article className='hidden w-full border-x border-[#1E2D3D] px-1 xl:block'>
          <header className='border-b border-[#1E2D3D] px-7 py-2'>
            <h1 className='text-lg text-[#fff]'>contacts</h1>
          </header>
          <div className='my-2 mb-3 flex items-center gap-3 px-2 text-xl'>
            <svg
              width='14'
              height='16'
              viewBox='0 0 17 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.811096 0.548828H15.4108C15.6259 0.548828 15.8322 0.634283 15.9844 0.786393C16.1365 0.938503 16.2219 1.14481 16.2219 1.35992V14.3375C16.2219 14.5526 16.1365 14.7589 15.9844 14.911C15.8322 15.0631 15.6259 15.1486 15.4108 15.1486H0.811096C0.59598 15.1486 0.389675 15.0631 0.237565 14.911C0.0854545 14.7589 0 14.5526 0 14.3375V1.35992C0 1.14481 0.0854545 0.938503 0.237565 0.786393C0.389675 0.634283 0.59598 0.548828 0.811096 0.548828ZM8.15963 7.59158L2.95888 3.17516L1.90851 4.41127L8.17017 9.728L14.3191 4.40721L13.2582 3.18002L8.16044 7.59158H8.15963Z'
                fill='#607B96'
              />
            </svg>
            <p>user@gmail.com</p>
          </div>
          <div className='mb-3 flex items-center gap-3 px-2 text-xl'>
            <svg
              width='14'
              height='16'
              viewBox='0 0 17 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16.221 13.0453V16.2319C16.2211 16.46 16.1347 16.6797 15.9791 16.8466C15.8236 17.0136 15.6105 17.1153 15.3829 17.1312C14.9891 17.1583 14.6674 17.1727 14.4187 17.1727C6.45507 17.1727 0 10.7176 0 2.754C0 2.50527 0.0135175 2.18356 0.0414537 1.78975C0.0574246 1.56215 0.159129 1.34908 0.326046 1.19354C0.492962 1.038 0.712664 0.951557 0.940819 0.95166H4.12735C4.23913 0.951547 4.34696 0.992987 4.4299 1.06793C4.51283 1.14287 4.56495 1.24597 4.57613 1.35719C4.59686 1.56445 4.61578 1.72937 4.63381 1.85463C4.8129 3.10448 5.17992 4.32008 5.72242 5.4602C5.80803 5.64044 5.75215 5.85582 5.58994 5.97117L3.64522 7.36077C4.83427 10.1314 7.04222 12.3393 9.81282 13.5284L11.2006 11.5872C11.2573 11.5079 11.3401 11.4511 11.4345 11.4265C11.5288 11.402 11.6288 11.4113 11.717 11.453C12.857 11.9945 14.0723 12.3606 15.3217 12.5389C15.4469 12.5569 15.6118 12.5767 15.8173 12.5966C15.9284 12.6079 16.0312 12.6601 16.106 12.7431C16.1807 12.826 16.2221 12.9337 16.2219 13.0453H16.221Z'
                fill='#607B96'
              />
            </svg>
            <p>+989223110962</p>
          </div>
        </article>
      </aside>

      <main className='flex flex-col border-r border-[#1E2D3D] md:col-span-11 xl:col-span-6 xl:flex-row'>
        <article className='w-full-dvw text-lg text-[#607B96] xl:w-1/2'>
          <header className='border-b border-[#1E2D3D]'>
            <div className='flex h-11 w-60 items-center justify-between border-r border-[#1e2d3d] px-4 py-2'>
              <span className='text-xl'>personal-info</span>
              <span className='text-xl'>&times;</span>
            </div>
          </header>
          <div className='h-full px-8 md:max-h-[83.5dvh] md:overflow-y-scroll md:px-10'>
            <DynamicCommentSnippet
              comment={aboutMe}
              language='javascript'
              showLineNumbers={true}
            />
          </div>
        </article>

        <article className='w-full-dvw md:border-t md:border-[#1e2d3d] xl:w-1/2'>
          <header className='border-b border-[#1E2D3D]'>
            <div className='flex h-11 w-60 items-center justify-between border-[#1e2d3d]'></div>
          </header>
          <div className='h-full px-10 py-6 md:max-h-[83.5dvh] md:overflow-y-scroll'>
            <DynamicCommentSnippet
              comment={'// Code snippet showcase:'}
              language='javascript'
            />

            <div className='px-0 md:px-6'>
              {/* first code */}
              <article className='my-6'>
                <header className='mb-6 flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    <Image
                      src='/me.jpg'
                      alt='user'
                      width={40}
                      height={40}
                      className='rounded-full'
                    />
                    <div>
                      <h3 className='text-base font-bold text-[#5565E8] sm:text-xl'>
                        @abolfazlcodes
                      </h3>
                      <span className='text-base text-[#607B96] sm:text-lg'>
                        Created 5 months ago
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center gap-8'>
                    <button className='flex items-center gap-2'>
                      <svg
                        width='19'
                        height='19'
                        viewBox='0 0 19 19'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clip-path='url(#clip0_64_2763)'>
                          <path
                            d='M4.19676 15.1709C3.49928 14.4753 2.94616 13.6486 2.56917 12.7385C2.19218 11.8284 1.99875 10.8528 2.00001 9.86768C2.00001 5.72543 5.35776 2.36768 9.50001 2.36768C13.6423 2.36768 17 5.72543 17 9.86768C17 14.0099 13.6423 17.3677 9.50001 17.3677H2.00001L4.19676 15.1709ZM6.50001 10.6177C6.50001 11.4133 6.81608 12.1764 7.37869 12.739C7.94129 13.3016 8.70436 13.6177 9.50001 13.6177C10.2957 13.6177 11.0587 13.3016 11.6213 12.739C12.1839 12.1764 12.5 11.4133 12.5 10.6177H6.50001Z'
                            fill='#607B96'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_64_2763'>
                            <rect
                              width='18'
                              height='18'
                              fill='white'
                              transform='translate(0.5 0.867676)'
                            />
                          </clipPath>
                        </defs>
                      </svg>

                      <span className='text-base text-[#fff] sm:text-lg'>
                        details
                      </span>
                    </button>
                    <button className='hidden items-center gap-2 md:flex'>
                      <svg
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clip-path='url(#clip0_64_2766)'>
                          <path
                            d='M9.06073 14.5627L3.77098 17.5237L4.95223 11.5777L0.500977 7.46168L6.52123 6.74768L9.06073 1.24268L11.6002 6.74768L17.6205 7.46168L13.1692 11.5777L14.3505 17.5237L9.06073 14.5627Z'
                            fill='#607B96'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_64_2766'>
                            <rect
                              width='18'
                              height='18'
                              fill='white'
                              transform='translate(0.0605469 0.867676)'
                            />
                          </clipPath>
                        </defs>
                      </svg>

                      <span className='text-lg text-[#607B96]'>
                        3 stars
                      </span>
                    </button>
                  </div>
                </header>
                {/* code snippet */}
                <DynamicCodeSnippet code={codeSnippetOne} />
                {/* description for the code */}
                <div className='mt-8 flex justify-between border-t border-[#1E2D3D] py-6'>
                  <p className='w-5/6 text-base  text-[#607b96] sm:text-lg'>
                    My work here was 5 months ago. It was for the
                    project called “...”. Some other text can be
                    placed here.
                  </p>
                  <span className='text-3xl sm:text-4xl'>
                    &times;
                  </span>
                </div>
              </article>

              {/* first code */}
              <article className='my-6'>
                <header className='mb-6 flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    <Image
                      src='/me.jpg'
                      alt='user'
                      width={40}
                      height={40}
                      className='rounded-full'
                    />
                    <div>
                      <h3 className='text-base font-bold text-[#5565E8] sm:text-xl'>
                        @abolfazlcodes
                      </h3>
                      <span className='text-base text-[#607B96] sm:text-lg'>
                        Created 5 months ago
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center gap-8'>
                    <button className='flex items-center gap-2'>
                      <svg
                        width='19'
                        height='19'
                        viewBox='0 0 19 19'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clip-path='url(#clip0_64_2763)'>
                          <path
                            d='M4.19676 15.1709C3.49928 14.4753 2.94616 13.6486 2.56917 12.7385C2.19218 11.8284 1.99875 10.8528 2.00001 9.86768C2.00001 5.72543 5.35776 2.36768 9.50001 2.36768C13.6423 2.36768 17 5.72543 17 9.86768C17 14.0099 13.6423 17.3677 9.50001 17.3677H2.00001L4.19676 15.1709ZM6.50001 10.6177C6.50001 11.4133 6.81608 12.1764 7.37869 12.739C7.94129 13.3016 8.70436 13.6177 9.50001 13.6177C10.2957 13.6177 11.0587 13.3016 11.6213 12.739C12.1839 12.1764 12.5 11.4133 12.5 10.6177H6.50001Z'
                            fill='#607B96'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_64_2763'>
                            <rect
                              width='18'
                              height='18'
                              fill='white'
                              transform='translate(0.5 0.867676)'
                            />
                          </clipPath>
                        </defs>
                      </svg>

                      <span className='text-base text-[#fff] sm:text-lg'>
                        details
                      </span>
                    </button>
                    <button className='hidden items-center gap-2 md:flex'>
                      <svg
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clip-path='url(#clip0_64_2766)'>
                          <path
                            d='M9.06073 14.5627L3.77098 17.5237L4.95223 11.5777L0.500977 7.46168L6.52123 6.74768L9.06073 1.24268L11.6002 6.74768L17.6205 7.46168L13.1692 11.5777L14.3505 17.5237L9.06073 14.5627Z'
                            fill='#607B96'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_64_2766'>
                            <rect
                              width='18'
                              height='18'
                              fill='white'
                              transform='translate(0.0605469 0.867676)'
                            />
                          </clipPath>
                        </defs>
                      </svg>

                      <span className='text-lg text-[#607B96]'>
                        3 stars
                      </span>
                    </button>
                  </div>
                </header>
                {/* code snippet */}
                <DynamicCodeSnippet code={codeSnippetOne} />
                {/* description for the code */}
                <div className='mt-8 flex justify-between border-t border-[#1E2D3D] py-6'>
                  <p className='w-5/6 text-base  text-[#607b96] sm:text-lg'>
                    My work here was 5 months ago. It was for the
                    project called “...”. Some other text can be
                    placed here.
                  </p>
                  <span className='text-3xl sm:text-4xl'>
                    &times;
                  </span>
                </div>
              </article>

              {/* first code */}
              <article className='my-6'>
                <header className='mb-6 flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    <Image
                      src='/me.jpg'
                      alt='user'
                      width={40}
                      height={40}
                      className='rounded-full'
                    />
                    <div>
                      <h3 className='text-base font-bold text-[#5565E8] sm:text-xl'>
                        @abolfazlcodes
                      </h3>
                      <span className='text-base text-[#607B96] sm:text-lg'>
                        Created 5 months ago
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center gap-8'>
                    <button className='flex items-center gap-2'>
                      <svg
                        width='19'
                        height='19'
                        viewBox='0 0 19 19'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clip-path='url(#clip0_64_2763)'>
                          <path
                            d='M4.19676 15.1709C3.49928 14.4753 2.94616 13.6486 2.56917 12.7385C2.19218 11.8284 1.99875 10.8528 2.00001 9.86768C2.00001 5.72543 5.35776 2.36768 9.50001 2.36768C13.6423 2.36768 17 5.72543 17 9.86768C17 14.0099 13.6423 17.3677 9.50001 17.3677H2.00001L4.19676 15.1709ZM6.50001 10.6177C6.50001 11.4133 6.81608 12.1764 7.37869 12.739C7.94129 13.3016 8.70436 13.6177 9.50001 13.6177C10.2957 13.6177 11.0587 13.3016 11.6213 12.739C12.1839 12.1764 12.5 11.4133 12.5 10.6177H6.50001Z'
                            fill='#607B96'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_64_2763'>
                            <rect
                              width='18'
                              height='18'
                              fill='white'
                              transform='translate(0.5 0.867676)'
                            />
                          </clipPath>
                        </defs>
                      </svg>

                      <span className='text-base text-[#fff] sm:text-lg'>
                        details
                      </span>
                    </button>
                    <button className='hidden items-center gap-2 md:flex'>
                      <svg
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clip-path='url(#clip0_64_2766)'>
                          <path
                            d='M9.06073 14.5627L3.77098 17.5237L4.95223 11.5777L0.500977 7.46168L6.52123 6.74768L9.06073 1.24268L11.6002 6.74768L17.6205 7.46168L13.1692 11.5777L14.3505 17.5237L9.06073 14.5627Z'
                            fill='#607B96'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_64_2766'>
                            <rect
                              width='18'
                              height='18'
                              fill='white'
                              transform='translate(0.0605469 0.867676)'
                            />
                          </clipPath>
                        </defs>
                      </svg>

                      <span className='text-lg text-[#607B96]'>
                        3 stars
                      </span>
                    </button>
                  </div>
                </header>
                {/* code snippet */}
                <DynamicCodeSnippet code={codeSnippetOne} />
                {/* description for the code */}
                <div className='mt-8 flex justify-between border-t border-[#1E2D3D] py-6'>
                  <p className='w-5/6 text-base  text-[#607b96] sm:text-lg'>
                    My work here was 5 months ago. It was for the
                    project called “...”. Some other text can be
                    placed here.
                  </p>
                  <span className='text-3xl sm:text-4xl'>
                    &times;
                  </span>
                </div>
              </article>
            </div>
          </div>
        </article>
      </main>
    </section>
  );
}

export default AboutMe;
