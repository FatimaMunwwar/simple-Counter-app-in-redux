import { configureStore, createSlice } from "@reduxjs/toolkit";

const reducerFn = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increase(state, action) {
      state.counter++;
    },
    decrease(state, action) {
      state.counter--;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
    clear(state, action) {
      state.counter = 0;
    },
  },
});

export const { increase, decrease, addBy, clear } = reducerFn.actions;

const store = configureStore({
  reducer: reducerFn.reducer,
});

export default store;
