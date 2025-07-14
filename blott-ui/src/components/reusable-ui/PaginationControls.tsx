import React, { useMemo } from "react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  onPreviousPage,
  onNextPage,
}) => {
  const getPageNumbers = useMemo(() => {
    const maxPageButtons = window.innerWidth < 768 ? 3 : 5;

    const pages = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    if (endPage - startPage + 1 < maxPageButtons) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }, [currentPage, totalPages]);

  return (
    <div className="flex justify-center items-center gap-1 sm:gap-2 mt-8 w-full flex-wrap">
      {" "}
      <button
        onClick={onPreviousPage}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
        className="px-2 py-1 sm:px-4 sm:py-2 rounded-lg bg-primary-color text-white disabled:opacity-50 hover:bg-blue-600 transition-colors duration-200 text-sm sm:text-base"
      >
        Previous
      </button>
      {getPageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`px-2 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base ${
            currentPage === pageNumber
              ? "bg-secondary-color text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600" // Inactive page style
          } transition-colors duration-200`}
          aria-current={currentPage === pageNumber ? "page" : undefined}
        >
          {pageNumber}
        </button>
      ))}
      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
        className="px-2 py-1 sm:px-4 sm:py-2 rounded-lg bg-primary-color text-white disabled:opacity-50 hover:bg-blue-600 transition-colors duration-200 text-sm sm:text-base"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
