import React from 'react';
import { useState } from 'react';
import FilterButton from './FilterButton';

interface FilterDesktopMenuI {
    title: string;
    categories: string[];
}
const FilterDesktopMenu: React.FC<FilterDesktopMenuI> = ({ title, categories }) => {
    const [open, setOpen] = useState(false);
    return (
        <div id="desktop-menu" className="relative z-10 inline-block text-left">
            <div>
                <FilterButton
                    text={title}
                    callback={() => {
                        setOpen(!open);
                    }}
                />
            </div>
            <div
                className={`${
                    open ? 'block' : 'hidden'
                } origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none`}
            >
                <form className="space-y-4">
                    {categories.map((category) => (
                        <div className="flex items-center" key={category}>
                            <input
                                id="filter-category-0"
                                name="category[]"
                                value={category}
                                type="checkbox"
                                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                                htmlFor="filter-category-0"
                                className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                            >
                                {category}
                            </label>
                        </div>
                    ))}
                </form>
            </div>
        </div>
    );
};

export default FilterDesktopMenu;
