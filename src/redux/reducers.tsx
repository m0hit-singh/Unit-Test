import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
};

const ProductsSlice = createSlice({
  name: "Products",
  initialState: initialState,
  reducers: {
    changeCategory: (state, action) => {
      return {
        ...initialState,
        category: action.payload,
      };
    },
  },
});

export const { changeCategory } = ProductsSlice.actions;
export default ProductsSlice.reducer;
