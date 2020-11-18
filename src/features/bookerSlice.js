import { createSlice } from "@reduxjs/toolkit";

export const bookerSlice = createSlice({
  name: "booker",
  initialState: {
    name: null,
    number: null,
    email: null,
    message: null,
  },
  reducers: {
    setBookerInfo: (state, action) => {
      state.name = action.payload.name;
      state.number = action.payload.number;
      state.email = action.payload.email;
      state.message = action.payload.message;
      // console.log(state.channelId, state.channelName);
    },
  },
});

export const { setBookerInfo } = bookerSlice.actions;

// export const selectChannelId = (state) => state.app.ChannelId;
// export const selectChannelName = (state) => state.app.ChannelName;
export const selectBooker = (state) => state.booker;

export default bookerSlice.reducer;
