import { createAsyncThunk } from "@reduxjs/toolkit";
import PlacesApi from "../../api/Places";
import PlacesActionType from "./ActionType";

const placesApi = new PlacesApi()

export const getPlaces = createAsyncThunk(PlacesActionType.GetAll,() => {
  return placesApi.getAll();
});

export const createPlace = createAsyncThunk(PlacesActionType.CreatePlace, (data: ICreateSafePlaceFormDtat) =>{
  return placesApi.create(data);
})