import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { getProductDetails } from 'services/product-details';
import ProductDetails from 'types/product-details';

const initialState: ProductDetails = {
    currency: 'USD',
    license: '',
    price: 0,
};

export const fetchProductDetails = createAsyncThunk('productDetails/fetchProductDetails', async () => {
    const response: AxiosResponse = await getProductDetails();
    if (response.status === 200) return response.data.data;
    return [];
});

const slice = createSlice({
    name: 'productDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
            const { price, license, currency } = action.payload;
            state.price = price;
            state.license = license;
            state.currency = currency;
        });
    },
});

export const { reducer } = slice;
export const {} = slice.actions;

export default slice;
