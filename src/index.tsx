import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import { DispatchType, StateType } from "./types/redux-types";

type RerenderEntireTreeType = (
  state: StateType,
  dispatch: DispatchType
) => void;

export const rerenderEntireTree: RerenderEntireTreeType = (state, dispatch) =>
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={dispatch} />
    </React.StrictMode>,
    document.getElementById("root")
  );

rerenderEntireTree(store.getState(), store.dispatch);

store.subscribe(() => rerenderEntireTree(store.getState(), store.dispatch));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
