type UserType = {
  followed: boolean;
  id: number;
  name: string;
  photos: { small: string | null; large: string | null };
  status: string | null;
  uniqueUrlName: string | null;
};

export type UsersType = UserType[];

export type UsersPageType = {
  users: UsersType;
  page: number;
  count: number;
  totalCount: number;
  isFetching: boolean;
};

// type ActionCreatorsType = typeof usersPageAC;
// type ActionCreatorsTypeKeys = keyof ActionCreatorsType;
// type ActionCreatorType = ReturnType<ActionCreatorsType[ActionCreatorsTypeKeys]>;

type ActionCreatorsType<T> = T extends { [key: string]: infer V } ? V : never;
type ActionType = ReturnType<ActionCreatorsType<typeof usersPageAC>>;

const initialState = {
  users: [],
  page: 1,
  count: 100,
  totalCount: 0,
  isFetching: true,
};

export const usersPageReducer = (
  state: UsersPageType = initialState,
  action: ActionType
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

    case 'SET_TOTAL_COUNT':
      return { ...state, totalCount: action.totalCount };

    case 'SET_PAGE':
      return { ...state, page: action.page };

    case 'SET_IS_FETCHING':
      return { ...state, isFetching: action.isFetching };

    default:
      return state;
  }
};

export const usersPageAC = {
  setUsers: (users: UsersType) => {
    return {
      type: 'SET_USERS',
      users,
    } as const;
  },
  followUser: (id: number) => {
    return {
      type: 'FOLLOW_USER',
      id,
    } as const;
  },
  unfollowUser: (id: number) => {
    return {
      type: 'UNFOLLOW_USER',
      id,
    } as const;
  },
  setTotalCount: (totalCount: number) => {
    return {
      type: 'SET_TOTAL_COUNT',
      totalCount,
    } as const;
  },
  setPage: (page: number) => {
    return {
      type: 'SET_PAGE',
      page,
    } as const;
  },
  setIsFetching: (isFetching: boolean) => {
    return {
      type: 'SET_IS_FETCHING',
      isFetching,
    } as const;
  },
};
