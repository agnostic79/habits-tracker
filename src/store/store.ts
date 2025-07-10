import { configureStore } from "@reduxjs/toolkit";

import habitsReducer from "./habitsSlice";

const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
