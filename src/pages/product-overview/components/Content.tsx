import React from 'react';

const Content: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                {/* <!-- Product --> */}
                <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
                    {/* <!-- Product image --> */}
                    <div className="lg:row-end-1 lg:col-span-4">
                        <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-page-05-product-01.jpg"
                                alt="Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles."
                                className="object-center object-cover"
                            />
                        </div>
                    </div>

                    {/* <!-- Product details --> */}
                    <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
                        <div className="flex flex-col-reverse">
                            <div className="mt-4">
                                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                                    Application UI Icon Pack
                                </h1>

                                <h2 id="information-heading" className="sr-only">
                                    Product information
                                </h2>
                                <p className="text-sm text-gray-500 mt-2">
                                    Version 1.0 (Updated <time dateTime="2021-06-05">June 5, 2021</time>)
                                </p>
                            </div>

                            <div>
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <img src="/svgs/star.svg" className="h-5 w-5 flex-shrink-0" />
                                </div>
                                <p className="sr-only">4 out of 5 stars</p>
                            </div>
                        </div>

                        <p className="text-gray-500 mt-6">
                            The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and
                            branded. This playful icon pack is tailored for complex application user interfaces with a
                            friendly and legible look.
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                            <button
                                type="button"
                                className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                            >
                                Pay $220
                            </button>
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
                                For personal and professional use. You cannot resell or redistribute these icons in
                                their original or modified state.{' '}
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Read full license
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
