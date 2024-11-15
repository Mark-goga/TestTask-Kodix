
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistedReducer = persistReducer(
  {
    key: "auth",
    storage,
    whitelist: ["accessToken", "refreshToken", "isLoggedIn"],
  },
  authReducer
);

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
