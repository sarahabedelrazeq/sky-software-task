import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_THEME, DEFAULT_LANGUAGE } from "constants";

const initialState = {
  language: DEFAULT_LANGUAGE,
  theme: DEFAULT_THEME,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    switchLanguage: (state, action) => {
      state.language = action.payload;
    },
    switchTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { switchLanguage, switchTheme } = appSlice.actions;
export default appSlice.reducer;
