type MessageSenderType = {
  id: number;
  name: string;
};

export type MessageSendersType = MessageSenderType[];

type MessageItemType = {
  id: number;
  text: string;
};

export type MessageItemsType = MessageItemType[];

export type MessagesPageType = {
  newMessageText: string;
  messageSenders: MessageSendersType;
  messageItems: MessageItemsType;
};

type ActionCreatorsType = typeof messagesPageAC;
type ActionCreatorsTypeKeys = keyof ActionCreatorsType;
type ActionType = ReturnType<ActionCreatorsType[ActionCreatorsTypeKeys]>;

const initialState = {
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
};

export const messagesPageReducer = (
  state: MessagesPageType = initialState,
  action: ActionType
): MessagesPageType => {
  switch (action.type) {
    case 'CHANGE-NEW-MESSAGE-TEXT': {
      return { ...state, newMessageText: action.text };
    }

    case 'ADD-MESSAGE': {
      return {
        ...state,
        messageItems: [
          ...state.messageItems,
          {
            id: 3,
            text: state.newMessageText,
          },
        ],
        newMessageText: '',
      };
    }

    default: {
      return state;
    }
  }
};

export const messagesPageAC = {
  changeNewMessageTextAC: (text: string) => {
    return {
      type: 'CHANGE-NEW-MESSAGE-TEXT',
      text,
    } as const;
  },
  addMessageAC: () => {
    return { type: 'ADD-MESSAGE' } as const;
  },
};
