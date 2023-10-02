import FilterList from '@/ui/FilterList';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';
import {
  CSSIcon,
  HTMLIcon,
  ReactIcon,
  VueIcon,
} from '@/utils/iconsHelper';
import FilterItem from '../../ui/FilterItem';

const DynamicProjectsCard = dynamic(
  () => import('../../ui/ProjectCard'),
  {
    loading: () => <p>Loading ...</p>,
    ssr: true,
  }
);

interface ProjectsProps {
  id: number;
  title: string;
  description: string;
  link: string;
  tag: string;
}

const projectsFakeData = [
  {
    id: 1,
    title: '_hotel-dashboard',
    description:
      'This is complex project built using cutting-edge technologies such as React, NextJS and TypeScript. This is a hotel admin dashboard that hotel employees can manage and filter the bookings, cabins and so on. Take a look at the demo',
    link: 'https://wildoasis-abolfazl.vercel.app/',
    tag: 'react',
  },
  {
    id: 2,
    title: '_car-rent-platform',
    description:
      'This is complex project built using cutting-edge technologies such as React, NextJS and TypeScript. This is modern platform for renting different types of cars and make the the modern world of transportation more convenient. Take a look at the demo',
    link: 'https://morent-three.vercel.app/',
    tag: 'css',
  },
  {
    id: 3,
    title: '_hotel-dashboard',
    description:
      'This is complex project built using cutting-edge technologies such as React, NextJS and TypeScript. This is a hotel admin dashboard that hotel employees can manage and filter the bookings, cabins and so on. Take a look at the demo',
    link: 'https://wildoasis-abolfazl.vercel.app/',
    tag: 'next',
  },
];

const projectsFilterList = [
  { id: 1, label: 'html', value: 'html', icon: <HTMLIcon /> },
  { id: 2, label: 'css', value: 'css', icon: <CSSIcon /> },
  {
    id: 3,
    label: 'react',
    value: 'react',
    icon: <ReactIcon />,
  },
  { id: 4, label: 'vue', value: 'vue', icon: <VueIcon /> },
];

function ProjectsWrapper() {
  const [filters, setFilters] = useState<string[]>([]);

  const [filteredData, setFilteredData] =
    useState<ProjectsProps[]>(projectsFakeData);

  const getFilteredData = (data: ProjectsProps[]) => {
    const updated = data.filter((projectItem) => {
      return filters.every((item) =>
        projectItem.tag.includes(item.toLowerCase())
      );
    });

    setFilteredData(updated);
  };

  const handleFilters = (value: string) => {
    const clonedFilters = [...filters];

    const alreadyExist = clonedFilters.findIndex(
      (item) => item === value
    );

    if (alreadyExist < 0) {
      setFilters((prevState) => [...prevState, value]);
    } else {
      const newFilters = clonedFilters.filter(
        (item) => item !== value
      );
      setFilters([...newFilters]);
    }
  };

  useEffect(() => {
    getFilteredData(projectsFakeData);
  }, [filters, projectsFakeData]);
  return (
    <>
      {/* border-r border-[#1e2d3d] */}
      <aside className='col-span-5 border'>
        <header className='flex items-center justify-between border-b border-[#1E2D3D] px-7 py-2 text-lg text-[#fff]'>
          <h1>projects</h1>
          <span className='hidden'>
            <BsArrowDownCircle />
          </span>
        </header>
        <FilterList>
          {projectsFilterList.map((filterItem) => (
            <FilterItem
              key={filterItem.id}
              label={filterItem.label}
              icon={filterItem.icon}
              value={filterItem.value}
              handleFilters={handleFilters}
            />
          ))}
        </FilterList>
      </aside>
      <main className='flex h-full flex-col border-r border-[#1E2D3D] md:col-span-11 xl:col-span-6'>
        <header className='border-b border-r border-[#1e2d3d]'>
          <div className='flex h-11 w-max items-center justify-between gap-2 border-r border-[#1e2d3d] px-8'>
            {filters.map((item) => (
              <span key={item}>{item};</span>
            ))}
          </div>
        </header>

        <div className='flex h-full flex-col items-center justify-center gap-8 py-20 sm:p-10 lg:flex-row'>
          {filteredData.map((project) => (
            <DynamicProjectsCard
              key={project.id}
              card={project}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default ProjectsWrapper;
