import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import placesReducer from "./Place/Reducer";
import placeDetailsReducer from "./PlaceDetails/Reducer";
import popupManagementReducer from "./PopupManagement/Reducer";


export const store = configureStore ({
  reducer: {
    places: placesReducer,
    placesDetails: placeDetailsReducer,
    popupManagement: popupManagementReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
