import {
  addMessageAC,
  changeNewMessageTextAC,
} from "../redux/messages-page-reducer";
import { addPostAC, changeNewPostTextAC } from "../redux/profile-page-reducer";
import { EmptyObject } from "redux";
import { MessagesPageType, ProfilePageType } from "./entities-types";

export type ReduxTypes =
  | ReturnType<typeof changeNewMessageTextAC>
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof changeNewPostTextAC>
  | ReturnType<typeof addPostAC>;

export type DispatchType = (action: ReduxTypes) => void;

export type StateType = EmptyObject & {
  profilePage: ProfilePageType;
  messagesPage: MessagesPageType;
};
