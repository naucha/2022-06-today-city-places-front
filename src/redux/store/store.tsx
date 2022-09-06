import { configureStore } from "@reduxjs/toolkit";
import locationsReducer from "../features/locationsSlice";
import uiReducer from "../features/uiSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    locations: locationsReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
