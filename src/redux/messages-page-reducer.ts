import { MessagesPageType } from "../types/entities-types";
import { ActionType } from "../types/redux-types";

const initialState: MessagesPageType = {
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
};

export const messagesPageReducer = (
  state = initialState,
  action: ActionType
) => {
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
