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

export type AddPostType = () => void;

export const addPost: AddPostType = () => {
  state.profilePage.posts.push({
    id: 4,
    text: state.profilePage.newPostText,
    likesCount: 0,
  });

  state.profilePage.newPostText = '';

  rerenderEntireTree(state);
};

export type ChangeNewPostTextType = (text: string) => void;

export const changeNewPostText: ChangeNewPostTextType = (text) => {
  state.profilePage.newPostText = text;

  rerenderEntireTree(state);
};

export type AddMessageType = () => void;

export const addMessage: AddMessageType = () => {
  state.messagesPage.messageItems.push({
    id: 3,
    text: state.messagesPage.newMessageText,
  });
  state.messagesPage.newMessageText = '';

  rerenderEntireTree(state);
};

export type ChangeNewMessageTextType = (text: string) => void;

export const changeNewMessageText: ChangeNewMessageTextType = (text) => {
  state.messagesPage.newMessageText = text;

  rerenderEntireTree(state);
};

let state: StateType = {
  profilePage: {
    newPostText: '',
    posts: [
      {
        id: 1,
        text: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sed?',
        likesCount: 1,
      },
      {
        id: 2,
        text: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sed?',
        likesCount: 2,
      },
      {
        id: 3,
        text: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sed?',
        likesCount: 3,
      },
    ],
  },
  messagesPage: {
    newMessageText: '',
    messageSenders: [
      { id: 1, name: 'Vasiliy' },
      { id: 2, name: 'Petr' },
      { id: 3, name: 'Masha' },
      { id: 4, name: 'Bill Gates' },
      { id: 5, name: 'Mark Zuckerberg' },
    ],
    messageItems: [
      { id: 1, text: 'Hello World!!!' },
      { id: 2, text: 'Bye World!' },
    ],
  },
};

export type RerenderEntireTreeType = (state: StateType) => void;

let rerenderEntireTree: RerenderEntireTreeType;
export const subscribe = (callback: RerenderEntireTreeType) => {
  rerenderEntireTree = callback;
};

export default state;
