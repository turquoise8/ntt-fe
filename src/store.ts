import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Product } from "./types";

interface IState {
  data: Product[];
}

const initialState: IState = {
  data: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addData: (state, action: { payload: Product[] }) => {
      state.data = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const { addData } = appSlice.actions;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
