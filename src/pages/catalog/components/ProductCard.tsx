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
                <p className="text-sky-600">{arFilter.premium ? 'Premium' : 'Free'}</p>
            </div>
            <p className="mt-1 text-sm italic text-gray-500">{arFilter.categories.join(',')}</p>
        </Link>
    );
};

export default ProductCard;
