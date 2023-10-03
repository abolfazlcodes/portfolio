import Button from './Button';
import { useState, MouseEvent } from 'react';

interface ProjectCardProps {
  card: {
    title: string;
    id: number;
    description: string;
    link: string;
    video: string;
  };
}

function ProjectCard({ card }: ProjectCardProps) {
  const { title, id, description, link, video } = card;
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

  /* eslint-disable react/jsx-no-comment-textnodes */
  return (
    <article className='flex h-[45rem] max-w-[30rem] cursor-pointer flex-col gap-6 duration-200 hover:-translate-y-3'>
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
