import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

function getTheme() {
  const storageTheme = localStorage.getItem('theme');
  if (storageTheme !== null) {
    return storageTheme;
  } else {
    return 'system';
  }
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: getTheme(),
  reducers: {
    changeTheme(_, action: PayloadAction<string>) {
      if (action.payload === 'system') {
        localStorage.removeItem('theme');
      }
      return action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
