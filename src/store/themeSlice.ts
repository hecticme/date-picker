import { createSlice } from '@reduxjs/toolkit';

const initialState = 'light';

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action) {
      state = action.payload;
    },
  },
});

export default themeSlice.reducer;
