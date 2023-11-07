import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlices";
export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
