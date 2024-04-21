import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { initialState } from "../news/initialNewsState";
import {
  createProductsThunk,
  deleteProductsThunk,
  getProductsThunk,
} from "./thunk";

const defaultStatus = {
  pending: "pending",
  fulfilled: "fulfilled",
  rejected: "rejected",
};
const customArr = [getProductsThunk, createProductsThunk, deleteProductsThunk];
const answerStatus = (type) => customArr.map((el) => el[type]);
;
const handlePending = (state) => {
  state.isLoading = true;
};
const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = "";
};

const handleFulfilledGet = (state, { payload }) => {
  state.products = payload;
};
const handleFulfilledCreate = (state, { payload }) => {
  state.products.push(payload);
};
const handleFulfilledDelete = (state, { payload }) => {
  state.products = state.products.filter((el) => el.id !== payload.id);
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    const { pending, fulfilled, rejected } = defaultStatus;
    builder
      .addCase(getProductsThunk.fulfilled, handleFulfilledGet)
      .addCase(createProductsThunk.fulfilled, handleFulfilledCreate)
      .addCase(deleteProductsThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...answerStatus(pending)), handlePending)
      .addMatcher(isAnyOf(...answerStatus(fulfilled)), handleFulfilled)
      .addMatcher(isAnyOf(...answerStatus(rejected)), handleRejected);
  },
});

export const productsReducer = productSlice.reducer;
