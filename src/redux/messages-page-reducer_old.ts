import { ActionType, MessagesPageType } from "./store_old";

type MessagesPageReducerType = (
  state: MessagesPageType,
  action: ActionType
) => MessagesPageType;

export const messagesPageReducer: MessagesPageReducerType = (state, action) => {
  switch (action.type) {
    case "CHANGE-NEW-MESSAGE-TEXT": {
      state.newMessageText = action.text;

      return state;
    }

    case "ADD-MESSAGE": {
      state.messageItems.push({
        id: 3,
        text: state.newMessageText,
      });
      state.newMessageText = "";

      return state;
    }

    default: {
      return state;
    }
  }
};

export const changeNewMessageTextAC = (text: string) =>
  ({
    type: "CHANGE-NEW-MESSAGE-TEXT",
    text,
  } as const);

export const addMessageAC = () => ({ type: "ADD-MESSAGE" } as const);
