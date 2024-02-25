import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    apiConation: function (a, b) {
      if (b.payload.length >= 0) {
        a.value = b.payload;
      } else {
        a.value.push(b.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { apiConation } = counterSlice.actions;

export default counterSlice.reducer;
