type UserType = {
  id: number;
  name: string;
  statusText: string;
  userPic: string;
  followed: boolean;
  location: { country: string; city: string };
};

export type UsersType = UserType[];

export type UsersPageType = {
  users: UsersType;
};

type ActionCreatorsType = typeof usersPageAC;
type ActionCreatorsTypeKeys = keyof ActionCreatorsType;
type ActionCreatorType = ReturnType<ActionCreatorsType[ActionCreatorsTypeKeys]>;

const initialState = { users: [] };

export const usersPageReducer = (
  state: UsersPageType = initialState,
  action: ActionCreatorType
): UsersPageType => {
  switch (action.type) {
    case 'FOLLOW_USER':
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.id ? { ...u, followed: true } : u
        ),
      };

    case 'UNFOLLOW_USER':
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.id ? { ...u, followed: false } : u
        ),
      };

    case 'SET_USERS':
      return { ...state, users: action.users };

    default:
      return state;
  }
};

export const usersPageAC = {
  setUsersAC: (users: UsersType) => {
    return {
      type: 'SET_USERS',
      users,
    } as const;
  },
  followUserAC: (id: number) => {
    return {
      type: 'FOLLOW_USER',
      id,
    } as const;
  },
  unfollowUserAC: (id: number) => {
    return {
      type: 'UNFOLLOW_USER',
      id,
    } as const;
  },
};
