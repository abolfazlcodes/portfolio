import Image from 'next/image';

function CodeBlockHeader() {
  return (
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

          <span className='text-lg text-[#607B96]'>3 stars</span>
        </button>
      </div>
    </header>
  );
}

export default CodeBlockHeader;
