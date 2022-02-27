type PostType = {
  id: number;
  text: string;
  likesCount: number;
};

export type PostsType = PostType[];

type ProfilePageType = {
  newPostText: string;
  posts: PostsType;
};

type ActionCreatorsType = typeof profilePageAC;
type ActionCreatorsTypeKeys = keyof ActionCreatorsType;
type ActionType = ReturnType<ActionCreatorsType[ActionCreatorsTypeKeys]>;

const initialState = {
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
};

export const profilePageReducer = (
  state: ProfilePageType = initialState,
  action: ActionType
): ProfilePageType => {
  switch (action.type) {
    case 'CHANGE-NEW-POST-TEXT': {
      return { ...state, newPostText: action.text };
    }

    case 'ADD-POST': {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 4,
            text: state.newPostText,
            likesCount: 0,
          },
        ],
        newPostText: '',
      };
    }

    default: {
      return state;
    }
  }
};

export const profilePageAC = {
  changeNewPostTextAC: (text: string) => {
    return {
      type: 'CHANGE-NEW-POST-TEXT',
      text,
    } as const;
  },
  addPostAC: () => {
    return { type: 'ADD-POST' } as const;
  },
};
