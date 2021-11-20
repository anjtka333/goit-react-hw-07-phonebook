import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducerContacts } from "./contacts/contactsReducers";
import errorReduccer from "./error/errorReducer";
import loaderReducer from "./loader/loaderReduser";

const rootReducer = combineReducers({
  contacts: reducerContacts,
  loader: loaderReducer,
  error: errorReduccer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production", // => true || false
});

export default store;
