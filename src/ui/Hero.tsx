import Link from 'next/link';
import SingleLineCodeBlock from './SingleLineCodeBlock';
import Comment from './Comment';
import { CODE_LINK } from '@/constants';
import { TypeAnimation } from 'react-type-animation';

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
          <TypeAnimation
            sequence={[
              500,
              'a',
              1000,
              'abolfazl jamshidi',
              500,
              'abolfazl',
            ]}
            speed={10}
            repeat={Infinity}
          />
        </h1>
        <p
          data-testid='element-role'
          className='text-4xl font-medium text-[#4D5BCE]'
        >
          <TypeAnimation
            sequence={[
              500,
              '>',
              1000,
              '> Front-end developer',
              500,
              '> Front-end',
            ]}
            speed={30}
            repeat={Infinity}
          />
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
