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
import { projectsFakeData } from '@/constants';
import { ProjectProps } from '@/interface';

const DynamicProjectsCard = dynamic(
  () => import('../../ui/ProjectCard'),
  {
    loading: () => <p>Loading ...</p>,
    ssr: true,
  }
);

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
    useState<ProjectProps[]>(projectsFakeData);

  const getFilteredData = (data: ProjectProps[]) => {
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
  }, [filters]);

  return (
    <>
      <aside className='h-full-dvh flex-1 border-r border-[#1e2d3d]'>
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
      <main className='max-[50rem] flex h-full w-full flex-col border-r border-[#1E2D3D]'>
        <header className='border-b border-r border-[#1e2d3d]'>
          <div className='flex h-11 w-full items-center gap-2 border border-[#1e2d3d] px-8 md:w-max md:border-r'>
            {filters.map((item) => (
              <span key={item}>{item};</span>
            ))}
          </div>
        </header>

        <div className='flex h-full w-full flex-col items-center justify-center gap-5 lg:flex-row'>
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
