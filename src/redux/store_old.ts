import {
  addMessageAC,
  changeNewMessageTextAC,
  messagesPageReducer,
} from "./messages-page-reducer";
import {
  addPostAC,
  changeNewPostTextAC,
  profilePageReducer,
} from "./profile-page-reducer";

type MessageSenderType = {
  id: number;
  name: string;
};

type MessageSendersType = MessageSenderType[];

type MessageItemType = {
  id: number;
  text: string;
};

type MessageItemsType = MessageItemType[];

type PostType = {
  id: number;
  text: string;
  likesCount: number;
};

export type PostsType = PostType[];

export type ProfilePageType = {
  newPostText: string;
  posts: PostsType;
};

export type MessagesPageType = {
  newMessageText: string;
  messageSenders: MessageSendersType;
  messageItems: MessageItemsType;
};

export type StateType = {
  profilePage: ProfilePageType;
  messagesPage: MessagesPageType;
};

export type RerenderEntireTreeType = () => void;

type SubscribeType = (callback: RerenderEntireTreeType) => void;

type GetStateType = () => StateType;

export type StoreType = {
  _state: StateType;
  getState: GetStateType;
  subscribe: SubscribeType;
  _rerenderEntireTree: RerenderEntireTreeType;
  dispatch: DispatchType;
};

export type ActionType =
  | ReturnType<typeof changeNewMessageTextAC>
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof changeNewPostTextAC>
  | ReturnType<typeof addPostAC>;

export type DispatchType = (action: ActionType) => void;

export const store_old: StoreType = {
  _state: {
    profilePage: {
      newPostText: "",
      posts: [
        {
          id: 1,
          text: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sed?",
          likesCount: 1,
        },
        {
          id: 2,
          text: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sed?",
          likesCount: 2,
        },
        {
          id: 3,
          text: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sed?",
          likesCount: 3,
        },
      ],
    },
    messagesPage: {
      newMessageText: "",
      messageSenders: [
        { id: 1, name: "Vasiliy" },
        { id: 2, name: "Petr" },
        { id: 3, name: "Masha" },
        { id: 4, name: "Bill Gates" },
        { id: 5, name: "Mark Zuckerberg" },
      ],
      messageItems: [
        { id: 1, text: "Hello World!!!" },
        { id: 2, text: "Bye World!" },
      ],
    },
  },

  getState() {
    return this._state;
  },
  subscribe(callback) {
    this._rerenderEntireTree = callback;
  },
  _rerenderEntireTree() {},

  dispatch(action) {
    this._state.profilePage = profilePageReducer(
      this._state.profilePage,
      action
    );

    this._state.messagesPage = messagesPageReducer(
      this._state.messagesPage,
      action
    );

    this._rerenderEntireTree();
  },
};
