import React, { FC } from 'react';
import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { fetchProductDetails } from 'redux/slices/product-details';
import { useDispatch } from 'redux/store';
import routes from 'routes/routes';
import './App.css';

const App: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductDetails());
    }, []);
    const content = useRoutes(routes);
    return <>{content}</>;
};

export default App;
