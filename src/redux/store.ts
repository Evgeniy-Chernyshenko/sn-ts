import { combineReducers, createStore } from 'redux';
import { profilePageReducer } from './profile-page-reducer';
import { messagesPageReducer } from './messages-page-reducer';
import { usersPageReducer } from './users-page-reducer';
import { authReducer } from './auth-reducer';

export type RootStateType = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  profilePage: profilePageReducer,
  messagesPage: messagesPageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
});

export const store = createStore(rootReducer);

// @ts-ignore
window.store = store;
