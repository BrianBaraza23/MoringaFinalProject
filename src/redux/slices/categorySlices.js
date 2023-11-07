import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  categories: [],
  success_create: false,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategoryStart: (state) => {
      state.loading = true;
      state.success_create = false;
    },
    addCategorySuccess: (state, action) => {
      state.loading = false;
      state.success_create = true;
    },
    addCategoryFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCategoryStart, addCategorySuccess, addCategoryFail } =
  categorySlice.actions;

export default categorySlice.reducer;
