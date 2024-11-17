import { useState } from "react";
import backgroundImage from "../../assets/header.webp";

interface BlogHeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  categories: string[];
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  resultCount: number;
}

const BlogHeader = (blogHeaderProps: BlogHeaderProps) => {
  const {
    searchTerm,
    setSearchTerm,
    categories,
    selectedCategories,
    setSelectedCategories,
    resultCount,
  } = blogHeaderProps;

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category),
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="mx-auto flex w-full flex-col items-center text-center md:px-24 md:py-6">
      <div className="relative flex max-w-3xl flex-col items-center rounded-lg p-8">
        <div
          className="absolute inset-0 rounded-full bg-cover bg-center opacity-25 blur-3xl"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            zIndex: 50,
            pointerEvents: "none",
            transform: 'scale(0.75)',  // Reduce el tamaño visual de la imagen
            transformOrigin: 'bottom' // Asegura que la imagen se reduzca desde el centro
          }}
        ></div>
        <h1 className="bg-gradient-text-1 mb-3 text-2xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-7xl md:leading-normal">
          Artículos
        </h1>
        <h2 className="text-xl font-semibold leading-7 text-gray-600 dark:text-gray-400 md:text-2xl">
          Artículos detallados sobre tecnología
        </h2>
      </div>

      <div className="mt-5 flex w-full max-w-md items-center space-x-4">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-md border bg-white p-2 text-gray-900 focus:outline-none focus:ring focus:ring-black dark:border-none dark:bg-gray-800 dark:text-white dark:focus:ring-white"
        />

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="rounded-md border bg-white p-2 text-gray-900 focus:outline-none dark:border-none dark:bg-gray-800 dark:text-white"
          >
            Filtrar
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full z-10 mt-2 max-h-48 w-48 overflow-y-auto rounded-lg border bg-white p-4 shadow-lg dark:border-none dark:bg-gray-800">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center space-x-2 p-1 text-gray-700 dark:text-gray-200"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        Resultados coincidentes: {resultCount}
      </p>
    </div>
  );
};

export { BlogHeader };
