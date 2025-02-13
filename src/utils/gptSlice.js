import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    showGptSuggestions: [],
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptSuggestions: (state, action) => {
      state.showGptSuggestions = action.payload;
    },
  },
});

export const { toggleGptSearchView, addGptSuggestions } = gptSlice.actions;
export default gptSlice.reducer;
