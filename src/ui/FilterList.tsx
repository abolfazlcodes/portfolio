function FilterList({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ul className='flex flex-col gap-4 px-7 py-4'>{children}</ul>
  );
}

export default FilterList;
