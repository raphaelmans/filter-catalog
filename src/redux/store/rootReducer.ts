import { combineReducers } from '@reduxjs/toolkit';
import { reducer as catalogReducer } from 'redux/slices/catalog';

const rootReducer = combineReducers({
    catalog: catalogReducer,
});

export default rootReducer;
