import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterAnecdotesOf(state, action) {
      console.log("state", state);
      const filter = action.payload;
      state.filter = filter;
    },
  },
});

export const { filterAnecdotesOf } = filterSlice.actions;
export default filterSlice.reducer;
