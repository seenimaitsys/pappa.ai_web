import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  schools: [],
  error: null,
  loading: false,
};

const getSchoolSlice = createSlice({
  name: "school",
  initialState,
  reducers: {
    getSchoolStart: (state) => {
      state.loading = true;
    },
    getSchoolSuccess: (state, action) => {
      state.schools = action.payload;
      state.loading = false;
      state.error = null;
    },
    getSchoolFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { getSchoolStart, getSchoolSuccess, getSchoolFailure } =
  getSchoolSlice.actions;

export default getSchoolSlice.reducer;
