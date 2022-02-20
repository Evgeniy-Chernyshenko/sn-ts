import { ProfilePageType } from "../types/entities-types";
import { ActionType } from "../types/redux-types";

const initialState: ProfilePageType = {
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
};

export const profilePageReducer = (
  state = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "CHANGE-NEW-POST-TEXT": {
      state.newPostText = action.text;

      return state;
    }

    case "ADD-POST": {
      state.posts.push({
        id: 4,
        text: state.newPostText,
        likesCount: 0,
      });

      state.newPostText = "";

      return state;
    }

    default: {
      return state;
    }
  }
};

export const changeNewPostTextAC = (text: string) =>
  ({
    type: "CHANGE-NEW-POST-TEXT",
    text,
  } as const);

export const addPostAC = () => ({ type: "ADD-POST" } as const);
