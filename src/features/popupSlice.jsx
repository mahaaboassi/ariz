import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  component : <></>,
  type : ""
};

export const popupSlice = createSlice({
  name: 'Popup',
  initialState,
  reducers: {
    changePopup: (state, action) => {
      state.isOpen = action.payload.isOpen;
      state.component = action.payload.component || <></>;
      state.type = action.payload.type
    },
  },
});

export const { changePopup } = popupSlice.actions;

export default popupSlice.reducer;