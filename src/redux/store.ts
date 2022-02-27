import { combineReducers, createStore } from 'redux';
import { profilePageReducer } from './profile-page-reducer';
import { messagesPageReducer } from './messages-page-reducer';
import { usersPageReducer } from './users-page-reducer';

export type StateType = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  profilePage: profilePageReducer,
  messagesPage: messagesPageReducer,
  usersPage: usersPageReducer,
});

export const store = createStore(rootReducer);
