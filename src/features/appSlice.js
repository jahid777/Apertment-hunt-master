import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    title: null,
    price: null,
  },
  reducers: {
    setApartmentInfo: (state, action) => {
      state.title = action.payload.title;
      state.price = action.payload.price;
      state.photo = action.payload.photo;
      // console.log(state.channelId, state.channelName);
    },
  },
});

export const { setApartmentInfo } = appSlice.actions;

// export const selectChannelId = (state) => state.app.ChannelId;
// export const selectChannelName = (state) => state.app.ChannelName;
export const selectApartment = (state) => state.app;

export default appSlice.reducer;
