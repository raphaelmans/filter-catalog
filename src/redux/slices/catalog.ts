import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { getARFilters, getFilters } from 'services/catalog';
import ARFilter from 'types/ar-filter';

interface CatalogStateI {
    filters: {
        sortBy: string[];
        categories: string[];
    };
    arFilterList: ARFilter[];
}

const initialState: CatalogStateI = {
    filters: {
        sortBy: [],
        categories: [],
    },
    arFilterList: [],
};

export const fetchFilters = createAsyncThunk('catalog/fetchFilters', async () => {
    const response: AxiosResponse = await getFilters();
    if (response.status === 200) return response.data.data;
    return [];
});

export const fetchARFilterList = createAsyncThunk('catalog/fetchARFilterList', async () => {
    const response: AxiosResponse = await getARFilters();
    if (response.status === 200) return response.data.data;
    return [];
});

const slice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFilters.fulfilled, (state, action) => {
            state.filters = { ...action.payload };
        });
        builder.addCase(fetchARFilterList.fulfilled, (state, action) => {
            state.arFilterList = action.payload;
        });
    },
});

export const { reducer } = slice;
export const {} = slice.actions;

export default slice;
