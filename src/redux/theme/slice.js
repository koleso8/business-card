import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: state => {
      document.body.classList.add(state.theme);
    },
    changeTheme: state => {
      if (state.theme === 'light') {
        document.body.classList.add('dark');
        state.theme = 'dark';
        document.body.classList.remove('light');
      } else {
        document.body.classList.add('light');
        state.theme = 'light';
        document.body.classList.remove('dark');
      }
    },
  },
});

export const themeReducer = slice.reducer;

export const { changeTheme, setTheme } = slice.actions;
