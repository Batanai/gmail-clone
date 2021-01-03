import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMail: null,
    sendMesageIsOpen: false,
  },
  reducers: {
    openSendMessage: (state) => {
      state.sendMesageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMesageIsOpen = false;
    },
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
  },
});

export const {
  openSendMessage,
  closeSendMessage,
  selectMail,
} = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMesageIsOpen = (state) => state.mail.sendMesageIsOpen;

export default mailSlice.reducer;
