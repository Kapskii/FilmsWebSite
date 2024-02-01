import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { filmsSlice } from "./filmsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const rootReducer = combineSlices(filmsSlice);

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;