import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { Location } from 'react-router-dom';

const styleActiveLink = (link: string, location: Location) => {
    const activeStyle = 'bg-gray-900 text-white';
    const defaultStyle = 'text-gray-300';
    return link === location.pathname ? activeStyle : defaultStyle;
};

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <img
                                className="block h-8 w-auto mr-3"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                alt="Workflow"
                            />
                            <span className="text-white font-bold">Esuf Filter</span>
                        </Link>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link
                                    to="/"
                                    className={`${styleActiveLink(
                                        '/',
                                        location,
                                    )} px-3 py-2 rounded-md text-sm font-medium`}
                                >
                                    Home
                                </Link>

                                <Link
                                    to="/catalog"
                                    className={`${styleActiveLink(
                                        '/catalog',
                                        location,
                                    )} text-gray-300  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"`}
                                >
                                    View Catalog
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
