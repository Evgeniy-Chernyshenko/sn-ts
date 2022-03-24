import axios from 'axios';
import { AuthApiResponseType } from '../redux/auth-reducer';
import { ProfileType } from '../redux/profile-page-reducer';
import { UsersType } from '../redux/users-page-reducer';

type ApiGetReturnType<T> = {
  error: null | string;
  items: T;
  totalCount: number;
};

type ApiGet2ReturnType<T> = {
  resultCode: number;
  messages: string[];
  data: T;
};

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '02961556-53bc-4585-b670-252d64d59f3a',
  },
});

export const usersAPI = {
  getUsers: (page: number, count: number) => {
    return instance
      .get<ApiGetReturnType<UsersType>>(`users?page=${page}&count=${count}`)
      .then(({ data }) => data);
  },
};

export const followAPI = {
  follow: (id: number) => {
    return instance
      .post<ApiGet2ReturnType<{}>>(`follow/${id}`)
      .then(({ data }) => data);
  },
  unfollow: (id: number) => {
    return instance
      .delete<ApiGet2ReturnType<{}>>(`follow/${id}`)
      .then(({ data }) => data);
  },
};

export const authAPI = {
  getMe: () => {
    return instance
      .get<ApiGet2ReturnType<AuthApiResponseType>>('auth/me')
      .then(({ data }) => data);
  },
};

export const profileAPI = {
  getProfile: (id: number) => {
    return instance.get<ProfileType>(`profile/${id}`).then(({ data }) => data);
  },
};
