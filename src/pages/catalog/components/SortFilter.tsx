import React, { useState } from 'react';
import { actions } from 'redux/slices/catalog';
import { useDispatch } from 'redux/store';
import { SortBy } from 'types/sort-by';

interface SortFilterI {
    sortBy: string[];
}

const SortFilter: React.FC<SortFilterI> = ({ sortBy }) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    return (
        <div className="relative z-10 inline-block text-left">
            <div>
                <button
                    type="button"
                    className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                    id="mobile-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() => setOpen(!open)}
                >
                    Sort
                    <img
                        src={`/svgs/caret-${open ? 'up' : 'down'}.svg`}
                        className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    />
                </button>
            </div>

            {/* Sort elements */}
            <div
                className={`${
                    open ? 'block' : 'hidden'
                } origin-top-left absolute left-0 z-10 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="mobile-menu-button"
                tabIndex={-1}
            >
                <div className="py-1" role="none">
                    {sortBy.map((by) => (
                        <button
                            className="block px-4 py-2 text-sm font-medium text-gray-900"
                            role="menuitem"
                            tabIndex={-1}
                            id="mobile-menu-item-0"
                            key={by}
                            onClick={() => dispatch(actions.sortByFilter(by as SortBy))}
                        >
                            {by}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SortFilter;
