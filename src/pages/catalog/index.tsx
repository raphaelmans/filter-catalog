import React from 'react';
import Content from './components/Content';
import Filter from './components/Filter';

const Catalog = () => {
    return (
        <div className="bg-gray-50">
            <Filter />
            <Content />
        </div>
    );
};

export default Catalog;
