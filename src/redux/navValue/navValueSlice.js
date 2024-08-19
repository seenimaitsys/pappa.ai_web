import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navValue: "",
};

export const navValueSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    SetNavValue: (state, action) => {
      state.navValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SetNavValue } = navValueSlice.actions;

export default navValueSlice.reducer;
