
interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = (paginationProps: PaginationProps) => {
  const { totalPages, currentPage, onPageChange } = paginationProps;

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageButtons = () => {
    const buttons = [];
    for (let page = 1; page <= totalPages; page++) {
      buttons.push(
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-12 h-10 rounded-md border border-gray-300 text-center text-sm transition  dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 ${
            currentPage === page
              ? "bg-blue-500 font-bold text-white dark:bg-blue-400 dark:text-white"
              : "bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300"
          }`}
        >
          {page}
        </button>,
      );
    }
    return buttons;
  };

  return (
    <div className="mt-4 flex flex-wrap items-center justify-center gap-2 py-4">
      {/* Botón para página anterior */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`w-12 h-10 rounded-md border border-gray-300 text-sm ${
          currentPage === 1
            ? "cursor-not-allowed bg-gray-200 dark:bg-gray-600"
            : "hover:bg-gray-200 dark:hover:bg-gray-600"
        } dark:border-gray-700 text-center`}
      >
        {"<"}
      </button>

      {/* Renderizado de botones de página */}
      {renderPageButtons()}

      {/* Botón para página siguiente */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`w-12 h-10 rounded-md border border-gray-300 text-sm ${
          currentPage === totalPages
            ? "cursor-not-allowed bg-gray-200 dark:bg-gray-600"
            : "hover:bg-gray-200 dark:hover:bg-gray-600"
        } dark:border-gray-700 text-center`}
      >
        {">"}
      </button>
    </div>
  );
};

export { Pagination };
