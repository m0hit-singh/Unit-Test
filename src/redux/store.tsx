import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "./reducers";

export const store = configureStore({
  reducer: {
    category: CategoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
