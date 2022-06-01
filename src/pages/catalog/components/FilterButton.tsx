import React from 'react';

interface FilterButtonI {
    text: string;
    callback?: React.MouseEventHandler;
}

const FilterButton: React.FC<FilterButtonI> = ({ text, callback = () => null }) => {
    return (
        <button
            type="button"
            className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
            aria-expanded="false"
            onClick={callback}
        >
            <span>{text}</span>
            <img
                src="/svgs/caret-down.svg"
                className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
            />
        </button>
    );
};

export default FilterButton;
