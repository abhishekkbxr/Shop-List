import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../reducer/TodoReducer";

export const store = configureStore({
  reducer: {
    shop : shopReducer,
  },
});
