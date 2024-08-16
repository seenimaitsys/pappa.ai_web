import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarShow: false,
};

export const menuSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    ShowMenu: (state) => {
      state.sidebarShow = true;
    },
    hideMenu: (state) => {
      state.sidebarShow = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ShowMenu, hideMenu } = menuSlice.actions;

export default menuSlice.reducer;
