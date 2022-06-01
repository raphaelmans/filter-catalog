import React from 'react';
import Home from 'pages/home/';
import type { RouteObject } from 'react-router';
import BasicLayout from 'layout/BasicLayout';
import Catalog from 'pages/catalog';
import ProductOverview from 'pages/product-overview';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <BasicLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
    {
        path: '/catalog',
        element: <BasicLayout />,
        children: [
            {
                path: '/catalog',
                element: <Catalog />,
            },
            {
                path: '/catalog:id',
                element: <ProductOverview />,
            },
        ],
    },
];

export default routes;
