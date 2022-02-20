import React from "react";
import MyPosts from "./MyPosts";
import { StoreContext } from "../../../StoreContext";
import { actionCreators } from "../../../redux/action-creators";

export const MyPostsContainer = () => (
  <StoreContext.Consumer>
    {(store) => {
      const state = store.getState();

      const changeNewPostText = (value: string) => {
        store.dispatch(actionCreators.changeNewPostTextAC(value));
      };

      const addPost = () => {
        store.dispatch(actionCreators.addPostAC());
      };

      return (
        <MyPosts
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText}
          changeNewPostText={changeNewPostText}
          addPost={addPost}
        />
      );
    }}
  </StoreContext.Consumer>
);
