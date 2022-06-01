import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'redux/store';
import { getARFilterById } from 'services/catalog';
import ARFilter from 'types/ar-filter';

const Content: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState<ARFilter | null>(null);
    const { currency, license, price } = useSelector((state) => state.productDetails);
    useEffect(() => {
        const getARFilterData = async () => {
            if (id) {
                setData(await getARFilterById(id));
            }
        };
        getARFilterData();
    }, [id]);
    return (
        <div className="bg-white">
            <div className="mx-auto py-6 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                <button onClick={() => navigate(-1)}>
                    <img src="/svgs/caret-left.svg" className="h-6 w-6 mb-3 text-indigo-600" />
                </button>
                {data != null && (
                    <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
                        <div className="lg:row-end-1 lg:col-span-4">
                            <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                                <img
                                    src={data.resourceLink}
                                    alt={data.description}
                                    className="object-center object-cover"
                                />
                            </div>
                        </div>

                        <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
                            <div className="flex flex-col-reverse">
                                <div className="mt-4">
                                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                                        {data.filterName}
                                    </h1>

                                    <h2 id="information-heading" className="sr-only">
                                        Product information
                                    </h2>
                                    <p className="text-sm text-gray-500 mt-2">
                                        {data.views} views • Created At {data.createdAt}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="sr-only">Reviews</h3>
                                    <div className="flex items-center">
                                        {Array.from(Array(data.rating).keys()).map((i) => (
                                            <img
                                                src="/svgs/star.svg"
                                                className="h-5 w-5 flex-shrink-0"
                                                key={`star-${i}`}
                                            />
                                        ))}
                                    </div>
                                    <p className="sr-only">{data.rating} out of 5 stars</p>
                                </div>
                            </div>

                            <p className="text-gray-500 mt-6">{data.description}</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                                {data.premium && price && (
                                    <button
                                        type="button"
                                        className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                                    >
                                        Pay {`${price} ${currency}`}
                                    </button>
                                )}
                                <button
                                    type="button"
                                    className="w-full bg-indigo-50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                                >
                                    Preview
                                </button>
                            </div>

                            <div className="border-t border-gray-200 mt-10 pt-10">
                                <h3 className="text-sm font-medium text-gray-900">License</h3>
                                <p className="mt-4 text-sm text-gray-500">
                                    {license}
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Read full license
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                {/* <!-- Product --> */}
            </div>
        </div>
    );
};

export default Content;
