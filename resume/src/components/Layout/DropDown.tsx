import React from 'react';

type DropDownProps = {
  items: string[];
  onCategoryChange: (category: string, isChecked: boolean) => void;
};

const DropDown: React.FC<DropDownProps> = ({ items, onCategoryChange }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onCategoryChange(event.target.value, event.target.checked);
  };
  return (
    <div className="DropDown absolute z-10 mt-[6px] w-48 bg-white rounded-lg shadow dark:bg-gray-700">
      <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                id={`checkbox-item-${index}`}
                type="checkbox"
                value={item}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={handleCheckboxChange}
              />
              <label
                htmlFor={`checkbox-item-${index}`}
                className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                {item}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
