import React, { useState } from 'react';
import { actions } from 'redux/slices/catalog';
import { useDispatch } from 'redux/store';

interface CategoryFilterI {
    title: string;
    categories: string[];
}
const CategoryFilter: React.FC<CategoryFilterI> = ({ title, categories }) => {
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const handleCategorySelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        dispatch(actions.appendCategoryFilters(value));
    };
    return (
        <div id="desktop-menu" className="relative z-10 inline-block text-left">
            <div>
                <button
                    type="button"
                    className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                    aria-expanded="false"
                    onClick={() => setOpen(!open)}
                >
                    <span>{title}</span>
                    <img
                        src={`/svgs/caret-${open ? 'up' : 'down'}.svg`}
                        className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    />
                </button>
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
                                onChange={handleCategorySelected}
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

export default CategoryFilter;
