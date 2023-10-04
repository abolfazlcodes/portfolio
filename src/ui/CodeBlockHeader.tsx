import {
  DetailsIcon,
  StarFilledIcon,
} from '@/utils/iconsHelper';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import image from '../../public/me.jpg';

function CodeBlockHeader({
  onDetails,
}: {
  onDetails: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <header className='mb-6 flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <Image
          src={image}
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
        <button
          className='flex items-center gap-2'
          onClick={() => onDetails((prevState) => !prevState)}
        >
          <DetailsIcon />
          <span className='text-base text-[#fff] sm:text-lg'>
            details
          </span>
        </button>
        <button className='hidden items-center gap-2 md:flex'>
          <StarFilledIcon />
          <span className='text-lg text-[#607B96]'>3 stars</span>
        </button>
      </div>
    </header>
  );
}

export default CodeBlockHeader;
