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

export type MessagesPageType = {
  newMessageText: string;
  messageSenders: MessageSendersType;
  messageItems: MessageItemsType;
};
