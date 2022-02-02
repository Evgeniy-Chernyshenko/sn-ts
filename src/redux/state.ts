import { rerenderEntireTree } from './../rerender';

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
  NewPostText: string;
  posts: PostsType;
};

export type MessagesPageType = {
  messageSenders: MessageSendersType;
  messageItems: MessageItemsType;
};

export type StateType = {
  profilePage: ProfilePageType;
  messagesPage: MessagesPageType;
};

export type AddPostType = (text: string) => void;

export const addPost: AddPostType = (text) => {
  state.profilePage.posts.push({ id: 4, text, likesCount: 0 });

  rerenderEntireTree(state, addPost, changeNewPostText);
};

export type ChangeNewPostTextType = (text: string) => void;

export const changeNewPostText: ChangeNewPostTextType = (text) => {
  state.profilePage.NewPostText = text;

  rerenderEntireTree(state, addPost, changeNewPostText);
};

let state: StateType = {
  profilePage: {
    NewPostText: '',
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

export default state;