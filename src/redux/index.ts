import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer } from "./videoSlice";

export const rootReducer = combineReducers({
  video: reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
