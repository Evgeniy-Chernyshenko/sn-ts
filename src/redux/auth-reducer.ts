import { DispatchType } from './store';
import { authAPI, profileAPI } from './../api/api';
import { ProfileType } from './profile-page-reducer';

export type AuthApiResponseType = {
  id: number | null;
  email: string | null;
  login: string | null;
};

export type AuthStateType = AuthApiResponseType & {
  isAuth: boolean;
  profile: ProfileType;
};

type ActionCreatorsType<T> = T extends { [key: string]: infer V } ? V : never;
type ActionType = ReturnType<ActionCreatorsType<typeof authAC>>;

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  profile: null,
};

export const authReducer = (
  state: AuthStateType = initialState,
  action: ActionType
): AuthStateType => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return { ...state, ...action.payload, isAuth: true };

    default:
      return state;
  }
};

export const authAC = {
  setUserData: (payload: AuthApiResponseType & { profile: ProfileType }) =>
    ({
      type: 'SET_USER_DATA',
      payload,
    } as const),
};

export const authTC = {
  setAuthData: () => (dispatch: DispatchType) => {
    authAPI.getMe().then((authData) => {
      authData.resultCode === 0 &&
        profileAPI.getProfile(authData.data.id!).then((profileData) => {
          dispatch(
            authAC.setUserData({
              ...authData.data,
              profile: profileData,
            })
          );
        });
    });
  },
};
