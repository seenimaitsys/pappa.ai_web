import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import menuSlice from "./menu/menuSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import navValueSlice from "./navValue/navValueSlice";
import getSchoolSlice from "./getSchool/getSchoolSlice";

const rootReducer = combineReducers({
  user: userReducer,
  show: menuSlice,
  nav: navValueSlice,
  schools: getSchoolSlice,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (
    getDefaultMiddleware //this code prevent any error in browser
  ) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
