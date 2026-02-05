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
    <div className="absolute z-10 mt-2 w-52 rounded-2xl border border-line/80 bg-surface p-2 shadow-soft">
      <ul className="space-y-1 text-sm text-ink">
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center rounded-xl px-2 py-2 transition duration-200 hover:bg-panel/60">
              <input
                id={`checkbox-item-${index}`}
                type="checkbox"
                value={item}
                className="h-4 w-4 rounded border-line text-primary focus:ring-primary"
                onChange={handleCheckboxChange}
              />
              <label
                htmlFor={`checkbox-item-${index}`}
                className="ml-2 w-full text-sm font-medium text-ink"
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
