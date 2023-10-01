import Image, { StaticImageData } from 'next/image';

import Button from './Button';

interface ProjectCardProps {
  card: {
    title: string;
    id: number;
    image: StaticImageData | string;
    description: string;
  };
}

function ProjectCard({ card }: ProjectCardProps) {
  const { title, id, image, description } = card;

  /* eslint-disable react/jsx-no-comment-textnodes */
  return (
    <article className='flex flex-col gap-6'>
      <header className='flex items-center gap-3'>
        <h1 className='text-2xl font-bold capitalize text-[#5565E8]'>
          Project {id}
        </h1>
        <span className='text-lg text-[#607b96]'>
          // {title}
        </span>
      </header>
      <div className='w-112 h-106 rounded-3xl border border-[#1E2D3D]'>
        <Image
          src={image}
          width={0}
          height={0}
          sizes='100vw'
          className='h-auto w-full rounded-lg object-cover'
          alt=''
        />
        <div className='flex flex-col gap-8 border-t border-[#1e2d3d] p-6'>
          <p className='text-xl text-[#607b96]'>{description}</p>
          <Button>view-project</Button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
