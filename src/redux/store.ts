import { combineReducers, createStore } from "redux";
import { profilePageReducer } from "./profile-page-reducer";
import { messagesPageReducer } from "./messages-page-reducer";

const reducer = combineReducers({
  profilePage: profilePageReducer,
  messagesPage: messagesPageReducer,
});

export const store = createStore(reducer);
