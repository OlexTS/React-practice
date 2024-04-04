import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { reducer } from "./reducer";

// store.dispatch({ type: "increment", payload: 1 });
// console.log(store.getState());

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['todo']
};



const customMiddle =(state)=>{
return (next)=>{
  return (action)=>{
    if(typeof action === 'function'){
      action(state.dispatch)
      return
    }
    console.log(state.getState());
    return next(action)
  }
}
}

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: ()=>[customMiddle]
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // }),

});
export const persistor = persistStore(store);
