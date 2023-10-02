interface FilterItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  handleFilters: (value: string) => void;
}

function FilterItem({
  label,
  icon,
  value,
  handleFilters,
}: FilterItemProps) {
  return (
    <li className='flex items-center gap-4'>
      <input
        type='checkbox'
        name={label}
        id={label}
        value={value}
        onChange={() => handleFilters(value)}
      />
      <label
        className='flex items-center justify-center gap-2 text-xl capitalize'
        htmlFor={label}
      >
        {icon}
        {label}
      </label>
    </li>
  );
}

export default FilterItem;
