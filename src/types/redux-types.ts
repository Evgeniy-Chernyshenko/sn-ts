import { actionCreators } from "../redux/action-creators";
import { reducer, store } from "../redux/store";

type ActionCreatorsType = typeof actionCreators;
type ActionCreatorsTypeKeys = keyof ActionCreatorsType;
export type ActionType = ReturnType<ActionCreatorsType[ActionCreatorsTypeKeys]>;

export type DispatchType = (action: ActionType) => void;

export type StateType = ReturnType<typeof reducer>;

export type StoreType = typeof store;
