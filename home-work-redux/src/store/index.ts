import { configureStore } from "@reduxjs/toolkit";
import coctailsReducer from "./info";


export const store = configureStore({
  reducer: {
    allCoctails: coctailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
