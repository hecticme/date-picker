import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

function getTheme() {
  const storageTheme = localStorage.getItem('theme');
  if (storageTheme !== null) {
    return storageTheme;
  } else {
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)');
    return systemTheme ? 'light' : 'dark';
  }
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: getTheme(),
  reducers: {
    changeTheme(_, action: PayloadAction<'light' | 'dark'>) {
      return action.payload;
    },
  },
});

export default themeSlice.reducer;
