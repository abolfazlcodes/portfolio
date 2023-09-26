// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Link from 'next/link';
import { useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

/* eslint-disable react/jsx-no-comment-textnodes */
export default function Home() {
  const code =
    'const githublink = "https://github.com/abolfazlcodes"';

  return (
    <section className='flex h-full items-center justify-center'>
      <header className='flex h-2/3 w-1/3 flex-col justify-evenly'>
        <div>
          <p className='text-xl font-medium text-[#E5E9F0]'>
            Hi all. I am
          </p>
          <h1 className='text-4.2 font-normal capitalize leading-[6rem] text-[#E5E9F0]'>
            abolfazl Jamshidi
          </h1>
          <p className='text-4xl font-medium text-[#4D5BCE]'>
            &gt; Front-end developer
          </p>
        </div>

        <div>
          <p className='text-xl font-medium text-[#607b96]'>
            // enjoy playing the snake game
          </p>
          <p className='text-xl font-medium leading-[2.5rem] text-[#607b96]'>
            // you can also see it on my Github page
          </p>
          <Link
            href='https://github.com/abolfazlcodes'
            target='_blank'
            className='text-xl'
          >
            <SyntaxHighlighter
              language='javascript'
              customStyle={{
                background: 'none',
                padding: '0',
                marginTop: '0',
                fontWeight: '500',
              }}
              style={dracula}
            >
              {code}
            </SyntaxHighlighter>
          </Link>
        </div>
      </header>
      <article className='shadow-game-box-shadow bg-game-board h-3/4 w-1/3 rounded-lg border border-[#0c1616] p-12 backdrop-blur-xl'>
        game
      </article>
    </section>
  );
}
