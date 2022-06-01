import React, { useEffect } from 'react';
import { fetchFilters } from 'redux/slices/catalog';
import { useDispatch, useSelector } from 'redux/store';
import FilterDesktopMenu from './FilterDesktopMenu';
import SortFilter from './SortFilter';

const Filter: React.FC = () => {
    const { filters } = useSelector((state) => state.catalog);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilters());
    }, []);

    return (
        <>
            <div className="max-w-3xl mx-auto px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="py-24">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">SOCIAL AR FILTERS</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
                        Our smart social AR solution suit is built to fit your needs and capacity at any given moment.
                        With full flexibility, feel free to pick one, combine or speak to our team to find a tailored
                        solution.
                    </p>
                </div>

                <section aria-labelledby="filter-heading" className="border-t border-gray-200 py-6">
                    <h2 id="filter-heading" className="sr-only">
                        Product filters
                    </h2>

                    <div className="flex items-center justify-between">
                        <SortFilter sortBy={filters.sortBy ?? []} />

                        <div className="flex sm:items-baseline sm:space-x-8">
                            <FilterDesktopMenu title="Category" categories={filters.categories ?? []} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Filter;
