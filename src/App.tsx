import React, { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'routes/routes';
import './App.css';

const App: FC = () => {
    const content = useRoutes(routes);
    return <>{content}</>;
};

export default App;
