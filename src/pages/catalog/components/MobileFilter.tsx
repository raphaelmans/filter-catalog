import React from 'react';

const MobileFilter = () => {
    return (
        <div className="relative z-40 sm:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>

            <div className="fixed inset-0 flex z-40">
                <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto">
                    <div className="px-4 flex items-center justify-between">
                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                        <button
                            type="button"
                            className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <span className="sr-only">Close menu</span>
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <form className="mt-4">
                        <div className="border-t border-gray-200 px-4 py-6">
                            <h3 className="-mx-2 -my-3 flow-root">
                                <button
                                    type="button"
                                    className="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400"
                                    aria-controls="filter-section-0"
                                    aria-expanded="false"
                                >
                                    <span className="font-medium text-gray-900"> Category </span>
                                    <span className="ml-6 flex items-center">
                                        <svg
                                            className="rotate-0 h-5 w-5 transform"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </h3>
                            <div className="pt-6" id="filter-section-0">
                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <input
                                            id="filter-mobile-category-0"
                                            name="category[]"
                                            value="tees"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label
                                            htmlFor="filter-mobile-category-0"
                                            className="ml-3 text-sm text-gray-500"
                                        >
                                            {' '}
                                            Tees{' '}
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            id="filter-mobile-category-1"
                                            name="category[]"
                                            value="crewnecks"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label
                                            htmlFor="filter-mobile-category-1"
                                            className="ml-3 text-sm text-gray-500"
                                        >
                                            {' '}
                                            Crewnecks{' '}
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            id="filter-mobile-category-2"
                                            name="category[]"
                                            value="hats"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label
                                            htmlFor="filter-mobile-category-2"
                                            className="ml-3 text-sm text-gray-500"
                                        >
                                            {' '}
                                            Hats{' '}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 px-4 py-6">
                            <h3 className="-mx-2 -my-3 flow-root">
                                <button
                                    type="button"
                                    className="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400"
                                    aria-controls="filter-section-1"
                                    aria-expanded="false"
                                >
                                    <span className="font-medium text-gray-900"> Brand </span>
                                    <span className="ml-6 flex items-center">
                                        <svg
                                            className="rotate-0 h-5 w-5 transform"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </h3>
                            <div className="pt-6" id="filter-section-1">
                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <input
                                            id="filter-mobile-brand-0"
                                            name="brand[]"
                                            value="clothing-company"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="filter-mobile-brand-0" className="ml-3 text-sm text-gray-500">
                                            {' '}
                                            Clothing Company{' '}
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            id="filter-mobile-brand-1"
                                            name="brand[]"
                                            value="fashion-inc"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="filter-mobile-brand-1" className="ml-3 text-sm text-gray-500">
                                            {' '}
                                            Fashion Inc.{' '}
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            id="filter-mobile-brand-2"
                                            name="brand[]"
                                            value="shoes-n-more"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="filter-mobile-brand-2" className="ml-3 text-sm text-gray-500">
                                            {' '}
                                            Shoes &#039;n More{' '}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 px-4 py-6">
                            <h3 className="-mx-2 -my-3 flow-root">
                                <button
                                    type="button"
                                    className="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400"
                                    aria-controls="filter-section-2"
                                    aria-expanded="false"
                                >
                                    <span className="font-medium text-gray-900"> Color </span>
                                    <span className="ml-6 flex items-center">
                                        <svg
                                            className="rotate-0 h-5 w-5 transform"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </h3>
                            <div className="pt-6" id="filter-section-2">
                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <input
                                            id="filter-mobile-color-0"
                                            name="color[]"
                                            value="white"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="filter-mobile-color-0" className="ml-3 text-sm text-gray-500">
                                            {' '}
                                            White{' '}
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            id="filter-mobile-color-1"
                                            name="color[]"
                                            value="black"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="filter-mobile-color-1" className="ml-3 text-sm text-gray-500">
                                            {' '}
                                            Black{' '}
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            id="filter-mobile-color-2"
                                            name="color[]"
                                            value="grey"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="filter-mobile-color-2" className="ml-3 text-sm text-gray-500">
                                            {' '}
                                            Grey{' '}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 px-4 py-6">
                            <h3 className="-mx-2 -my-3 flow-root">
                                <button
                                    type="button"
                                    className="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400"
                                    aria-controls="filter-section-3"
                                    aria-expanded="false"
                                >
                                    <span className="font-medium text-gray-900"> Sizes </span>
                                    <span className="ml-6 flex items-center">
                                        <svg
                                            className="rotate-0 h-5 w-5 transform"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </h3>
                            <div className="pt-6" id="filter-section-3">
                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <input
                                            id="filter-mobile-sizes-0"
                                            name="sizes[]"
                                            value="s"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="filter-mobile-sizes-0" className="ml-3 text-sm text-gray-500">
                                            {' '}
                                            S{' '}
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            id="filter-mobile-sizes-1"
                                            name="sizes[]"
                                            value="m"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="filter-mobile-sizes-1" className="ml-3 text-sm text-gray-500">
                                            {' '}
                                            M{' '}
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            id="filter-mobile-sizes-2"
                                            name="sizes[]"
                                            value="l"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="filter-mobile-sizes-2" className="ml-3 text-sm text-gray-500">
                                            {' '}
                                            L{' '}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MobileFilter;
