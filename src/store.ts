import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Product } from "./types";

interface IState {
  data: Product[];
  favorites: Product[];
}

const initialState: IState = {
  data: [],
  favorites: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addData: (state, action: { payload: Product[] }) => {
      state.data = action.payload;
    },
    toggleFavorite: (state, action: { payload: Product }) => {
      const { payload } = action;
      const index = state.favorites.findIndex((p) => p.id === payload.id);
      if (index === -1) {
        state.favorites.push(payload);
      } else {
        state.favorites.splice(index, 1);
      }
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

export const { addData, toggleFavorite } = appSlice.actions;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
