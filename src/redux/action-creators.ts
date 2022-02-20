export const actionCreators = {
  changeNewMessageTextAC: (text: string) => {
    return {
      type: "CHANGE-NEW-MESSAGE-TEXT",
      text,
    } as const;
  },
  addMessageAC: () => {
    return { type: "ADD-MESSAGE" } as const;
  },
  changeNewPostTextAC: (text: string) => {
    return {
      type: "CHANGE-NEW-POST-TEXT",
      text,
    } as const;
  },
  addPostAC: () => {
    return { type: "ADD-POST" } as const;
  },
};
