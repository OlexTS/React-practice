import { createSlice} from "@reduxjs/toolkit";
import { initialState } from '../news/initialNewsState';
import {getProductsThunk} from './thunk'

const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(getProductsThunk.pending, (state)=>{
state.isLoading = true
        }).addCase(getProductsThunk.fulfilled, (state, {payload})=>{
            state.isLoading = false;
            state.products = payload
            state.error = '';
        }).addCase(getProductsThunk.rejected, (state, {payload})=>{
            state.isLoading = false;
            state.error = payload
        })
    }
    
})

export const productsReducer = productSlice.reducer