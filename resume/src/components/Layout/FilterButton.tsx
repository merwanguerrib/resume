import React from 'react';

interface FilterButtonProps {
  handleClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ handleClick }) => {
  return (
    <div className="flex justify-end">
      <button
        className="rounded-full border border-line/80 bg-surface p-3 text-primary transition duration-300 hover:border-primary/40"
        onClick={handleClick}
      >
        <svg
          className="h-4 w-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z" />
        </svg>
      </button>
    </div>
  );
};

export default FilterButton;
