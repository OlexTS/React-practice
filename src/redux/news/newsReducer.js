import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getNewsSearchThunk, getNewsThunk } from "./thunk.js";
import { initialState } from "./initialNewsState";

const defaultStatus = {
  pending: "pending",
  fulfilled: "fulfilled",
  rejected: "rejected",
};

const thunkAmswerStatus = (status) => customArr.map((el) => el[status]);

const customArr = [getNewsThunk, getNewsSearchThunk];

const handlePending = (state) => {
  state.status = defaultStatus.pending;
};
const handleFulfilled = (state, { payload }) => {
  state.status = defaultStatus.fulfilled;
  state.news = payload.articles;
  state.error = "";
};
const handleRejected = (state, { payload }) => {
  state.status = defaultStatus.rejected;
  state.error = payload;
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getNewsThunk.pending, handlePending)
      .addCase(getNewsThunk.fulfilled, handleFulfilled)
      .addCase(getNewsThunk.rejected, handleRejected)
      .addCase(getNewsSearchThunk.pending, handlePending)
      .addCase(getNewsSearchThunk.fulfilled, handleFulfilled)
      .addCase(getNewsSearchThunk.rejected, handleRejected)
      .addMatcher(isAnyOf(...thunkAmswerStatus(defaultStatus.pending)), handlePending)
      .addMatcher(isAnyOf(...thunkAmswerStatus((defaultStatus.fulfilled))), handleFulfilled)
      .addMatcher(isAnyOf(...thunkAmswerStatus(defaultStatus.rejected)), handleRejected);
  },
});

// export const getNewsThunk = () => {
//   return async (dispatch) => {
//     try {
//       dispatch(newsSlice.actions.fetching());
//       const data = await getTopNews();
//       dispatch(newsSlice.actions.fetchSuccess(data));
//     } catch (error) {
//       dispatch.actions.fetchError(error);
//     }
//   };
// };

// const newsSlice = createSlice({
//   name: "news",
//   initialState,
//   // reducers: {
//   //   fetching: (state) => {
//   //     state.status = "pending";
//   //   },
//   //   fetchSuccess: (state, { payload }) => {
//   //     state.status = "fulfilled";
//   //     state.news = payload.articles;
//   //     state.error = "";
//   //   },
//   //   fetchError: (state, { payload }) => {
//   //     state.status = "rejected";
//   //     state.error = payload;
//   //   },
//   // },
//   // extraReducers: {
//   //   [getNewsThunk.pending]: (state) => {
//   //     state.status = "pending";
//   //   },
//   //   [getNewsThunk.fulfilled]: (state, { payload }) => {
//   //     state.status = "fulfilled";
//   //     state.news = payload.articles;
//   //     state.error = "";
//   //   },
//   //   [getNewsThunk.rejected]: (state, { payload }) => {
//   //     state.status = "rejected";
//   //     state.error = payload;
//   //   },
//   // },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getNewsThunk.pending, (state) => {
//         state.status = "pending";
//       })
//       .addCase(getNewsThunk.fulfilled, (state, { payload }) => {
//         state.status = "fulfilled";
//         state.news = payload.articles;
//         state.error = "";
//       })
//       .addCase(getNewsThunk.rejected, (state, { payload }) => {
//         state.status = "rejected";
//         state.error = payload;
//       });
//   },
// });

export const newsReducer = newsSlice.reducer;
