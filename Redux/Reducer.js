import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    Data: [],
  },
  reducers: {
    GetData: (state, action) => {
      state.Data = [action.payload];
    },
  },
});

export const { GetData } = counterSlice.actions;  

export default counterSlice.reducer;
