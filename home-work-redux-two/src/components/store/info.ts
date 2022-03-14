import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import getCoctailsInfo, { ICoctailsInfo } from "../Api/Coctails";


export const getAllCoctails = createAsyncThunk('getCoctailsInfo', () => {
  return getCoctailsInfo();
});

interface ICoctailsAll {
  coctails: ICoctailsInfo[] | null;
};

const initialState: ICoctailsAll = {
  coctails: null,
};

const coctailsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllCoctails.fulfilled,(state, action) => {
    state.coctails = action.payload
  });
});

export default coctailsReducer;