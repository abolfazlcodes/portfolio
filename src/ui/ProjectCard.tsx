import Button from './Button';
import { useState, MouseEvent } from 'react';

interface ProjectCardProps {
  card: {
    title: string;
    id: number;
    description: string;
    link: string;
  };
}

function ProjectCard({ card }: ProjectCardProps) {
  const { title, id, description, link } = card;
  const [shouldPlay, setShouldPlay] = useState(false);

  const mouseEnterHandler = (
    e: MouseEvent<HTMLVideoElement>
  ) => {
    if (!shouldPlay) e.currentTarget.play();

    setShouldPlay(true);
  };

  const mouseLeaveHandler = (
    e: MouseEvent<HTMLVideoElement>
  ) => {
    if (shouldPlay) e.currentTarget.pause();
    setShouldPlay(false);
  };

  const video = id % 2 === 0 ? '/morent.mp4' : '/hotel.mp4';

  /* eslint-disable react/jsx-no-comment-textnodes */
  return (
    <article className='flex max-h-[40rem] min-h-[33rem] w-full  max-w-[40rem] cursor-pointer flex-col gap-6 duration-200 hover:-translate-y-3'>
      <header className='flex flex-col gap-3 sm:flex-row sm:items-center'>
        <h1 className='text-2xl font-bold capitalize text-[#5565E8]'>
          Project {id}
        </h1>
        <span className='text-lg text-[#607b96]'>
          // {title}
        </span>
      </header>
      <div className='flex h-full w-full flex-col overflow-hidden rounded-3xl border border-[#1E2D3D]'>
        <div className='h-full w-full'>
          <video
            src={video}
            muted
            loop
            onMouseEnter={(e) => mouseEnterHandler(e)}
            onMouseLeave={(e) => mouseLeaveHandler(e)}
          />
        </div>
        <div className='flex flex-col gap-8 p-6'>
          <p className='text-xl text-[#607b96]'>{description}</p>
          <Button link={link}>view-project</Button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
