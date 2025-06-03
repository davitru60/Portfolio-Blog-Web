interface SearchBarProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = (searchBarProps: SearchBarProps) => {
  const { type, placeholder, value, onChange } = searchBarProps;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-md border bg-white p-2 text-gray-900 focus:outline-none focus:ring focus:ring-black dark:border-none dark:bg-gray-800 dark:text-white dark:focus:ring-white"
    />
  );
};

export {SearchBar}