type PostType = {
  id: number;
  text: string;
  likesCount: number;
};

export type PostsType = PostType[];

type ContactsType = {
  facebook: string;
  github: string;
  instagram: string;
  mainLink: string;
  twitter: string;
  vk: string;
  website: string;
  youtube: string;
};

type PhotosType = {
  large: string;
  small: string;
};

export type ProfileType = {
  aboutMe: string;
  contacts: ContactsType;
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  photos: PhotosType;
  userId: number;
} | null;

type ProfilePageType = {
  newPostText: string;
  posts: PostsType;
  profile: ProfileType;
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
  profile: null,
};

export const profilePageReducer = (
  state: ProfilePageType = initialState,
  action: ActionType
): ProfilePageType => {
  switch (action.type) {
    case 'CHANGE_NEW_POST_TEXT': {
      return { ...state, newPostText: action.text };
    }

    case 'ADD_POST': {
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

    case 'SET_INFO': {
      return { ...state, profile: action.info };
    }

    default: {
      return state;
    }
  }
};

export const profilePageAC = {
  changeNewPostText: (text: string) => {
    return {
      type: 'CHANGE_NEW_POST_TEXT',
      text,
    } as const;
  },
  addPost: () => {
    return { type: 'ADD_POST' } as const;
  },
  setProfile: (info: ProfileType) => ({ type: 'SET_INFO', info } as const),
};
