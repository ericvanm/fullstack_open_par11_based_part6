import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotificationMessagesOf(state, action) {
      const message = action.payload;
      state.notification = message;
    },
    resetNotificationMessagesOf(state) {
      state.notification = "";
    },
  },
});

export const { setNotificationMessagesOf, resetNotificationMessagesOf } =
  notificationSlice.actions;

export const setNotification = (messageNotif, timeInSec) => {
  return async (dispatch) => {
    dispatch(setNotificationMessagesOf(messageNotif));
    setTimeout(() => {
      dispatch(resetNotificationMessagesOf());
    }, timeInSec * 1000);
  };
};

export default notificationSlice.reducer;
