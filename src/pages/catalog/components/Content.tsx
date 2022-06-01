import React, { useEffect } from 'react';
import { fetchARFilterList } from 'redux/slices/catalog';
import { useDispatch, useSelector } from 'redux/store';
import ProductCard from './ProductCard';

const Content: React.FC = () => {
    const { arFilterList } = useSelector((state) => state.catalog);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchARFilterList());
    }, []);

    console.log(arFilterList);
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 id="products-heading" className="sr-only">
                    Products
                </h2>

                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                    {arFilterList.length > 0 &&
                        arFilterList.map((ar) => <ProductCard arFilter={ar} key={ar.filterName} />)}
                </div>
            </div>
        </div>
    );
};

export default Content;
