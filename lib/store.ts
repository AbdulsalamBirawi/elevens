import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { BackendApi } from "./services/backendApi";

export const makeStore = () =>
  configureStore({
    reducer: {
      [BackendApi.reducerPath]: BackendApi.reducer,
    },
    devTools: false,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(BackendApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;

export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });
