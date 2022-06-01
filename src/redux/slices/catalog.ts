import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { getFilters } from 'services/catalog';

interface CatalogStateI {
    filters: {
        sortBy: string[];
        categories: string[];
    };
}

const initialState: CatalogStateI = {
    filters: {
        sortBy: [],
        categories: [],
    },
};

export const fetchFilters = createAsyncThunk('catalog/fetchFilters', async () => {
    const response: AxiosResponse = await getFilters();
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
    },
});

export const { reducer } = slice;
export const {} = slice.actions;

export default slice;
