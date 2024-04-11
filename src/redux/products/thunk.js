import { createAsyncThunk} from "@reduxjs/toolkit";
import { createProduct, deleteProduct, getProducts } from "../../services/productsApi";

export const getProductsThunk = createAsyncThunk('products/get', ()=>{
    getProducts()
})
export const createProductsThunk = createAsyncThunk('products/create', (data)=>{
    createProduct(data)
})
export const deleteProductsThunk = createAsyncThunk('products/delete', (id)=>{
    deleteProduct(id)
})