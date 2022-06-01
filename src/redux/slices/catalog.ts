import { CaseReducer, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { getARFilters, getFilters } from 'services/catalog';
import ARFilter from 'types/ar-filter';
import { SortBy } from 'types/sort-by';

interface CatalogStateI {
    filters: {
        sortBy: string[];
        categories: string[];
    };
    arFilterList: ARFilter[];
    filteredList: ARFilter[];
    sortBy: SortBy;
    categoryFilters: string[];
}

const initialState: CatalogStateI = {
    filters: {
        sortBy: [],
        categories: [],
    },
    sortBy: 'Most Viewed',
    arFilterList: [],
    filteredList: [],
    categoryFilters: [],
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

const sortByFilter: CaseReducer<CatalogStateI, PayloadAction<SortBy>> = (state, action) => {
    switch (action.payload) {
        case 'Most Viewed':
            state.filteredList.sort((ar1, ar2) => (ar1.views > ar2.views ? -1 : 1));
            break;
        case 'Most Likes':
            state.filteredList.sort((ar1, ar2) => (ar1.rating > ar2.rating ? -1 : 1));
            break;
    }
    state.sortBy = action.payload as SortBy;
};

const filterByCategory: CaseReducer<CatalogStateI, PayloadAction<string[]>> = (state, action) => {
    if (action.payload.length > 0) {
        state.filteredList = state.arFilterList.filter((ar) =>
            action.payload.every((val) => ar.categories.includes(val.toLowerCase())),
        );
    } else {
        state.filteredList = state.arFilterList;
    }
};

const appendCategoryFilters: CaseReducer<CatalogStateI, PayloadAction<string>> = (state, action) => {
    if (state.categoryFilters.includes(action.payload)) {
        state.categoryFilters = state.categoryFilters.filter((c) => c !== action.payload);
    } else {
        state.categoryFilters = [...state.categoryFilters, action.payload];
    }
    filterByCategory(state, { type: 'catalog/filterByCategory', payload: state.categoryFilters });
};

const slice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        sortByFilter,
        filterByCategory,
        appendCategoryFilters,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFilters.fulfilled, (state, action) => {
            state.filters = { ...action.payload };
        });
        builder.addCase(fetchARFilterList.fulfilled, (state, action) => {
            state.arFilterList = action.payload;
            state.filteredList = action.payload;
            sortByFilter(state, { type: 'catalog/sortByFilter', payload: state.sortBy });
        });
    },
});

export const { reducer } = slice;
export const { actions } = slice;

export default slice;
