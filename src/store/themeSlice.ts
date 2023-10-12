import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState = 'light';

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<string>) {
      state = action.payload;
    },
  },
});

export default themeSlice.reducer;
