import React from 'react';
import { Link } from 'react-router-dom';
import ARFilter from 'types/ar-filter';

interface ProductCardI {
    arFilter: ARFilter;
}

const ProductCard: React.FC<ProductCardI> = ({ arFilter }) => {
    return (
        <Link to={`/catalog/${arFilter.id}`} className="group">
            <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                <img
                    src={arFilter.resourceLink}
                    alt={arFilter.description}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
            </div>
            <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{arFilter.filterName}</h3>
                <p className={arFilter.premium ? 'text-sky-600' : 'text-emerald-500'}>
                    {arFilter.premium ? 'Premium' : 'Free'}
                </p>
            </div>
            <div className="mt-1 text-sm text-gray-700">
                <p className=" italic ">{arFilter.categories.join(',')}</p>
                <p>{arFilter.views} views</p>
            </div>
        </Link>
    );
};

export default ProductCard;
