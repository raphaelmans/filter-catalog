import { combineReducers } from '@reduxjs/toolkit';
import { reducer as catalogReducer } from 'redux/slices/catalog';
import { reducer as productDetailsReducer } from 'redux/slices/product-details';
const rootReducer = combineReducers({
    catalog: catalogReducer,
    productDetails: productDetailsReducer,
});

export default rootReducer;
