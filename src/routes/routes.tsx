import React from 'react';
import Home from 'pages/home/';
import type { RouteObject } from 'react-router';
import BasicLayout from 'layout/BasicLayout';
import Catalog from 'pages/catalog';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <BasicLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/catalog',
                element: <Catalog />,
            },
        ],
    },
];

export default routes;
