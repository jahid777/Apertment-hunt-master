import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import appReducer from "../features/appSlice";
import bookerReducer from "../features/bookerSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
    booker: bookerReducer,
  },
});
