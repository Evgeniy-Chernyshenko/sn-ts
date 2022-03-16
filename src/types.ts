export type ApiGetReturnType<T> = {
  error: null | string;
  items: T;
  totalCount: number;
};
