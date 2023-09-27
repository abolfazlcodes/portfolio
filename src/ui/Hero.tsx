import Link from 'next/link';
import SingleLineCodeBlock from './SingleLineCodeBlock';
import Comment from './Comment';
import { CODE_LINK } from '@/constants';

/* eslint-disable react/jsx-no-comment-textnodes */
function Hero() {
  return (
    <header
      data-testid='element-header'
      className='flex h-2/3 w-1/3 flex-col justify-evenly'
    >
      <div>
        <p className='text-xl font-medium text-[#E5E9F0]'>
          Hi all. I am
        </p>
        <h1
          data-testid='element-title'
          className='text-4.2 font-normal capitalize leading-[6rem] text-[#E5E9F0]'
        >
          abolfazl jamshidi
        </h1>
        <p
          data-testid='element-role'
          className='text-4xl font-medium text-[#4D5BCE]'
        >
          &gt; Front-end developer
        </p>
      </div>

      <div>
        <Comment>// enjoy playing the snake game</Comment>
        <Comment>
          // you can also see it on my Github page
        </Comment>
        <Link
          href='https://github.com/abolfazlcodes'
          target='_blank'
          className='text-xl'
        >
          <SingleLineCodeBlock
            code={CODE_LINK}
            language='javascript'
          />
        </Link>
      </div>
    </header>
  );
}

export default Hero;
