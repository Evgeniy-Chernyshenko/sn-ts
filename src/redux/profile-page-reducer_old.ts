import { ActionType, ProfilePageType } from "./store_old";

type ProfilePageReducerType = (
  state: ProfilePageType,
  action: ActionType
) => ProfilePageType;

export const profilePageReducer: ProfilePageReducerType = (state, action) => {
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
